/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";
import { IrdSubmissionData, SubmissionResult } from "../types/ird-types";

const API_BASE_URL = "/api/v1/tin-registration";

export async function submitTinRegistration(
  data: IrdSubmissionData
): Promise<SubmissionResult> {
  interface SubmitSuccessResponse {
    success: true;
    result: SubmissionResult;
    message?: string;
  }

  interface SubmitErrorResponse {
    success: false;
    message?: string;
    details?: any;
    [key: string]: unknown;
  }

  try {
    const response = await axios.post<SubmitSuccessResponse>(
      `${API_BASE_URL}/submit`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const err = error as AxiosError<SubmitErrorResponse>;

      console.error("API Error during TIN submission:", {
        message: err.message,
        statusCode: err.response?.status,
        response_data: err.response?.data,
      });

      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "TIN submission failed due to an unknown error.";

      throw new Error(errorMessage);
    } else {
      console.error("Unexpected non-Axios Error during TIN submission:", error);
      throw error;
    }
  }
}
