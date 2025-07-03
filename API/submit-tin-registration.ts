import { IrdSubmissionData, SubmissionResult } from "@/types/ird-types";
import axios, { AxiosError } from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1/tin-registration";

export async function submitTinRegistration(
  data: IrdSubmissionData
): Promise<SubmissionResult> {
  interface ErrorResponseData {
    message?: string;
    [key: string]: unknown;
  }

  try {
    const response = await axios.post<{ result: SubmissionResult }>(
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
      const err = error as AxiosError<ErrorResponseData>;
      console.error("API Error:", err.message, err.response?.data);
      throw new Error(err.response?.data?.message || "TIN submission failed.");
    } else {
      console.error("Unexpected Error:", error);
      throw error;
    }
  }
}
