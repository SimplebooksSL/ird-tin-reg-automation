/* eslint-disable @typescript-eslint/no-explicit-any */
import puppeteer, { Browser, Page } from "puppeteer";
import fs from "fs";
import path from "path";
import logger from "../utils/logger";
import config from "../config/config";

export const automateFetchGNDCodes = async (): Promise<void> => {
  let browser: Browser | null = null;
  let page: Page | null = null;

  const gndMap: Record<string, { label: string; value: number }[]> = {};

  const ALL_DIVISIONAL_SECRETARIAT_VALUES = [
    43, 49, 94, 106, 131, 137, 164, 196, 228, 257, 265, 280, 345, 21, 37, 56,
    59, 76, 104, 122, 130, 163, 193, 194, 211, 313, 2, 29, 34, 40, 57, 95, 100,
    112, 182, 191, 230, 234, 308, 359, 5, 51, 58, 78, 90, 91, 149, 185, 192,
    237, 238, 241, 242, 284, 287, 288, 290, 328, 360, 361, 12, 45, 71, 152, 180,
    208, 232, 259, 292, 325, 327, 9, 88, 144, 218, 309, 4, 10, 24, 27, 33, 38,
    65, 83, 92, 98, 119, 203, 212, 216, 277, 322, 326, 346, 347, 11, 16, 32, 87,
    126, 156, 222, 269, 271, 283, 310, 314, 6, 20, 53, 54, 84, 113, 134, 142,
    169, 198, 239, 244, 279, 316, 321, 368, 50, 105, 204, 298, 348, 349, 350,
    351, 352, 353, 354, 355, 356, 357, 358, 115, 118, 224, 248, 158, 177, 365,
    366, 367, 176, 178, 221, 285, 320, 369, 303, 304, 305, 306, 158, 177, 365,
    366, 367, 68, 69, 124, 171, 173, 174, 337, 338, 339, 340, 341, 342, 343,
    344, 81, 132, 146, 197, 201, 225, 266, 274, 374, 375, 376, 7, 13, 28, 36,
    61, 72, 77, 79, 97, 135, 143, 147, 148, 150, 170, 179, 184, 206, 213, 236,
    245, 246, 256, 260, 289, 312, 315, 362, 363, 364, 15, 18, 42, 46, 111, 121,
    157, 161, 167, 207, 210, 231, 252, 324, 370, 371, 70, 75, 96, 101, 107, 127,
    129, 187, 190, 217, 219, 220, 226, 229, 233, 253, 254, 272, 275, 281, 335,
    377, 55, 62, 93, 154, 188, 273, 318, 25, 30, 64, 85, 86, 89, 114, 155, 168,
    189, 240, 261, 270, 319, 336, 23, 35, 41, 123, 159, 186, 195, 267, 268, 276,
    323, 19, 39, 48, 52, 73, 128, 183, 255, 262, 311, 329, 22, 26, 60, 66, 80,
    99, 108, 109, 133, 136, 151, 215, 243, 258, 317, 372, 373,
  ];

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    page = await browser.newPage();
    page.setDefaultTimeout(60000);

    for (const code of ALL_DIVISIONAL_SECRETARIAT_VALUES) {
      const url = `https://eservices.ird.gov.lk/Registration/TPRCommon/GetGramaBySecretariat?sitemapType=Intranet&SecretariatCode=${code}`;

      try {
        await page.goto(url, { waitUntil: "networkidle2" });

        const jsonText = await page.$eval(
          "pre",
          (el) => el.textContent || "[]"
        );
        const parsed: { CodeDisplay: string; CodeValue: number }[] =
          JSON.parse(jsonText);

        gndMap[code.toString()] = parsed.map((item) => ({
          label: item.CodeDisplay,
          value: item.CodeValue,
        }));

        console.log(`✅ Fetched GNDs for Secretariat ${code}`);
      } catch (err) {
        logger.error(`❌ Failed to fetch for code ${code}:`, err);
        gndMap[code.toString()] = [];
      }
    }

    const outputPath = path.join(
      config.puppeteer.screenshotDir,
      "gnd-codes.json"
    );
    fs.writeFileSync(outputPath, JSON.stringify(gndMap, null, 2));
    console.log("✅ All data written to", outputPath);
  } catch (error: any) {
    logger.error("❌ Error in automateFetchGNDCodes", {
      message: error.message,
      stack: error.stack,
    });
  } finally {
    if (browser) await browser.close();
  }
};
