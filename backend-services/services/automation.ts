/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import puppeteer, { Browser, Page, ElementHandle } from "puppeteer";
import path from "path";
import fs, { writeFileSync } from "fs";
import logger from "../utils/logger";
import config from "../config/config";
import { IrdSubmissionData, SubmissionResult } from "../types/submission";
import { solveCaptchaWith2Captcha } from "../utils/solveCaptcha";
import { downloadFileToTmp } from "../utils/downloadFilesToTempFolder";
import { v4 as uuidv4 } from "uuid";

/**
 * Maximum number of retries for critical operations
 */
const MAX_RETRIES = 3;

/**
 * Main function to automate IRD TIN registration submission
 * @param submissionData The data to submit
 * @param submissionId Unique identifier for this submission
 *
 * @returns Result of the submission process
 */
export async function automateIrdSubmission(
  submissionData: IrdSubmissionData,
  submissionId: string
): Promise<SubmissionResult> {
  let browser: Browser | null = null;

  const result: SubmissionResult = {
    submissionId,
    timestamp: new Date().toISOString(),
    status: "initiated",
    success: false,
    message: "Starting submission process",
    errors: [],
    screenshots: [],
  };

  try {
    logger.info(`Starting IRD submission automation for ${submissionId}`);
    logger.info("Launching browser...");

    browser = await puppeteer.launch({
      headless: config.puppeteer.headless,
      slowMo: 0,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--disable-gpu",
      ],
      timeout: 60000,
    });

    logger.info("Browser launched successfully");

    const page = await browser.newPage();
    page.setDefaultTimeout(config.puppeteer.timeout || 60000);
    await page.setViewport({ width: 1366, height: 768 });

    // Disable CSS animations
    await page.evaluateOnNewDocument(() => {
      const style = document.createElement("style");
      style.innerHTML = `* { transition: none !important; animation: none !important; }`;
      document.head.appendChild(style);
    });

    if (!fs.existsSync(config.puppeteer.screenshotDir)) {
      fs.mkdirSync(config.puppeteer.screenshotDir, { recursive: true });
    }

    await withRetry(
      () => navigateToRegistrationPage(page, result),
      "navigateToRegistrationPage",
      result
    );

    await withRetry(
      () => selectRegistrationType(page, "INDIVIDUAL LOCAL", result),
      "selectRegistrationType",
      result
    );

    await withRetry(
      () => fillPersonalInfo(page, submissionData, result),
      "fillPersonalInfo",
      result
    );

    if (submissionData.docs) {
      await withRetry(
        () => uploadSupportingDocuments(page, submissionData.docs, result),
        "uploadNICDocument",
        result
      );
    }

    // await withRetry(
    //   () => fillDeclarationSection(page, submissionData, result),
    //   "fillDeclarationSection",
    //   result
    // );

    return result;
  } catch (error: SubmissionResult | any) {
    logger.error("❌ Submission failed", error);
    result.status = "failed";
    result.message = error?.message || "Unknown error occurred";
    result.errors.push(error);
    return result;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

/**
 * Retry wrapper for critical operations
 */
async function withRetry<T>(
  operation: () => Promise<T>,
  stepName: string,
  result: SubmissionResult,
  maxRetries: number = MAX_RETRIES
): Promise<T> {
  let lastError: any;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      logger.info(`Attempting ${stepName} (attempt ${attempt}/${maxRetries})`);
      return await operation();
    } catch (error: any) {
      lastError = error;
      error.step = stepName;

      // Log retry attempt
      logger.warn(`${stepName} failed on attempt ${attempt}/${maxRetries}`, {
        error,
      });

      // Add to errors list but don't fail yet if we have retries left
      result.errors.push({
        step: stepName,
        message: `Attempt ${attempt}/${maxRetries} failed: ${
          error.message || "Unknown error"
        }`,
        timestamp: new Date().toISOString(),
      });

      // If we have retries left, wait before trying again
      if (attempt < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, attempt - 1), 10000);
        logger.info(`Retrying ${stepName} in ${delay}ms...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  // If we get here, all retries failed
  logger.error(`${stepName} failed after ${maxRetries} attempts`, {
    lastError,
  });
  throw lastError;
}

/**
 * Navigate to the IRD registration page
 */
async function navigateToRegistrationPage(
  page: Page,
  result: SubmissionResult
): Promise<SubmissionResult> {
  const url = `${config.irdPortal.baseUrl}${config.irdPortal.registrationUrl}`;

  try {
    logger.info("Starting navigation to IRD registration page");

    // Navigate with a shorter timeout and wait for network idle
    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Ensure the page is fully loaded
    await page.waitForFunction(() => document.readyState === "complete", {
      timeout: 20000,
    });

    logger.info("Successfully navigated to IRD registration page");
    return result;
  } catch (error: unknown) {
    logger.error("Failed to navigate to IRD registration page", { error });
    (error as any).step = "navigateToRegistrationPage";
    throw error;
  }
}

/**
 * Select the registration type from the dropdown
 */
export async function selectRegistrationType(
  page: Page,
  type: string,
  result: SubmissionResult
): Promise<SubmissionResult> {
  try {
    logger.info("⚡ Selecting registration type...");

    // Step 1: Wait for dropdown trigger to appear
    await page.waitForSelector("span.k-dropdown-wrap", { timeout: 5000 });

    // Step 2: Open dropdown
    await page.click("span.k-dropdown-wrap");

    // Step 3: Wait for listbox to load
    await page.waitForSelector("ul#EntityCode_listbox li", { timeout: 5000 });

    // Step 4: Use evaluate to select option by text content
    const found = await page.evaluate((targetText) => {
      const items = document.querySelectorAll("ul#EntityCode_listbox li");
      for (const item of items) {
        if (item.textContent?.trim() === targetText) {
          (item as HTMLElement).click();
          return true;
        }
      }
      return false;
    }, type);

    if (!found) {
      throw new Error(`Registration type "${type}" not found`);
    }

    // Step 5: Wait for the dynamic section to appear
    await page.waitForFunction(
      () => {
        const el = document.querySelector("#commonGroup");
        return el && !el.classList.contains("hidden");
      },
      { timeout: 10000 }
    );

    logger.info("✅ Registration type selected: " + type);
    result.message = `Registration type "${type}" selected successfully`;
    return result;
  } catch (error) {
    logger.error("❌ Failed to select registration type", { error });
    (error as any).step = "selectRegistrationType";
    throw error;
  }
}

/**
 * Fill personal information fields in the registration form
 */
export async function fillPersonalInfo(
  page: Page,
  data: IrdSubmissionData,
  result: SubmissionResult
): Promise<SubmissionResult> {
  try {
    logger.info("⚡ Optimized: Filling personal information...");

    // Fill all input fields and Kendo dropdowns in one evaluate
    await page.evaluate((data) => {
      const setValue = (selector: string, value: string) => {
        const el = document.querySelector(selector) as HTMLInputElement;
        if (el) {
          el.value = value;
          el.dispatchEvent(new Event("input", { bubbles: true }));
        }
      };

      const setDropdown = (selector: string, value: string) => {
        const ddl = (window as any).$?.(selector)?.data("kendoDropDownList");
        if (ddl) {
          ddl.value(value);
          ddl.trigger("change");
        }
      };

      const setDate = (selector: string, value: string) => {
        const picker = (window as any).$?.(selector)?.data("kendoDatePicker");
        if (picker) {
          const parsed = new Date(value);
          if (!isNaN(parsed.getTime())) {
            picker.value(parsed);
            picker.trigger("change");
          }
        }
      };

      // Input fields
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_EntityId",
        data.nic
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_FullName",
        data.fullName
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_NameWithInitials",
        data.nameWithInitials
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_WebsiteURL",
        data.websiteUrl || ""
      );

      // Official address
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerOfficialAddressModel_PremisesNo",
        data.address?.premisesNo?.toUpperCase() || ""
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerOfficialAddressModel_UnitNo",
        data.address?.unitNo?.toUpperCase() || ""
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerOfficialAddressModel_StreetName1",
        data.address?.line1?.toUpperCase() || ""
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerOfficialAddressModel_StreetName2",
        data.address?.line2?.toUpperCase() || ""
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerOfficialAddressModel_StreetName3",
        data.address?.line3?.toUpperCase() || ""
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerOfficialAddressModel_PostalCode",
        data.address?.postalCode || ""
      );

      // Residential address
      setValue(
        "#TaxpayerDetail_TaxpayerRegisteredAddressModel_PremisesNo",
        data.residentialAddress?.premisesNo?.toUpperCase() || ""
      );
      setValue(
        "#TaxpayerDetail_TaxpayerRegisteredAddressModel_UnitNo",
        data.residentialAddress?.unitNo?.toUpperCase() || ""
      );
      setValue(
        "#TaxpayerDetail_TaxpayerRegisteredAddressModel_StreetName1",
        data.residentialAddress?.line1?.toUpperCase() || ""
      );
      setValue(
        "#TaxpayerDetail_TaxpayerRegisteredAddressModel_StreetName2",
        data.residentialAddress?.line2?.toUpperCase() || ""
      );
      setValue(
        "#TaxpayerDetail_TaxpayerRegisteredAddressModel_StreetName3",
        data.residentialAddress?.line3?.toUpperCase() || ""
      );
      setValue(
        "#TaxpayerDetail_TaxpayerRegisteredAddressModel_PostalCode",
        data.residentialAddress?.postalCode || ""
      );

      // Contact
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerContactModel_MobileNo",
        data.contact?.mobile || ""
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerContactModel_OfficeNo",
        data.contact?.office || ""
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerContactModel_HomeNo",
        data.contact?.home || ""
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerContactModel_FaxNo",
        data.contact?.fax || ""
      );
      setValue(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerContactModel_Email",
        data.contact?.email || ""
      );

      // Bank
      setValue(
        "#TaxpayerDetail_TaxpayerBankModel_BankAccount",
        data.bank?.accountNo || ""
      );

      // Kendo Dropdowns
      setDropdown(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_NameWithInitialsCode",
        data.initialsSalutationCode
      );
      setDropdown(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_BirthCountryCode",
        data.birthCountryCode
      );
      setDropdown(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_GenderCode",
        data.genderCode
      );
      setDropdown(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_PreferredLanguageCode",
        data.preferredLanguageCode
      );
      setDropdown(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_PreferredModeCommunicationCode",
        data.preferredCommunicationCode
      );
      setDropdown(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_NearestOffice",
        data.nearestOfficeCode ?? ""
      );
      setDropdown(
        "#TaxpayerDetail_TaxpayerBankModel_BankNameCode",
        data.bank?.bankNameCode ?? ""
      );
      setDropdown(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_Profession",
        data.profession
      );

      // Set Profession Other if applicable
      if (data.profession === "12") {
        setValue(
          "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_ProfessionOther",
          data.professionOther?.toUpperCase() || ""
        );
      }
      setDropdown(
        "#TaxpayerDetail_IntranetRegistrationCommonModel_RegistrationPurposeCode",
        data.registrationPurpose
      );
      // Make the textarea editable
      const otherPurposeSelector =
        "#TaxpayerDetail_IntranetRegistrationCommonModel_OtherRegistrationPurpose";
      const el = document.querySelector(otherPurposeSelector);
      if (el) {
        el.removeAttribute("readonly");
      }

      // Then use setValue
      setValue(otherPurposeSelector, data.remarks?.toUpperCase() || "");

      setDropdown(
        "#TaxpayerDetail_AdditionalCityAddressModel_ProvinceCode",
        data.statAddress?.province
      );
      setDropdown(
        "#TaxpayerDetail_AdditionalCityAddressModel_DistrictCode",
        data.statAddress?.district
      );
      setDropdown(
        "#TaxpayerDetail_AdditionalCityAddressModel_DivisionalSecretariatCode",
        data.statAddress?.secretariat
      );
      setDropdown(
        "#TaxpayerDetail_AdditionalCityAddressModel_GramaNiladhariDivisionsCode",
        data.statAddress?.gramaNiladhari
      );

      // Date
      setDate(
        "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_BirthDate",
        data.dateOfBirth
      );

      // --- Civil Status + Spouse Details ---
      const civilStatusInputs = document.querySelectorAll(
        "input[name='TaxpayerDetail.IndividualLocalModel.FamilyModel.MarriedIN']"
      );
      civilStatusInputs.forEach((el) => {
        if (
          (el as HTMLInputElement).value ===
          (data.familyDetails?.civilStatus ?? "SINGLE")
        ) {
          (el as HTMLInputElement).checked = true;
          el.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });

      if (data.familyDetails?.civilStatus === "MARRIED") {
        setValue(
          "#TaxpayerDetail_IndividualLocalModel_FamilyModel_SpouseName",
          data.familyDetails?.spouseName?.toUpperCase() || ""
        );
        setValue(
          "#TaxpayerDetail_IndividualLocalModel_FamilyModel_SpouseNIC",
          data.familyDetails?.spouseNic?.toUpperCase() || ""
        );
        setValue(
          "#TaxpayerDetail_IndividualLocalModel_FamilyModel_SpouseTIN",
          data.familyDetails?.spouseTin?.toUpperCase() || ""
        );
      }

      // --- Dual Citizenship (Yes/No) ---
      const dualYes = document.querySelector(
        "#DualCitizenship_Y"
      ) as HTMLInputElement;
      const dualNo = document.querySelector(
        "#DualCitizenship_N"
      ) as HTMLInputElement;
      if (data.dualCitizenship === "Y" && dualYes) {
        dualYes.checked = true;
        dualYes.dispatchEvent(new Event("change", { bubbles: true }));
      } else if (dualNo) {
        dualNo.checked = true;
        dualNo.dispatchEvent(new Event("change", { bubbles: true }));
      }

      // --- Dual Citizenship Country (only if Yes) ---
      if (data.dualCitizenship === "Y") {
        const dualDropdown = (window as any)
          .$?.(
            "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_DualCitizenCountry"
          )
          ?.data("kendoDropDownList");
        if (dualDropdown) {
          dualDropdown.value(data.dualCitizenCountryCode);
          dualDropdown.trigger("change");
        }
      }

      // --- Source of Income ---
      if (Array.isArray(data.sourceOfIncome)) {
        data.sourceOfIncome.forEach((source) => {
          const checkbox = document.querySelector(
            `input[name='TaxpayerDetail.IndividualLocalModel.TaxpayerIndividualModel.SourceofIncome'][value='${source}']`
          ) as HTMLInputElement;
          if (checkbox) {
            checkbox.checked = true;
            checkbox.dispatchEvent(new Event("change", { bubbles: true }));
          }
        });

        // If "OTHERS" (value = "999") is selected
        if (data.sourceOfIncome.includes("999") && data.otherSourceOfIncome) {
          const othersInputSelector =
            "#TaxpayerDetail_IndividualLocalModel_TaxpayerIndividualModel_OtherSourceOfIncome";
          const othersInput = document.querySelector(
            othersInputSelector
          ) as HTMLInputElement;
          if (othersInput) {
            othersInput.removeAttribute("readonly");
            othersInput.value = data.otherSourceOfIncome.toUpperCase();
            othersInput.dispatchEvent(new Event("input", { bubbles: true }));
          }
        }
      }
    }, data);

    logger.info("✅ All fields filled via evaluate");

    result.message = "Personal information filled successfully";
    result.status = "processing";

    return result;
  } catch (error) {
    logger.error("❌ Failed to fill personal info", { error });
    (error as any).step = "fillPersonalInfo";
    throw error;
  }
}

/**
 * Uploads one or more supporting documents, verifies them, clicks Next, and takes a final screenshot.
 */
export async function uploadSupportingDocuments(
  page: Page,
  docs: { subDocumentType: string; firebaseUrl: string; fileType: string }[],
  result: SubmissionResult
): Promise<SubmissionResult> {
  try {
    // Wait for the Kendo UI DropDownList to be fully initialized (only needs to be done once)
    try {
      await page.waitForFunction(
        () => {
          const ddl = (window as any)
            .$?.("#TPR001B1_0_docsubtype")
            ?.data("kendoDropDownList");
          return ddl && ddl.dataSource.data().length > 0;
        },
        { timeout: 15000 }
      );
    } catch (error) {
      console.error("❌ KendoDropDownList did not initialize in time.", error);
      await page.screenshot({
        path: "screenshots/kendo-init-failed.png",
        fullPage: true,
      });
      throw new Error(
        "KendoDropDownList did not become available for interaction."
      );
    }

    // Loop through each document and upload it
    for (const doc of docs) {
      const fileName = `${doc.subDocumentType.toUpperCase()}_${uuidv4()}.${
        doc.fileType
      }`;
      console.log(`--- Starting upload for: ${fileName} ---`);

      // Step 1: Select the sub-document type from the dropdown for the current document
      await page.evaluate((subType) => {
        const ddl = (window as any)
          .$?.("#TPR001B1_0_docsubtype")
          ?.data("kendoDropDownList");
        if (ddl) {
          const item = ddl.dataSource
            .data()
            .find((i: any) => i.Value?.toUpperCase() === subType.toUpperCase());
          if (item) {
            ddl.value(item.Key);
            ddl.trigger("change");
          } else {
            console.error(
              `❌ Subtype "${subType}" not found in KendoDropDownList.`
            );
          }
        } else {
          console.error("❌ KendoDropDownList component could not be found.");
        }
      }, doc.subDocumentType);

      // Allow a moment for any UI updates
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 2. Download the file to temp directory
      const localPath = await downloadFileToTmp(doc.firebaseUrl, fileName);

      // 3. Click the upload button and handle the file chooser dialog
      const [fileChooser] = await Promise.all([
        page.waitForFileChooser({ timeout: 15000 }),
        page.click("#TPR001B1_0_btn"),
      ]);

      // 4. Accept the file chooser with the specified file
      await fileChooser.accept([localPath]);

      // 5. Verify that the current document appears correctly in the table

      const isFileInTable = await page.waitForFunction(
        (subDocType, fName) => {
          const rows = Array.from(
            document.querySelectorAll("#TPR001B1_0_tbl tbody tr")
          );
          return rows.some((row) => {
            const subTypeCell = row.querySelector("td:nth-of-type(2)");
            const fileNameCell = row.querySelector("td:nth-of-type(3)");
            const isSubTypeMatch =
              subTypeCell &&
              subTypeCell.textContent?.trim().toUpperCase() ===
                subDocType.toUpperCase();
            const isFileNameMatch =
              fileNameCell && fileNameCell.textContent?.trim() === fName;
            return isSubTypeMatch && isFileNameMatch;
          });
        },
        { timeout: 10000 },
        doc.subDocumentType,
        fileName
      );

      if (!isFileInTable) {
        throw new Error(
          `Verification failed: Document "${fileName}" not found in the table with correct details.`
        );
      }
      console.log(`✅ Verified document in table: ${fileName}`);
    } // --- End of loop ---

    console.log(
      "--- All documents uploaded successfully. Proceeding to next step. ---"
    );

    // --- Click Next Button (after all uploads are complete) ---
    const nextButtonSelector = "#saveBtn";
    const nextButton = await page.$(nextButtonSelector);
    let messageText = "";
    if (nextButton) {
      await nextButton.click();
      console.log("✅ Clicked 'Next' button.");

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const msgDiv = await page.$("#msgDiv");
      if (msgDiv) {
        messageText =
          (await page.evaluate((msgDiv) => {
            const messageElement = msgDiv.querySelector(".k-invalid-msg");
            return messageElement ? messageElement.textContent?.trim() : null;
          }, msgDiv)) ?? "";

        if (messageText) {
          console.log(`📣 Message found in msgDiv: ${messageText}`);
          // Here you can handle the message if needed (e.g., log, error handling, etc.)
        } else {
          console.log("No message found in msgDiv.");
        }
      } else {
        console.log("⚠️ msgDiv not found on the page.");
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Capture final screenshot
      await page.screenshot({
        path: "screenshots/after-next-button-click.png",
        fullPage: true,
      });
    } else {
      console.warn("⚠️ 'Next' button not found on the page.");
    }

    //Save an HTML snapshot of the current page
    const htmlContent = await page.content();
    writeFileSync("screenshots/uploaded-documents.html", htmlContent);
    console.log("HTML snapshot saved as 'uploaded-documents.html'");

    if (messageText !== "") {
      result.message = messageText;
    } else {
      result.message =
        "All supporting documents were uploaded and verified successfully";
    }
    return result;
  } catch (error) {
    console.error(
      "❌ An error occurred during the document upload process",
      error
    );
    await page.screenshot({
      path: "screenshots/upload-process-failed.png",
      fullPage: true,
    });
    (error as any).step = "uploadSupportingDocuments";
    throw error;
  }
}

export async function fillDeclarationSection(
  page: Page,
  data: IrdSubmissionData,
  result: SubmissionResult
): Promise<SubmissionResult> {
  try {
    await page.waitForSelector("#ApplicantName", { timeout: 10000 });

    await page.evaluate((formData) => {
      const setValue = (selector: string, value: string) => {
        const el = document.querySelector(selector) as HTMLInputElement;
        if (el) {
          el.value = value;
          el.dispatchEvent(new Event("input", { bubbles: true }));
        }
      };
      setValue("#ApplicantName", formData.nameWithInitials.toUpperCase());
      setValue(
        "#ApplicantDesignation",
        formData.designation?.toUpperCase() || ""
      );
      setValue("#ContactNumber", formData.contact?.mobile || "");
    }, data);

    // Wait for captcha image
    const captchaSelector = "img#CaptchaImage";
    await page.waitForSelector(captchaSelector, {
      visible: true,
      timeout: 5000,
    });

    // Capture captcha screenshot
    const captchaPath = path.join(
      config.puppeteer.screenshotDir,
      "captcha.png"
    );

    const captchaElement = await page.$(captchaSelector);
    if (!captchaElement) throw new Error("Captcha image not found");

    await captchaElement.screenshot({ path: captchaPath as `${string}.png` });

    // Solve captcha using external service
    const solvedCaptcha = await solveCaptchaWith2Captcha(captchaPath);

    // Fill captcha input field
    await page.type("#CaptchaInputText", solvedCaptcha, { delay: 100 });

    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.screenshot({
      path: "screenshots/before-submit-button-click.png",
      fullPage: true,
    });

    //Click "submit" button
    await page.click("#submitBtn");

    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Capture post-submit screenshot
    await page.screenshot({
      path: "screenshots/after-submit-button-click.png",
      fullPage: true,
    });

    const htmlContent1 = await page.content();
    writeFileSync("screenshots/final-page.html", htmlContent1);

    // Extract acknowledgement number and confirmation message
    const acknowledgementData = await page.evaluate(() => {
      const getText = (selector: string): string =>
        document.querySelector(selector)?.textContent?.trim() || "";

      return {
        acknowledgementNo: getText("[for='AcknowledgementNo'] + .r-prop-value"),
        timestamp: getText("[for='RequestDate'] + .r-prop-value"),
        message: document.querySelector(".r-tpr-ackMessage")?.innerHTML || "",
      };
    });

    // Save results to the `result` object
    result.status = "completed";
    result.success = true;
    result.message = acknowledgementData.message || "Submission successful";
    result.confirmationNumber = acknowledgementData.acknowledgementNo;
    result.timestamp = acknowledgementData.timestamp;
    result.screenshots?.push("screenshots/after-submit-button-click.png");
    return result;
  } catch (error) {
    logger.error("❌ Failed to fill declaration section", { error });
    (error as any).step = "DeclarationSection";
    throw error;
  }
}
