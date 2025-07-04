// utils/downloadFileToTmp.ts
import fs from "fs";
import axios from "axios";
import path from "path";
import os from "os";

export async function downloadFileToTmp(
  fileUrl: string,
  fileName: string
): Promise<string> {
  const tempPath = path.join(os.tmpdir(), fileName);

  const response = await axios.get(fileUrl, { responseType: "stream" });
  const writer = fs.createWriteStream(tempPath);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", () => resolve(tempPath));
    writer.on("error", reject);
  });
}
