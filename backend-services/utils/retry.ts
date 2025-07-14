import logger from "@/backend-services/utils/logger";

async function retry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 2000
): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err: unknown) {
      lastError = err;
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      logger.warn(`🔁 Retry ${i + 1} failed: ${errorMessage}`);
      if (i < retries - 1) {
        await new Promise((res) => setTimeout(res, delay));
      }
    }
  }
  throw lastError;
}
export default retry;
