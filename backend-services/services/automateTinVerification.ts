import puppeteer, { Browser, Page } from "puppeteer";
import path from "path";
import fs from "fs";
import logger from "../utils/logger";
import retry from "../utils/retry";
import config from "../config/config";
import { VerifyTIN, VerifyTINResult } from "../types/submission";
import { solveCaptchaWith2Captcha } from "../utils/solveCaptcha";

export const automateTinVerification = async (
  verifyData: VerifyTIN
): Promise<VerifyTINResult> => {
  const run = async (): Promise<VerifyTINResult> => {
    let browser: Browser | null = null;
    let page: Page | null = null;

    try {
      browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });

      page = await browser.newPage();
      page.setDefaultTimeout(60000);

      if (!fs.existsSync(config.puppeteer.screenshotDir)) {
        fs.mkdirSync(config.puppeteer.screenshotDir, { recursive: true });
      }

      // Step 1: Navigate
      await page.goto(
        "https://eservices.ird.gov.lk/Registration/VerifyIRDInformation/Index",
        { waitUntil: "networkidle2" }
      );

      // Step 2: Select "Verify Registration"
      await page.waitForSelector("input#VerifyRegistration", { visible: true });
      await page.click("input#VerifyRegistration");

      // Step 3: Wait for form
      await page.waitForSelector("#SearchCertificateRequestForm", {
        visible: true,
      });

      // Step 4: Fill NIC
      await page.waitForSelector("#EntityId", { visible: true });
      await page.type("#EntityId", verifyData.nic, { delay: 100 });

      // Step 5: Solve captcha
      const captchaSelector = "img#CaptchaImage";
      await page.waitForSelector(captchaSelector, { visible: true });
      const captchaPath = path.join(
        config.puppeteer.screenshotDir,
        "captcha.png"
      );
      const captchaElement = await page.$(captchaSelector);
      if (!captchaElement) throw new Error("Captcha image not found");
      await captchaElement.screenshot({ path: captchaPath as `${string}.png` });
      logger.info("✅ Captcha image saved at: " + captchaPath);

      const solvedCaptcha = await solveCaptchaWith2Captcha(captchaPath);
      logger.info("🔐 Captcha solved via 2Captcha: " + solvedCaptcha);
      await page.type("#CaptchaInputText", solvedCaptcha, { delay: 100 });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Step 6: Click submit
      await page.click("#btnSubmit");

      // Step 7: Check result
      const nicValidationSelector = "#EntityId_validationMessage";
      const captchaErrorContentSelector = "#errorMessage .k-tooltip-validation";
      const resultContainerSelector = "#SearchEntityResultContainer";

      try {
        logger.info("⏳ Waiting for a response from IRD...");
        await Promise.race([
          page.waitForSelector(nicValidationSelector, { visible: true }),
          page.waitForSelector(captchaErrorContentSelector, { visible: true }),
          page.waitForSelector(resultContainerSelector, { visible: true }),
        ]);

        // 1. Check for NIC error
        const nicError = await page
          .$eval(nicValidationSelector, (el) => el.textContent?.trim() || "")
          .catch(() => "");
        if (nicError) {
          logger.warn("⚠️ NIC validation error: " + nicError);
          return {
            message:
              "The NIC you entered is invalid. Please double-check and try again.",
          };
        }

        // 2. Check for captcha error
        const captchaErrorText = await page
          .$eval(
            captchaErrorContentSelector,
            (el) => el.textContent?.trim() || ""
          )
          .catch(() => "");
        if (captchaErrorText) {
          logger.warn(`🔐 Captcha validation failed: "${captchaErrorText}"`);
          return {
            message: "Oops! Captcha validation failed. Please try again.",
          };
        }

        // 3. Check for success
        const resultMessage = await page
          .$eval(resultContainerSelector, (el) => el.textContent?.trim() || "")
          .catch(() => "");
        if (resultMessage) {
          logger.info("📢 IRD Response: " + resultMessage);
          return { message: resultMessage };
        }

        // Fallback if none of the expected elements appeared
        throw new Error("Could not determine the outcome after submission.");
      } catch (err) {
        logger.error("❌ Failed to get a response from IRD after submission.", {
          error: err instanceof Error ? err.message : String(err),
        });
        // Save artifacts for debugging the failure
        if (page) {
          const errorPath = path.join(
            config.puppeteer.screenshotDir,
            "error_screenshot.png"
          ) as `${string}.png`;
          await page.screenshot({ path: errorPath, fullPage: true });
          logger.info(`📸 Error screenshot saved to ${errorPath}`);
        }
        return {
          message:
            "We couldn't get a response from IRD. Please try again shortly.",
        };
      }
    } finally {
      if (browser) await browser.close();
    }
  };

  // Run with retry wrapper (no changes needed)
  return retry(run, 3, 3000).catch((error: unknown) => {
    const finalMessage =
      error instanceof Error
        ? error.message
        : "Unknown error during verification.";

    logger.error("❌ automateTinVerification failed after all retries", {
      message: finalMessage,
      stack: error instanceof Error ? error.stack : undefined,
    });

    return {
      message:
        "Something went wrong during the verification process. Please contact support.",
    };
  });
};
