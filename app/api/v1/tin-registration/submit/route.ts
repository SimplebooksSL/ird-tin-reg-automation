/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { initiateTinRegistrationProcess } from "../../../../../backend-services/controllers/submission";
import logger from "../../../../../backend-services/utils/logger";
import {
  IrdSubmission,
  SubmissionResult,
} from "../../../../../backend-services/types/submission";

export async function POST(request: Request) {
  logger.info("API: Received request to submit TIN registration.");

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

    // if (!result.success) {
    //   logger.warn(
    //     `API: TIN registration process completed, but with a failed status: ${result.message}`
    //   );

    //   return NextResponse.json({ success: false, result }, { status: 500 });
    // }

    // logger.info(
    //   `API: TIN registration process initiated for submission ID: ${result.submissionId} - Successful completion.`
    // );
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
