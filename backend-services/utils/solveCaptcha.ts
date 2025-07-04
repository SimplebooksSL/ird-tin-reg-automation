import { createWorker } from "tesseract.js";
import sharp from "sharp";
import fs from "fs";
import axios from "axios";
import path from "path";

const TWO_CAPTCHA_API_KEY = process.env.TWO_CAPTCHA_API_KEY as string;

export const solveCaptchaWithTesseract = async (
  imagePath: string
): Promise<string> => {
  const processedPath = imagePath.replace(".png", "_processed.png");

  // Step 1: Preprocess
  await sharp(imagePath)
    .resize({ width: 300 }) // Helps clarity
    .grayscale()
    .threshold(140)
    .toFile(processedPath);

  // Step 2: Use worker API for advanced config
  const worker = await createWorker("eng", 1, {
    logger: (m) => console.log(m.status, m.progress),
  });

  await worker.setParameters({
    tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  });

  const {
    data: { text },
  } = await worker.recognize(processedPath);

  console.log("📃 Raw OCR result:", text);

  await worker.terminate();

  const cleaned = text.replace(/[^A-Z0-9]/gi, "").trim();
  return cleaned;
};

export const solveCaptchaWith2Captcha = async (
  imagePath: string
): Promise<string> => {
  if (!TWO_CAPTCHA_API_KEY) {
    throw new Error(
      "2Captcha API key not found. Please set TWO_CAPTCHA_API_KEY in .env"
    );
  }

  const imageBase64 = fs.readFileSync(path.resolve(imagePath), {
    encoding: "base64",
  });

  // Step 1: Upload captcha to 2Captcha
  const uploadRes = await axios.post(
    "http://2captcha.com/in.php",
    new URLSearchParams({
      key: TWO_CAPTCHA_API_KEY,
      method: "base64",
      body: imageBase64,
      json: "1",
    }).toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  if (uploadRes.data.status !== 1) {
    throw new Error(`2Captcha upload failed: ${uploadRes.data.request}`);
  }

  const captchaId = uploadRes.data.request;

  // Step 2: Poll for the result
  for (let i = 0; i < 10; i++) {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // wait 3 seconds

    const resultRes = await axios.get("http://2captcha.com/res.php", {
      params: {
        key: TWO_CAPTCHA_API_KEY,
        action: "get",
        id: captchaId,
        json: 1,
      },
    });

    if (resultRes.data.status === 1) {
      return resultRes.data.request;
    }

    if (resultRes.data.request !== "CAPCHA_NOT_READY") {
      throw new Error(`2Captcha error: ${resultRes.data.request}`);
    }

    // If not ready, wait and retry
  }

  throw new Error("2Captcha timed out after multiple attempts.");
};
