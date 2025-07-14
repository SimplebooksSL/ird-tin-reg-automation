/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";
import { VerifyTIN, VerifyTINResult } from "../types/ird-types";

const API_BASE_URL = "/api/v1/tin-registration";

export async function verifyTinRegistration(
  data: VerifyTIN
): Promise<VerifyTINResult> {
  interface VerifySuccessResponse {
    success: true;
    result: VerifyTINResult;
    message?: string;
  }

  interface VerifyErrorResponse {
    success: false;
    message?: string;
    details?: any;
    [key: string]: unknown;
  }

  try {
    const response = await axios.post<VerifySuccessResponse>(
      `${API_BASE_URL}/verify`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const err = error as AxiosError<VerifyErrorResponse>;

      console.error("API Error during TIN verification:", {
        message: err.message,
        statusCode: err.response?.status,
        response_data: err.response?.data,
      });

      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "TIN verification failed due to an unknown error.";

      throw new Error(errorMessage);
    } else {
      console.error(
        "Unexpected non-Axios Error during TIN verification:",
        error
      );
      throw error;
    }
  }
}
