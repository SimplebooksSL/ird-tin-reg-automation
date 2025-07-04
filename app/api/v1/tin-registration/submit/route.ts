/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { initiateTinRegistrationProcess } from "../../../../../backend-services/controllers/submission";
import logger from "../../../../../backend-services/utils/logger";
import {
  IrdSubmission,
  SubmissionResult,
} from "../../../../../backend-services/types/submission";

export async function POST(request: Request) {
  let submissionData: IrdSubmission;

  try {
    submissionData = (await request.json()) as IrdSubmission;
  } catch (error: any) {
    logger.error("API: Failed to parse request body for TIN submission:", {
      error_message: error.message,
    });
    return NextResponse.json(
      { success: false, message: "Invalid JSON in request body" },
      { status: 400 }
    );
  }

  try {
    const result: SubmissionResult = await initiateTinRegistrationProcess(
      submissionData
    );

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error: any) {
    logger.error("API: Error thrown by initiateTinRegistrationProcess:", {
      error_message: error.message,
      error_stack: error.stack,
    });
    const statusCode =
      error.message && error.message.includes("Invalid") ? 400 : 500;
    return NextResponse.json(
      {
        success: false,
        message:
          error.message ||
          "Internal server error during registration initiation",
      },
      { status: statusCode }
    );
  }
}
