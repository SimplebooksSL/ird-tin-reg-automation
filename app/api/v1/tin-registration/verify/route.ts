/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { processTinVerification } from "../../../../../backend-services/controllers/submission";
import logger from "../../../../../backend-services/utils/logger";
import { VerifyTIN } from "../.../../../../../../backend-services/types/submission";

export async function POST(request: Request) {
  logger.info("API: Received request to verify TIN.");

  let verificationData: VerifyTIN;

  try {
    // Attempt to parse the request body as JSON
    verificationData = (await request.json()) as VerifyTIN;
  } catch (error: any) {
    logger.error("API: Failed to parse request body for TIN verification:", {
      error_message: error.message,
    });
    return NextResponse.json(
      { success: false, message: "Invalid JSON in request body" },
      { status: 400 }
    );
  }

  try {
    const verificationResult = await processTinVerification(verificationData);

    logger.info("API: TIN verification process completed successfully.");
    return NextResponse.json(
      { success: true, result: verificationResult },
      { status: 200 }
    );
  } catch (error: any) {
    logger.error("API: Error during TIN verification process:", {
      error_message: error.message,
      error_stack: error.stack,
    });
    const statusCode =
      error.message && error.message.includes("Invalid") ? 400 : 500;

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal server error during verification",
      },
      { status: statusCode }
    );
  }
}
