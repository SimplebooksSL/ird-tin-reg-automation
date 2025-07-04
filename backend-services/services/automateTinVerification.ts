/* eslint-disable @typescript-eslint/no-explicit-any */
import puppeteer, { Browser, Page } from "puppeteer";
import path from "path";
import fs from "fs";
import logger from "../utils/logger";
import config from "../config/config";
import { VerifyTIN, VerifyTINResult } from "../types/submission";
import { solveCaptchaWith2Captcha } from "../utils/solveCaptcha";

export const automateTinVerification = async (
  verifyData: VerifyTIN
): Promise<VerifyTINResult> => {
  let browser: Browser | null = null;
  let page: Page | null = null;

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    page = await browser.newPage();
    page.setDefaultTimeout(60000);

    // Create screenshot dir if not exists
    if (!fs.existsSync(config.puppeteer.screenshotDir)) {
      fs.mkdirSync(config.puppeteer.screenshotDir, { recursive: true });
    }

    // Step 1: Go to IRD site
    await page.goto(
      "https://eservices.ird.gov.lk/Registration/VerifyIRDInformation/Index",
      {
        waitUntil: "networkidle2",
      }
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

    // Step 5: Wait for captcha image
    const captchaSelector = "img#CaptchaImage";
    await page.waitForSelector(captchaSelector, {
      visible: true,
      timeout: 5000,
    });

    // Step 6: Screenshot only captcha image
    const captchaPath = path.join(
      config.puppeteer.screenshotDir,
      "captcha.png"
    );
    const captchaElement = await page.$(captchaSelector);
    if (!captchaElement) throw new Error("Captcha image not found");

    await captchaElement.screenshot({ path: captchaPath as `${string}.png` });
    logger.info("✅ Captcha image saved at: " + captchaPath);

    // Step 7: Solve captcha with 2Captcha
    const solvedCaptcha = await solveCaptchaWith2Captcha(captchaPath);
    logger.info("🔐 Captcha solved via 2Captcha: " + solvedCaptcha);

    // Step 8: Fill captcha input field
    await page.type("#CaptchaInputText", solvedCaptcha, { delay: 100 });

    // Step 9: Click "Search"
    await page.click("#btnSubmit");

    // Step 10: Wait for response message container
    await page.waitForSelector("#SearchEntityResultContainer", {
      visible: true,
      timeout: 10000,
    });

    // Step 11: Extract response message
    const resultMessage = await page.$eval(
      "#SearchEntityResultContainer",
      (el) => el.textContent?.trim() || "No message found"
    );

    logger.info("📢 IRD Response: " + resultMessage);

    // Step 12: Optional screenshot after response
    const afterCaptchaPath = path.join(
      config.puppeteer.screenshotDir,
      "captcha_filled.png"
    ) as `${string}.png`;
    await page.screenshot({ path: afterCaptchaPath, fullPage: true });

    // Step 13: Save final HTML
    const finalHtmlPath = path.join(
      config.puppeteer.screenshotDir,
      "ird_after_captcha.html"
    );
    const finalHtml = await page.content();
    fs.writeFileSync(finalHtmlPath, finalHtml);
    logger.info("📄 Final HTML saved at: " + finalHtmlPath);

    return {
      message: resultMessage,
    };
  } catch (error: any) {
    logger.error("❌ Error in automateTinVerification", {
      message: error.message,
      stack: error.stack,
    });

    return {
      message: "Failed to complete IRD verification. Check logs.",
    };
  } finally {
    if (browser) await browser.close();
  }
};
