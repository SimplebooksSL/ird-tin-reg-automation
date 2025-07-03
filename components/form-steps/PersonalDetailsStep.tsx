/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { IrdSubmissionData } from "@/types/ird-types";
import { extractNICDetails } from "@/utils/nicUtils";
import { Camera, FileText, Trash2 } from "lucide-react";
import NicUploadModal from "@/components/NicUploadModal";
import { useState } from "react";
import { COUNTRIES } from "@/constants/constants";
import { ValidationError } from "@/utils/formValidation";

interface PersonalDetailsStepProps {
  data: Partial<IrdSubmissionData>;
  onUpdate: (data: Partial<IrdSubmissionData>) => void;
  validationErrors?: ValidationError[];
}

const PersonalDetailsStep = ({
  data,
  onUpdate,
  validationErrors = [],
}: PersonalDetailsStepProps) => {
  const [nicError, setNicError] = useState<string | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [highlightedFields, setHighlightedFields] = useState<Set<string>>(
    new Set()
  );

  const getFieldError = (fieldName: string): string | undefined => {
    return validationErrors.find((error) => error.field === fieldName)?.message;
  };

  const handleInputChange = (field: keyof IrdSubmissionData, value: string) => {
    onUpdate({ [field]: value });
  };

  const highlightField = (fieldName: string) => {
    setHighlightedFields((prev) => new Set(prev).add(fieldName));
    setTimeout(() => {
      setHighlightedFields((prev) => {
        const newSet = new Set(prev);
        newSet.delete(fieldName);
        return newSet;
      });
    }, 2000);
  };

  const handleNICChange = (nic: string) => {
    handleInputChange("nic", nic);

    if (nic.length >= 10) {
      const nicDetails = extractNICDetails(nic);

      if (nicDetails.isValid) {
        setNicError(null);
        onUpdate({
          nic,
          genderCode: nicDetails.gender === "Male" ? "1" : "2",
          dateOfBirth: nicDetails.dob!,
        });

        // Highlight auto-filled fields
        highlightField("genderCode");
        highlightField("dateOfBirth");
      } else {
        setNicError(nicDetails.error);
      }
    } else {
      setNicError(null);
    }
  };

  const handleOCRComplete = (ocrData: any) => {
    // Update form with OCR extracted data
    const updates: Partial<IrdSubmissionData> = {};
    const fieldsToHighlight: string[] = [];

    if (ocrData.name) {
      updates.fullName = ocrData.name;
      fieldsToHighlight.push("fullName");
    }

    if (ocrData.nic_number) {
      updates.nic = ocrData.nic_number;
      fieldsToHighlight.push("nic");

      // Also extract details from NIC for consistency
      const nicDetails = extractNICDetails(ocrData.nic_number);
      if (nicDetails.isValid) {
        updates.genderCode = nicDetails.gender === "Male" ? "1" : "2";
        updates.dateOfBirth = nicDetails.dob!;
        fieldsToHighlight.push("genderCode", "dateOfBirth");
      }
    }

    if (ocrData.address) {
      updates.address = {
        line1: ocrData.address.split(",")[0] || "",
        line2: ocrData.address.split(",")[1] || "",
        line3: ocrData.address.split(",")[2] || "",
      };
    }

    if (ocrData.name) {
      const nameParts = ocrData.name.split(" ");
      if (nameParts.length > 1) {
        updates.nameWithInitials =
          nameParts
            .slice(0, -1)
            .map((part: string) => part.charAt(0).toUpperCase() + ".")
            .join(" ") +
          " " +
          nameParts[nameParts.length - 1];
      } else {
        updates.nameWithInitials = ocrData.name;
      }
      fieldsToHighlight.push("nameWithInitials");
    }

    if (ocrData.fileArray && Array.isArray(ocrData.fileArray)) {
      updates.docs = ocrData.fileArray.map((file: any) => ({
        subDocumentType: file.subDocumentType || "NATIONAL IDENTITY CARD",
        fileType: file.fileType,
        firebaseUrl: file.firebaseUrl,
        fileName: file.fileName || file.name, // Store the actual filename
      }));
    }

    onUpdate(updates);

    // Highlight all auto-filled fields
    fieldsToHighlight.forEach((field) => highlightField(field));
  };

  const handleDeleteFile = (index: number) => {
    if (data.docs && data.docs.length > 0) {
      const updatedDocs = data.docs.filter((_, i) => i !== index);
      onUpdate({ docs: updatedDocs });
    }
  };

  // Filter titles based on gender
  const getAvailableTitles = () => {
    const allTitles = [
      { value: "1", label: "MR", gender: "1" },
      { value: "2", label: "MRS", gender: "2" },
      { value: "3", label: "MISS", gender: "2" },
      { value: "6", label: "MS", gender: "2" },
      { value: "14", label: "MASTER", gender: "1" },
      { value: "4", label: "MDM", gender: "2" },
      { value: "5", label: "DR", gender: "both" },
      { value: "7", label: "REV", gender: "both" },
      { value: "8", label: "CAPT", gender: "1" },
      { value: "9", label: "CM", gender: "both" },
      { value: "10", label: "PROF", gender: "both" },
      { value: "11", label: "SEC", gender: "both" },
      { value: "12", label: "MAJOR", gender: "1" },
      { value: "13", label: "THE HON", gender: "both" },
    ];

    if (!data.genderCode) return allTitles;

    return allTitles.filter(
      (title) => title.gender === "both" || title.gender === data.genderCode
    );
  };

  // Check if NIC documents are uploaded
  const hasNicDocuments = data.docs && data.docs.length > 0;

  const getFieldClassName = (fieldName: string, baseClassName: string = "") => {
    const isHighlighted = highlightedFields.has(fieldName);
    const errorClass = getFieldError(fieldName) ? "border-red-500" : "";
    const highlightClass = isHighlighted
      ? "animate-pulse bg-[#FF612F]/10 border-[#FF612F] shadow-lg transition-all duration-500"
      : "";

    return `${baseClassName} ${errorClass} ${highlightClass}`.trim();
  };

  // Helper function to get display name for uploaded files
  const getFileDisplayName = (doc: any) => {
    // If we have a stored fileName, use it
    if (doc.fileName) {
      return doc.fileName;
    }

    // Extract filename from firebaseUrl if available
    if (doc.firebaseUrl) {
      try {
        const url = new URL(doc.firebaseUrl);
        const pathname = decodeURIComponent(url.pathname);
        const pathSegments = pathname.split("/");
        const lastSegment = pathSegments[pathSegments.length - 1];

        // Remove the timestamp prefix if it exists (e.g., "1751536722869-Front.jpeg" -> "Front.jpeg")
        const match = lastSegment.match(/^\d+-(.+)$/);
        if (match) {
          return match[1];
        }
        return lastSegment;
      } catch {
        // If URL parsing fails, fall back to default
      }
    }

    // Fallback to document type
    return doc.subDocumentType || "NIC Document";
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">NIC Documents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Upload NIC Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between flex-col sm:flex-row">
              <div className="mb-4 sm:mb-0">
                <h3 className="font-medium text-blue-900 mb-1">
                  Quick Auto-Fill
                </h3>
                <p className="text-sm text-blue-700">
                  Upload your NIC images to automatically fill personal
                  Information <span className="text-red-500">*</span>
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => setUploadModalOpen(true)}
                disabled={hasNicDocuments}
                className={`flex items-center gap-2 ${
                  hasNicDocuments
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-[#FF612F]"
                }`}
              >
                <Camera className="h-4 w-4" />
                {hasNicDocuments ? "NIC Uploaded" : "Upload NIC"}
              </Button>
            </div>

            {getFieldError("nicUpload") && (
              <p className="text-sm text-red-500 mt-2">
                {getFieldError("nicUpload")}
              </p>
            )}

            {(data.docs ?? []).length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-3">
                  Uploaded Documents
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(data.docs ?? []).map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white border border-blue-200 rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <FileText className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span
                          className="text-sm text-gray-800 truncate max-w-[180px]"
                          title={getFileDisplayName(doc)}
                        >
                          {getFileDisplayName(doc)}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleDeleteFile(index)}
                        className="text-red-500 hover:text-red-600 p-1 rounded-md hover:bg-red-50"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Full Name */}
          <div>
            <Label htmlFor="fullName">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              value={data.fullName || ""}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Enter your full name as per NIC"
              className={getFieldClassName("fullName", "mt-1")}
              required
            />
            {getFieldError("fullName") && (
              <p className="text-sm text-red-500 mt-1">
                {getFieldError("fullName")}
              </p>
            )}
          </div>

          {/* Title/Salutation | Name with Initials*/}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Title/Salutation */}
            <div>
              <Label htmlFor="initialsSalutationCode">
                Title/Salutation <span className="text-red-500">*</span>
              </Label>
              <Select
                value={data.initialsSalutationCode || ""}
                onValueChange={(value) =>
                  handleInputChange("initialsSalutationCode", value)
                }
                required
              >
                <SelectTrigger
                  className={getFieldClassName(
                    "initialsSalutationCode",
                    "mt-1"
                  )}
                >
                  <SelectValue placeholder="Select title" />
                </SelectTrigger>
                <SelectContent>
                  {getAvailableTitles().map((title) => (
                    <SelectItem key={title.value} value={title.value}>
                      {title.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {getFieldError("initialsSalutationCode") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("initialsSalutationCode")}
                </p>
              )}
            </div>
            {/* Name with Initials */}
            <div>
              <Label htmlFor="nameWithInitials">
                Name with Initials <span className="text-red-500">*</span>
              </Label>
              <Input
                id="nameWithInitials"
                value={data.nameWithInitials || ""}
                onChange={(e) =>
                  handleInputChange("nameWithInitials", e.target.value)
                }
                placeholder="e.g., A.B. Fernando"
                className={getFieldClassName("nameWithInitials", "mt-1")}
                required
              />
              {getFieldError("nameWithInitials") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("nameWithInitials")}
                </p>
              )}
            </div>
          </div>

          {/* NIC Number | Date of Birth | Gender */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* NIC Number */}
            <div>
              <Label htmlFor="nic">
                National Identity Card Number{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="nic"
                value={data.nic || ""}
                onChange={(e) => handleNICChange(e.target.value)}
                placeholder="Enter NIC number"
                className={getFieldClassName("nic", "mt-1")}
                required
              />
              {nicError && (
                <p className="text-sm text-red-500 mt-1">{nicError}</p>
              )}
              {getFieldError("nic") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("nic")}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="dateOfBirth">
                Date of Birth <span className="text-red-500">*</span>
              </Label>
              <DatePicker
                id="dateOfBirth"
                value={data.dateOfBirth || ""}
                onChange={(date) => handleInputChange("dateOfBirth", date)}
                placeholder="Select your date of birth"
                className={getFieldClassName("dateOfBirth", "mt-1")}
                maxDate={new Date()}
                minDate={new Date("1900-01-01")}
              />
              {getFieldError("dateOfBirth") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("dateOfBirth")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="genderCode">
                Gender <span className="text-red-500">*</span>
              </Label>
              <Select
                value={data.genderCode || ""}
                onValueChange={(value) =>
                  handleInputChange("genderCode", value)
                }
                required
              >
                <SelectTrigger
                  className={getFieldClassName("genderCode", "mt-1")}
                >
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Male</SelectItem>
                  <SelectItem value="2">Female</SelectItem>
                </SelectContent>
              </Select>
              {getFieldError("genderCode") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("genderCode")}
                </p>
              )}
            </div>
          </div>

          {/* Country of Birth | Preferred Language  */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Country of Birth */}
            <div>
              <Label htmlFor="birthCountryCode">
                Country of Birth <span className="text-red-500">*</span>
              </Label>
              <Select
                value={data.birthCountryCode || ""}
                onValueChange={(value) =>
                  handleInputChange("birthCountryCode", value)
                }
                required
              >
                <SelectTrigger
                  className={`mt-1 ${
                    getFieldError("birthCountryCode") ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country.Value} value={country.Value}>
                      {country.Text}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {getFieldError("birthCountryCode") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("birthCountryCode")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="preferredLanguageCode">
                Preferred Language <span className="text-red-500">*</span>
              </Label>
              <Select
                value={data.preferredLanguageCode || ""}
                onValueChange={(value) =>
                  handleInputChange("preferredLanguageCode", value)
                }
                required
              >
                <SelectTrigger
                  className={`mt-1 ${
                    getFieldError("preferredLanguageCode")
                      ? "border-red-500"
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">ENGLISH</SelectItem>
                  <SelectItem value="2">SINHALA</SelectItem>
                  <SelectItem value="3">TAMIL</SelectItem>
                </SelectContent>
              </Select>
              {getFieldError("preferredLanguageCode") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("preferredLanguageCode")}
                </p>
              )}
            </div>
          </div>

          {/* Dual Citizenship */}
          <div className="space-y-4">
            <div>
              <Label>
                Do you hold dual citizenship?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={data.dualCitizenship || ""}
                onValueChange={(value) => {
                  handleInputChange("dualCitizenship", value);
                  if (value === "N") {
                    handleInputChange("dualCitizenCountryCode", "");
                  }
                }}
                className="mt-2 flex items-center gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="Y" id="dual-yes" />
                  <Label htmlFor="dual-yes" className="cursor-pointer">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="N" id="dual-no" />
                  <Label htmlFor="dual-no" className="cursor-pointer">
                    No
                  </Label>
                </div>
              </RadioGroup>
              {getFieldError("dualCitizenship") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("dualCitizenship")}
                </p>
              )}
            </div>

            {data.dualCitizenship === "Y" && (
              <div>
                <Label htmlFor="dualCitizenCountryCode">
                  Dual Citizenship Country{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={data.dualCitizenCountryCode || ""}
                  onValueChange={(value) =>
                    handleInputChange("dualCitizenCountryCode", value)
                  }
                  required
                >
                  <SelectTrigger
                    className={`mt-1 ${
                      getFieldError("dualCitizenCountryCode")
                        ? "border-red-500"
                        : ""
                    }`}
                  >
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRIES.map((country) => (
                      <SelectItem key={country.Value} value={country.Value}>
                        {country.Text}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {getFieldError("dualCitizenCountryCode") && (
                  <p className="text-sm text-red-500 mt-1">
                    {getFieldError("dualCitizenCountryCode")}
                  </p>
                )}
              </div>
            )}
          </div>

          {/*Preferred Communication */}
          <div>
            <div>
              <Label htmlFor="preferredCommunicationCode">
                Preferred Communication Method{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Select
                value={data.preferredCommunicationCode || ""}
                onValueChange={(value) =>
                  handleInputChange("preferredCommunicationCode", value)
                }
                required
              >
                <SelectTrigger
                  className={`mt-1 ${
                    getFieldError("preferredCommunicationCode")
                      ? "border-red-500"
                      : ""
                  }`}
                >
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">EMAIL</SelectItem>
                  <SelectItem value="1">MAIL</SelectItem>
                  <SelectItem value="2">SMS</SelectItem>
                </SelectContent>
              </Select>
              {getFieldError("preferredCommunicationCode") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("preferredCommunicationCode")}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* NIC Modal */}
      <NicUploadModal
        open={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        onOCRComplete={handleOCRComplete}
      />
    </div>
  );
};

export default PersonalDetailsStep;
