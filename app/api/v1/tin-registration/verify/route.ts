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

    if (
      verificationResult &&
      verificationResult.message?.includes(
        "You are already registered with the Inland Revenue Department"
      )
    ) {
      logger.info("API: TIN verification successful, user already registered.");
      return NextResponse.json(
        {
          success: true,
          registered: true,
          message:
            "You are already registered with the Inland Revenue Department. If you have not received the Taxpayer Registration Certificate, you may visit the IRD Head Office or the Nearest Metro/Regional Office to obtain the Taxpayer Registration Certificate. For further details, call the IRD hotline 1944",
        },
        { status: 200 }
      );
    } else if (
      verificationResult &&
      verificationResult.message?.includes(
        "You are not registered with the Inland Revenue Department yet."
      )
    ) {
      return NextResponse.json(
        {
          success: true,
          registered: false,
          message:
            'You are not registered with the Inland Revenue Department yet. Please click the "Start TIN Registration" button to proceed with the registration process.',
        },
        { status: 200 }
      );
    } else if (
      verificationResult &&
      verificationResult.message?.includes(
        "Verification response not received in time."
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          registered: false,
          message:
            verificationResult.message ||
            "Verification response not received in time. Please try again later.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        registered: false,
        message:
          verificationResult.message ||
          "Your registration status could not be determined.",
      },
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
