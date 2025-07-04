/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from "uuid";
import logger from "../utils/logger";
import { automateIrdSubmission } from "../services/automation";
import { automateTinVerification } from "../services/automateTinVerification";
import { automateFetchGNDCodes } from "../services/automateFetchGNDCodes";

import {
  IrdSubmission,
  SubmissionResult,
  VerifyTIN,
} from "../types/submission";

const submissionStore = new Map<string, SubmissionResult>();

export const initiateTinRegistrationProcess = async (
  submissionData: IrdSubmission
): Promise<SubmissionResult> => {
  // Return type remains SubmissionResult
  if (!submissionData || !submissionData.fullName || !submissionData.nic) {
    logger.error("Invalid submission data. Required fields missing.");
    throw new Error("Invalid submission data. Full name and NIC are required.");
  }

  const submissionId = uuidv4();

  try {
    // Await the automation process to complete
    const finalResult = await automateIrdSubmission(
      submissionData,
      submissionId
    );

    submissionStore.set(submissionId, finalResult);

    return finalResult;
  } catch (error: any) {
    const failedResult: SubmissionResult = {
      submissionId,
      timestamp: new Date().toISOString(),
      status: "failed",
      success: false,
      message: `Submission failed: ${error.message}`,
      errors: [
        {
          step: "unknown",
          message: error.message,
          timestamp: new Date().toISOString(),
        },
      ],
    };
    submissionStore.set(submissionId, failedResult);
    return failedResult;
  }
};

export const processTinVerification = async (
  entityData: VerifyTIN
): Promise<any> => {
  if (!entityData || !entityData.nic) {
    logger.error("Invalid verification request data: NIC is required.");
    throw new Error("Invalid request data. NIC is required.");
  }
  const result = await automateTinVerification(entityData);
  return result;
};

export const getGndCodes = async (): Promise<any> => {
  const gndCodes = await automateFetchGNDCodes();
  return gndCodes;
};
