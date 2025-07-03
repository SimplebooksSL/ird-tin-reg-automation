/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, X } from "lucide-react";
import { IrdSubmissionData } from "@/types/ird-types";
import { useState } from "react";

interface DocumentsStepProps {
  data: Partial<IrdSubmissionData>;
  onUpdate: (data: Partial<IrdSubmissionData>) => void;
}

const DocumentsStep = ({ data, onUpdate }: DocumentsStepProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<{
    nicFiles: File[];
    passportFile: File | null;
    marriageCertFile: File | null;
  }>({
    nicFiles: [],
    passportFile: null,
    marriageCertFile: null,
  });

  const [documentType, setDocumentType] = useState<string>("");

  const handleNicFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      setUploadedFiles((prev) => ({
        ...prev,
        nicFiles: [...prev.nicFiles, ...newFiles],
      }));
      console.log(
        "NIC files selected:",
        newFiles.map((f) => f.name)
      );
    }
  };

  const handleDeleteNicFiles = () => {
    setUploadedFiles((prev) => ({
      ...prev,
      nicFiles: [],
    }));
  };

  const handlePassportUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles((prev) => ({
        ...prev,
        passportFile: file,
      }));
    }
  };

  const handleMarriageCertUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles((prev) => ({
        ...prev,
        marriageCertFile: file,
      }));
    }
  };

  // Check if NIC files are uploaded to disable/enable upload area
  const isNicUploaded = uploadedFiles.nicFiles.length > 0;
  const isPassportUploaded = uploadedFiles.passportFile !== null;
  const isMarriageCertUploaded = uploadedFiles.marriageCertFile !== null;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Required Documents</CardTitle>
          <p className="text-sm text-gray-600">
            Upload clear, readable copies of your identification documents
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* NIC Document */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="subDocumentType">
                NIC Document Type <span className="text-red-500">*</span>
              </Label>
              <Select
                onValueChange={(value) => {
                  setDocumentType(value);
                  console.log("Document type selected:", value);
                }}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NEW_NIC">New NIC (Smart Card)</SelectItem>
                  <SelectItem value="OLD_NIC">Old NIC (Laminated)</SelectItem>
                  <SelectItem value="PASSPORT">Passport</SelectItem>
                  <SelectItem value="DRIVING_LICENSE">
                    Driving License
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="nicUpload">
                Upload NIC Document <span className="text-red-500">*</span>
              </Label>
              <div className="mt-1">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="nicUpload"
                    className={`flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg ${
                      isNicUploaded
                        ? "cursor-not-allowed bg-gray-100 border-gray-200"
                        : "cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300"
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center pt-3 pb-3">
                      <Upload
                        className={`w-6 h-6 mb-2 ${
                          isNicUploaded ? "text-gray-300" : "text-gray-500"
                        }`}
                      />
                      <p
                        className={`text-sm ${
                          isNicUploaded ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <span className="font-semibold">
                          {isNicUploaded ? "Files uploaded" : "Click to upload"}
                        </span>{" "}
                        {!isNicUploaded && "or drag and drop"}
                      </p>
                      <p
                        className={`text-xs ${
                          isNicUploaded ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        PDF, PNG, JPG or JPEG (MAX. 5MB)
                      </p>
                    </div>
                    <input
                      id="nicUpload"
                      type="file"
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg"
                      multiple
                      onChange={handleNicFileUpload}
                      disabled={isNicUploaded}
                    />
                  </label>
                </div>

                {/* Uploaded NIC Files Display */}
                {uploadedFiles.nicFiles.length > 0 && (
                  <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-green-800">
                        Uploaded Files:
                      </h4>
                      <button
                        onClick={handleDeleteNicFiles}
                        className="text-red-500 hover:text-red-700"
                        type="button"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {uploadedFiles.nicFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-green-700"
                        >
                          <FileText className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{file.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Document Requirements */}
          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">
              Document Requirements:
            </h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Documents must be clear and readable</li>
              <li>• Both sides of NIC must be scanned if applicable</li>
              <li>• File size should not exceed 5MB</li>
              <li>• Accepted formats: PDF, PNG, JPG, JPEG</li>
              <li>• Ensure all text is clearly visible</li>
            </ul>
          </div>

          {/* Additional Documents (if applicable) */}
          {data.dualCitizenship === "YES" && (
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-800">
                Additional Documents for Dual Citizenship:
              </h4>
              <div>
                <Label htmlFor="passportUpload">Upload Passport Copy</Label>
                <div className="mt-1">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="passportUpload"
                      className={`flex flex-col items-center justify-center w-full h-20 border-2 border-dashed rounded-lg ${
                        isPassportUploaded
                          ? "cursor-not-allowed bg-gray-100 border-gray-200"
                          : "cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300"
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center pt-2 pb-2">
                        <Upload
                          className={`w-5 h-5 mb-1 ${
                            isPassportUploaded
                              ? "text-gray-300"
                              : "text-gray-500"
                          }`}
                        />
                        <p
                          className={`text-sm ${
                            isPassportUploaded
                              ? "text-gray-400"
                              : "text-gray-500"
                          }`}
                        >
                          {isPassportUploaded
                            ? "Passport uploaded"
                            : "Upload passport copy"}
                        </p>
                      </div>
                      <input
                        id="passportUpload"
                        type="file"
                        className="hidden"
                        accept=".pdf,.png,.jpg,.jpeg"
                        onChange={handlePassportUpload}
                        disabled={isPassportUploaded}
                      />
                    </label>
                  </div>

                  {uploadedFiles.passportFile && (
                    <div className="mt-2 p-2 bg-green-50 rounded border border-green-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-green-700">
                          <FileText className="w-4 h-4" />
                          <span className="truncate">
                            {uploadedFiles.passportFile.name}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            setUploadedFiles((prev) => ({
                              ...prev,
                              passportFile: null,
                            }))
                          }
                          className="text-red-500 hover:text-red-700"
                          type="button"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {data.familyDetails?.civilStatus === "MARRIED" && (
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-800">
                Marriage Certificate (Optional):
              </h4>
              <div>
                <Label htmlFor="marriageCertUpload">
                  Upload Marriage Certificate
                </Label>
                <div className="mt-1">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="marriageCertUpload"
                      className={`flex flex-col items-center justify-center w-full h-20 border-2 border-dashed rounded-lg ${
                        isMarriageCertUploaded
                          ? "cursor-not-allowed bg-gray-100 border-gray-200"
                          : "cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300"
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center pt-2 pb-2">
                        <Upload
                          className={`w-5 h-5 mb-1 ${
                            isMarriageCertUploaded
                              ? "text-gray-300"
                              : "text-gray-500"
                          }`}
                        />
                        <p
                          className={`text-sm ${
                            isMarriageCertUploaded
                              ? "text-gray-400"
                              : "text-gray-500"
                          }`}
                        >
                          {isMarriageCertUploaded
                            ? "Certificate uploaded"
                            : "Upload marriage certificate"}
                        </p>
                      </div>
                      <input
                        id="marriageCertUpload"
                        type="file"
                        className="hidden"
                        accept=".pdf,.png,.jpg,.jpeg"
                        onChange={handleMarriageCertUpload}
                        disabled={isMarriageCertUploaded}
                      />
                    </label>
                  </div>

                  {uploadedFiles.marriageCertFile && (
                    <div className="mt-2 p-2 bg-green-50 rounded border border-green-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-green-700">
                          <FileText className="w-4 h-4" />
                          <span className="truncate">
                            {uploadedFiles.marriageCertFile.name}
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            setUploadedFiles((prev) => ({
                              ...prev,
                              marriageCertFile: null,
                            }))
                          }
                          className="text-red-500 hover:text-red-700"
                          type="button"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentsStep;
