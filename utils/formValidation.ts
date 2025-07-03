import { IrdSubmissionData } from "@/types/ird-types";
import { isValidPhoneNumber } from "libphonenumber-js";

export interface ValidationError {
  field: string;
  message: string;
}

export const validatePersonalDetailsStep = (
  data: Partial<IrdSubmissionData>
): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!data.fullName?.trim()) {
    errors.push({ field: "fullName", message: "Full Name is required" });
  }

  const nicRegex = /^(?:[0-9]{9}[vV]|[0-9]{12})$/;
  if (!data.nic?.trim()) {
    errors.push({
      field: "nic",
      message: "National Identity Card Number is required",
    });
  } else if (data.nic && !nicRegex.test(data.nic)) {
    errors.push({
      field: "nic",
      message: "Please enter a valid NIC number",
    });
  }

  if (!data.initialsSalutationCode) {
    errors.push({
      field: "initialsSalutationCode",
      message: "Title/Salutation is required",
    });
  }

  if (!data.nameWithInitials?.trim()) {
    errors.push({
      field: "nameWithInitials",
      message: "Name with Initials is required",
    });
  }

  if (!data.dateOfBirth) {
    errors.push({ field: "dateOfBirth", message: "Date of Birth is required" });
  }

  if (!data.genderCode) {
    errors.push({ field: "genderCode", message: "Gender is required" });
  }

  if (!data.birthCountryCode) {
    errors.push({
      field: "birthCountryCode",
      message: "Country of Birth is required",
    });
  }

  if (!data.preferredLanguageCode) {
    errors.push({
      field: "preferredLanguageCode",
      message: "Preferred Language is required",
    });
  }

  if (!data.preferredCommunicationCode) {
    errors.push({
      field: "preferredCommunicationCode",
      message: "Preferred Communication Method is required",
    });
  }

  if (!data.dualCitizenship) {
    errors.push({
      field: "dualCitizenship",
      message: "Dual citizenship status is required",
    });
  }

  if (data.dualCitizenship === "Y" && !data.dualCitizenCountryCode) {
    errors.push({
      field: "dualCitizenCountryCode",
      message: "Dual Citizenship Country is required",
    });
  }

  // Check if NIC documents are uploaded
  if (!data.docs || data.docs.length === 0) {
    errors.push({
      field: "nicUpload",
      message: "NIC document upload is required",
    });
  }

  return errors;
};

export const validateAddressStep = (
  data: Partial<IrdSubmissionData>
): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Permanent Address validations
  if (!data.address?.line1?.trim()) {
    errors.push({
      field: "addressLine1",
      message: "Address Line 1 is required",
    });
  } else if (data.address.line1.length > 35) {
    errors.push({
      field: "addressLine1",
      message: "Address Line 1 must not exceed 35 characters",
    });
  }

  if (data.address?.line2 && data.address.line2.length > 35) {
    errors.push({
      field: "addressLine2",
      message: "Address Line 2 must not exceed 35 characters",
    });
  }

  if (data.address?.line3 && data.address.line3.length > 35) {
    errors.push({
      field: "addressLine3",
      message: "Address Line 3 must not exceed 35 characters",
    });
  }

  if (!data.statAddress?.province) {
    errors.push({ field: "province", message: "Province is required" });
  }

  if (!data.statAddress?.district) {
    errors.push({ field: "district", message: "District is required" });
  }

  if (!data.statAddress?.secretariat) {
    errors.push({
      field: "secretariat",
      message: "Divisional Secretariat is required",
    });
  }

  if (!data.statAddress?.gramaNiladhari) {
    errors.push({
      field: "gramaNiladhari",
      message: "Grama Niladhari Division is required",
    });
  }

  // Residential Address validations
  if (!data.residentialAddress?.line1?.trim()) {
    errors.push({
      field: "residentialAddressLine1",
      message: "Residential Address Line 1 is required",
    });
  } else if (data.residentialAddress.line1.length > 35) {
    errors.push({
      field: "residentialAddressLine1",
      message: "Residential Address Line 1 must not exceed 35 characters",
    });
  }

  if (data.residentialAddress?.line2 && data.residentialAddress.line2.length > 35) {
    errors.push({
      field: "residentialAddressLine2",
      message: "Residential Address Line 2 must not exceed 35 characters",
    });
  }

  if (data.residentialAddress?.line3 && data.residentialAddress.line3.length > 35) {
    errors.push({
      field: "residentialAddressLine3",
      message: "Residential Address Line 3 must not exceed 35 characters",
    });
  }

  return errors;
};

export const validateContactStep = (
  data: Partial<IrdSubmissionData>
): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!data.contact?.email?.trim()) {
    errors.push({ field: "email", message: "Email Address is required" });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact.email)) {
    errors.push({
      field: "email",
      message: "Please enter a valid email address",
    });
  }

  if (!data.contact?.mobile?.trim()) {
    errors.push({ field: "mobile", message: "Mobile Number is required" });
  } else if (!/^(0\d{9})$/.test(data.contact.mobile)) {
    errors.push({
      field: "mobile",
      message: "Please enter a valid mobile number (10 digits starting with 0)",
    });
  }

  return errors;
};

export const validateFamilyDetailsStep = (
  data: Partial<IrdSubmissionData>
): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!data.familyDetails?.civilStatus) {
    errors.push({ field: "civilStatus", message: "Civil Status is required" });
  }

  if (
    data.familyDetails?.civilStatus === "MARRIED" &&
    !data.familyDetails?.spouseName?.trim()
  ) {
    errors.push({
      field: "spouseName",
      message: "Spouse's Full Name is required for married status",
    });
  }

  return errors;
};

export const validateProfessionStep = (
  data: Partial<IrdSubmissionData>
): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!data.profession) {
    errors.push({ field: "profession", message: "Profession is required" });
  }

  // Check if "OTHERS" is selected and professionOther is not filled
  if (data.profession === "12" && !data.professionOther?.trim()) {
    errors.push({
      field: "professionOther",
      message: "Please specify other profession",
    });
  }

  if (!data.designation?.trim()) {
    errors.push({
      field: "designation",
      message: "Designation/Position is required",
    });
  }

  if (!data.sourceOfIncome || data.sourceOfIncome.length === 0) {
    errors.push({
      field: "sourceOfIncome",
      message: "At least one source of income must be selected",
    });
  }

  if (
    data.sourceOfIncome?.includes("999") &&
    !data.otherSourceOfIncome?.trim()
  ) {
    errors.push({
      field: "otherSourceOfIncome",
      message: "Please specify other source of income",
    });
  }

  if (!data.registrationPurpose) {
    errors.push({
      field: "registrationPurpose",
      message: "Purpose of Registration is required",
    });
  }

  if (data.registrationPurpose === "999" && !data.remarks?.trim()) {
    errors.push({
      field: "remarks",
      message: "Additional remarks are required when selecting 'Others'",
    });
  }

  return errors;
};

export const getStepValidation = (
  step: number,
  data: Partial<IrdSubmissionData>
): ValidationError[] => {
  switch (step) {
    case 1:
      return validatePersonalDetailsStep(data);
    case 2:
      return validateAddressStep(data);
    case 3:
      return validateContactStep(data);
    case 4:
      return validateFamilyDetailsStep(data);
    case 5:
      return validateProfessionStep(data);
    default:
      return [];
  }
};
