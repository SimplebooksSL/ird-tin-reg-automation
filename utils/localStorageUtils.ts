
import { IrdSubmissionData, SubmissionResult } from "@/types/ird-types";

const TIN_STORAGE_KEY = "tin_registration_data";
const SAME_AS_PERMANENT_KEY = "same_as_permanent_address";

export interface SavedTinData {
  formData: Partial<IrdSubmissionData>;
  submissionStatus?: {
    success: boolean;
    status: string;
  };
  savedAt: string;
}

export const saveTinRegistrationData = (
  formData: Partial<IrdSubmissionData>,
  result?: SubmissionResult
): void => {
  try {
    const dataToSave: SavedTinData = {
      formData,
      submissionStatus: result
        ? {
            success: result.success,
            status: result.status,
          }
        : undefined,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(TIN_STORAGE_KEY, JSON.stringify(dataToSave));
  } catch (error) {
    console.error("Failed to save TIN registration data:", error);
  }
};

export const getSavedTinRegistrationData = (): SavedTinData | null => {
  try {
    const savedData = localStorage.getItem(TIN_STORAGE_KEY);
    if (!savedData) return null;

    return JSON.parse(savedData);
  } catch (error) {
    console.error("Failed to retrieve saved TIN registration data:", error);
    return null;
  }
};

export const clearTinRegistrationData = (): void => {
  try {
    localStorage.removeItem(TIN_STORAGE_KEY);
    localStorage.removeItem(SAME_AS_PERMANENT_KEY);
    window.location.reload();
  } catch (error) {
    console.error("Failed to clear TIN registration data:", error);
  }
};

export const hasPendingTinRegistration = (): boolean => {
  const savedData = getSavedTinRegistrationData();
  if (!savedData) return false;

  // Check if the submission was not successful
  return !savedData.submissionStatus?.success;
};

// New functions for same as permanent address checkbox
export const saveSameAsPermanentState = (checked: boolean): void => {
  try {
    localStorage.setItem(SAME_AS_PERMANENT_KEY, JSON.stringify(checked));
  } catch (error) {
    console.error("Failed to save same as permanent state:", error);
  }
};

export const getSameAsPermanentState = (): boolean => {
  try {
    const savedState = localStorage.getItem(SAME_AS_PERMANENT_KEY);
    if (!savedState) return false;

    return JSON.parse(savedState);
  } catch (error) {
    console.error("Failed to retrieve same as permanent state:", error);
    return false;
  }
};
