/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  AlertCircle,
  FileText,
  Download,
  Eye,
} from "lucide-react";
import { IrdSubmissionData } from "@/types/ird-types";
import {
  PROVINCES,
  DISTRICTS_BY_PROVINCE,
  DIVISIONAL_SECRETARIATS_BY_DISTRICTS,
  GRAMA_NILADHARI_DIVISIONS_BY_DIVISIONAL_SECRETARIATS,
  COUNTRIES,
} from "@/constants/constants";

interface ReviewStepProps {
  data: Partial<IrdSubmissionData>;
  onUpdate: (data: Partial<IrdSubmissionData>) => void;
}

const ReviewStep = ({ data }: ReviewStepProps) => {
  const formatValue = (value: any): string => {
    if (value === null || value === undefined || value === "") {
      return "Not provided";
    }
    if (Array.isArray(value)) {
      return value.length > 0 ? value.join(", ") : "Not provided";
    }
    return String(value);
  };

  const isComplete = (value: any): boolean => {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return value !== null && value !== undefined && value !== "";
  };

  // Helper functions to get labels from constants
  const getProvinceLabel = (code: string) => {
    if (!code) return "Not provided";
    const province = PROVINCES.find((p) => p.value === code);
    return province ? province.label : code;
  };

  const getDistrictLabel = (code: string) => {
    if (!code) return "Not provided";

    for (const province in DISTRICTS_BY_PROVINCE) {
      const district = DISTRICTS_BY_PROVINCE[
        province as keyof typeof DISTRICTS_BY_PROVINCE
      ].find((ds) => ds.value === code);
      if (district) {
        return district.label;
      }
    }

    return code;
  };

  const getDivisionalSecretariatLabel = (
    districtCode: string,
    secCode: number
  ) => {
    if (!districtCode || !secCode) return "Not provided";

    const divisionalSecretariats =
      DIVISIONAL_SECRETARIATS_BY_DISTRICTS[
        districtCode as keyof typeof DIVISIONAL_SECRETARIATS_BY_DISTRICTS
      ];

    if (divisionalSecretariats) {
      const secretariat = divisionalSecretariats.find(
        (ds) => ds.value === secCode
      );

      if (secretariat) {
        return (secretariat as any).label || (secretariat as any).Label || "";
      }
    }

    return "Not found";
  };

  const getGramaNiladhariDivisionLabel = (secCode: string, gnCode: number) => {
    if (!gnCode) return "Not provided";

    const gramaNiladhariDivisions =
      GRAMA_NILADHARI_DIVISIONS_BY_DIVISIONAL_SECRETARIATS[
        secCode as keyof typeof GRAMA_NILADHARI_DIVISIONS_BY_DIVISIONAL_SECRETARIATS
      ];

    if (gramaNiladhariDivisions) {
      const gnDivision = gramaNiladhariDivisions.find(
        (gn) => gn.value === gnCode
      );

      if (gnDivision) {
        return gnDivision.label;
      }
    }

    return "Not found";
  };

  const getCountryLabel = (code: string) => {
    if (!code) return "Not provided";
    const country = COUNTRIES.find((c) => c.Value === code);
    return country ? country.Text : code;
  };

  // Helper function to get title/salutation label
  const getTitleLabel = (code: string) => {
    if (!code) return "Not provided";
    const titleMap: { [key: string]: string } = {
      "1": "MR",
      "2": "MRS",
      "3": "MISS",
      "4": "MDM",
      "5": "DR",
      "6": "MS",
      "7": "REV",
      "8": "CAPT",
      "9": "CM",
      "10": "PROF",
      "11": "SEC",
      "12": "MAJOR",
      "13": "THE HON",
      "14": "MASTER",
    };
    return titleMap[code] || code;
  };

  // Helper function to get preferred language label
  const getPreferredLanguageLabel = (code: string) => {
    if (!code) return "Not provided";
    const languageMap: { [key: string]: string } = {
      "1": "ENGLISH",
      "2": "SINHALA",
      "3": "TAMIL",
    };
    return languageMap[code] || code;
  };

  // Helper function to get preferred communication method label
  const getPreferredCommunicationLabel = (code: string) => {
    if (!code) return "Not provided";
    const communicationMap: { [key: string]: string } = {
      "1": "MAIL",
      "2": "SMS",
      "3": "EMAIL",
    };
    return communicationMap[code] || code;
  };

  // Helper functions for profession section
  const getProfessionLabel = (code: string) => {
    if (!code) return "Not provided";
    const professionMap: { [key: string]: string } = {
      "1": "ACCOUNTANT",
      "2": "ARCHITECT",
      "3": "CHEF/COOK",
      "4": "DOCTOR",
      "5": "ENGINEER",
      "6": "JUDGE",
      "7": "LECTURER",
      "8": "PILOT",
      "9": "SCIENTIST",
      "10": "SOFTWARE ENGINEER",
      "11": "SYSTEMS ANALYST",
      "12": "OTHERS",
      "13": "NOT APPLICABLE",
      "14": "LAWYER",
    };
    return professionMap[code] || code;
  };

  const getSourceOfIncomeLabel = (code: string) => {
    const incomeMap: { [key: string]: string } = {
      "1": "BUSINESS",
      "2": "EMPLOYMENT",
      "3": "INVESTMENT",
      "999": "OTHER",
    };
    return incomeMap[code] || code;
  };

  const getRegistrationPurposeLabel = (code: string) => {
    if (!code) return "Not provided";
    const purposeMap: { [key: string]: string } = {
      "1": "TAX PURPOSE",
      "2": "CLEARING THE GOODS FROM CUSTOMS",
      "3": "EXPORT REGISTRATION PROCESS",
      "4": "FREIGHT FORWARDING AND CLEARING AGENTS",
      "5": "STAMP DUTY PAYMENT",
      "6": "INCOME TAX CLEARANCE",
      "999": "OTHERS",
    };
    return purposeMap[code] || code;
  };

  const getDocumentTypeLabel = (code: string) => {
    const docTypeMap: { [key: string]: string } = {
      NEW_NIC: "New NIC (Smart Card)",
      OLD_NIC: "Old NIC (Laminated)",
      PASSPORT: "Passport",
      DRIVING_LICENSE: "Driving License",
      MARRIAGE_CERT: "Marriage Certificate",
      BIRTH_CERT: "Birth Certificate",
    };
    return docTypeMap[code] || code;
  };

  const isImageFile = (url: string) => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
    return imageExtensions.some((ext) => url.toLowerCase().includes(ext));
  };

  const handleDownload = async (firebaseUrl: string, fileName: string) => {
    try {
      const response = await fetch(firebaseUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback to opening in new tab if download fails
      window.open(firebaseUrl, "_blank");
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          Review Your Application
        </h3>
        <p className="text-sm text-blue-700">
          Please review all information carefully before submitting your TIN
          registration application.
        </p>
      </div>

      {/* Personal Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Full Name:
              </span>
              <p className="font-medium">{formatValue(data.fullName)}</p>
            </div>

            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Title/Salutation:
              </span>
              <p className="font-medium">
                {getTitleLabel(data.initialsSalutationCode || "")}
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Name with Initials:
              </span>
              <p className="font-medium">
                {formatValue(data.nameWithInitials)}
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                NIC Number:
              </span>
              <p className="font-medium">{formatValue(data.nic)}</p>
            </div>

            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Date of Birth:
              </span>
              <p className="font-medium">{formatValue(data.dateOfBirth)}</p>
            </div>

            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Gender:
              </span>
              <p className="font-medium">
                {data.genderCode === "1"
                  ? "Male"
                  : data.genderCode === "2"
                  ? "Female"
                  : "Not specified"}
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Country of Birth:
              </span>
              <p className="font-medium">
                {getCountryLabel(data.birthCountryCode || "")}
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Preferred Language:
              </span>
              <p className="font-medium">
                {getPreferredLanguageLabel(data.preferredLanguageCode || "")}
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Dual Citizenship:
              </span>
              <Badge
                variant={data.dualCitizenship === "Y" ? "default" : "secondary"}
              >
                {data.dualCitizenship === "Y" ? "Yes" : "No"}
              </Badge>
            </div>
            {data.dualCitizenship === "Y" && data.dualCitizenCountryCode && (
              <div>
                <span className="text-sm text-gray-600 font-semibold block mb-2">
                  Dual Citizenship Country:
                </span>
                <p className="font-medium">
                  {getCountryLabel(data.dualCitizenCountryCode)}
                </p>
              </div>
            )}

            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Preferred Communication Method:
              </span>
              <p className="font-medium">
                {getPreferredCommunicationLabel(
                  data.preferredCommunicationCode || ""
                )}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Address Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Address Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <span className="text-sm text-gray-600 font-semibold block mb-2">
              Permanent Address:
            </span>
            <p className="font-medium">
              {[
                data.address?.premisesNo,
                data.address?.unitNo,
                data.address?.line1,
                data.address?.line2,
                data.address?.line3,
                data.address?.postalCode,
              ]
                .filter(Boolean)
                .join(", ") || "Not provided"}
            </p>
          </div>

          <hr></hr>

          <div>
            <span className="text-sm text-gray-600 font-semibold block mb-2">
              Statutory Address:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  Province
                </span>
                <span className="font-medium">
                  {getProvinceLabel(data.statAddress?.province || "")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  District
                </span>
                <span className="font-medium">
                  {getDistrictLabel(data.statAddress?.district || "")}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  Divisional Secretariat
                </span>
                <span className="font-medium">
                  {getDivisionalSecretariatLabel(
                    data.statAddress?.district || "",
                    data.statAddress?.secretariat !== undefined &&
                      data.statAddress?.secretariat !== null &&
                      data.statAddress?.secretariat !== ""
                      ? Number(data.statAddress?.secretariat)
                      : 0
                  )}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  Grama Niladhari Division
                </span>
                <span className="font-medium">
                  {getGramaNiladhariDivisionLabel(
                    data.statAddress?.secretariat || "",
                    data.statAddress?.gramaNiladhari !== undefined &&
                      data.statAddress?.gramaNiladhari !== null &&
                      data.statAddress?.gramaNiladhari !== ""
                      ? Number(data.statAddress?.gramaNiladhari)
                      : 0
                  )}
                </span>
              </div>
            </div>
          </div>

          <hr></hr>

          <div>
            <span className="text-sm text-gray-600 font-semibold block mb-2">
              Residential Address:
            </span>
            <p className="font-medium">
              {[
                data.residentialAddress?.premisesNo,
                data.residentialAddress?.unitNo,
                data.residentialAddress?.line1,
                data.residentialAddress?.line2,
                data.residentialAddress?.line3,
                data.residentialAddress?.postalCode,
              ]
                .filter(Boolean)
                .join(", ") || "Not provided"}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Email:
              </span>
              {/* Change was made here: break-words -> break-all */}
              <p className="font-medium break-all">
                {formatValue(data.contact?.email)}
              </p>
            </div>

            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Mobile:
              </span>
              <p className="font-medium">{formatValue(data.contact?.mobile)}</p>
            </div>
            {/* <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Home Phone:
              </span>
              <p className="font-medium">{formatValue(data.contact?.home)}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Office Phone:
              </span>
              <p className="font-medium">{formatValue(data.contact?.office)}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Fax Number:
              </span>
              <p className="font-medium">{formatValue(data.contact?.fax)}</p>
            </div> */}
          </div>
        </CardContent>
      </Card>

      {/* Family Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Family Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Civil Status:
              </span>
              <p className="font-medium">
                {formatValue(data.familyDetails?.civilStatus)}
              </p>
            </div>
            {data.familyDetails?.civilStatus === "MARRIED" && (
              <>
                <div>
                  <span className="text-sm text-gray-600 font-semibold block mb-2">
                    Spouse Name:
                  </span>
                  <p className="font-medium">
                    {formatValue(data.familyDetails?.spouseName)}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600 font-semibold block mb-2">
                    Spouse NIC:
                  </span>
                  <p className="font-medium">
                    {formatValue(data.familyDetails?.spouseNic)}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600 font-semibold block mb-2">
                    Spouse TIN:
                  </span>
                  <p className="font-medium">
                    {formatValue(data.familyDetails?.spouseTin)}
                  </p>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Professional Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Professional Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Profession:
              </span>
              <p className="font-medium">
                {getProfessionLabel(data.profession || "")}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Designation:
              </span>
              <p className="font-medium">{formatValue(data.designation)}</p>
            </div>
            <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-600 font-semibold block mb-2">
                  Source of Income:
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {(data.sourceOfIncome || []).map((source, index) => (
                    <Badge key={index} variant="outline">
                      {getSourceOfIncomeLabel(source)}
                    </Badge>
                  ))}
                  {(data.sourceOfIncome || []).length === 0 && (
                    <span className="text-gray-500">Not provided</span>
                  )}
                </div>
              </div>
              {data.sourceOfIncome?.includes("999") &&
                data.otherSourceOfIncome && (
                  <div>
                    <span className="text-sm text-gray-600 font-semibold block mb-2">
                      Other Source of Income:
                    </span>
                    <p className="font-medium">
                      {formatValue(data.otherSourceOfIncome)}
                    </p>
                  </div>
                )}
            </div>
            <div>
              <span className="text-sm text-gray-600 font-semibold block mb-2">
                Registration Purpose:
              </span>
              <p className="font-medium">
                {getRegistrationPurposeLabel(data.registrationPurpose || "")}
              </p>
            </div>
            {data.registrationPurpose === "999" && data.remarks && (
              <div>
                <span className="text-sm text-gray-600 font-semibold block mb-2">
                  Other Purpose Details:
                </span>
                <p className="font-medium">{formatValue(data.remarks)}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Documents */}
      {data.docs && data.docs.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Uploaded Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.docs.map((doc, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold truncate">
                        {getDocumentTypeLabel(doc.subDocumentType)}
                      </h4>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        {doc.fileType}
                      </p>
                    </div>
                  </div>

                  {/* Image Preview for image files */}
                  {isImageFile(doc.firebaseUrl) && (
                    <div className="mb-3">
                      <img
                        src={doc.firebaseUrl}
                        alt={getDocumentTypeLabel(doc.subDocumentType)}
                        className="w-full h-32 object-cover rounded-lg border border-gray-200"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.open(doc.firebaseUrl, "_blank")}
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-all duration-200"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>

                    {/* <button
                      onClick={() =>
                        handleDownload(
                          doc.firebaseUrl,
                          `${getDocumentTypeLabel(doc.subDocumentType)}.${
                            doc.fileType
                          }`
                        )
                      }
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <Download className="h-3 w-3" />
                      Download
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Separator />

      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-green-800 mb-1">
              Ready to Submit
            </h4>
            <p className="text-sm text-green-700">
              Your application appears to be complete. Click &quot;Submit
              Application&quot; to proceed with your TIN registration. You will
              receive a confirmation email once your application is processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
