export interface IrdSubmissionData {
  fullName: string;
  initialsSalutationCode: string;
  nameWithInitials: string;
  nic: string;
  dateOfBirth: string;
  birthCountryCode: string;
  genderCode: string;
  preferredLanguageCode: string;
  preferredCommunicationCode: string;
  websiteUrl?: string;
  dualCitizenship: string;
  dualCitizenCountryCode?: string;
  sourceOfIncome: string[];
  otherSourceOfIncome?: string;
  profession: string;
  professionOther?: string;
  nearestOfficeCode?: string;
  address: {
    premisesNo?: string;
    unitNo?: string;
    line1: string;
    line2?: string;
    line3?: string;
    postalCode?: string;
  };
  statAddress: {
    province: string;
    district: string;
    secretariat: string;
    gramaNiladhari: string;
  };
  residentialAddress: {
    premisesNo?: string;
    unitNo?: string;
    line1: string;
    line2?: string;
    line3?: string;
    postalCode?: string;
  };
  contact: {
    mobile?: string;
    office?: string;
    home?: string;
    fax?: string;
    email: string;
  };
  bank?: {
    bankNameCode?: string;
    accountNo?: string;
  };
  familyDetails: {
    civilStatus: string;
    spouseName?: string;
    spouseNic?: string;
    spouseTin?: string;
  };
  registrationPurpose: string;
  remarks?: string;
  children?: ChildData[];
  docs: { subDocumentType: string; fileType: string; firebaseUrl: string }[];
  designation?: string;
}

// Define the ChildData type
export interface ChildData {
  name: string;
  nic: string;
  birthDate: string;
  genderCode: string;
}

export interface SubmissionError {
  step: string;
  message: string;
  timestamp: string;
}

export interface SubmissionResult {
  submissionId: string;
  timestamp: string;
  status: string;
  success: boolean;
  message: string;
  confirmationNumber?: string;
  errors: SubmissionError[];
  screenshots?: string[];
}

export interface VerifyTIN {
  nic: string;
}

export interface VerifyTINResult {
  message?: string;
  HasError?: boolean;
  ErrorMessage?: string[];
  Captcha?: {
    CaptchaImage: string;
    CaptchaDeText: string;
  };
}

export type IrdSubmission = IrdSubmissionData;
