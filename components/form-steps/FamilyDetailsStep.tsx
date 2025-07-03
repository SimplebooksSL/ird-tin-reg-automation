/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IrdSubmissionData } from "@/types/ird-types";
import { ValidationError } from "@/utils/formValidation";

interface FamilyDetailsStepProps {
  data: Partial<IrdSubmissionData>;
  onUpdate: (data: Partial<IrdSubmissionData>) => void;
  validationErrors?: ValidationError[];
}

const FamilyDetailsStep = ({
  data,
  onUpdate,
  validationErrors = [],
}: FamilyDetailsStepProps) => {
  const getFieldError = (fieldName: string): string | undefined => {
    return validationErrors.find((error) => error.field === fieldName)?.message;
  };

  const updateFamilyDetails = (
    field: keyof IrdSubmissionData["familyDetails"],
    value: string
  ) => {
    const currentFamilyDetails = data.familyDetails || { civilStatus: "" };
    onUpdate({
      familyDetails: {
        ...currentFamilyDetails,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="space-y-4 mt-4">
          <div>
            <Label htmlFor="civilStatus">
              Civil Status <span className="text-red-500">*</span>
            </Label>
            <Select
              value={data.familyDetails?.civilStatus || ""}
              onValueChange={(value) =>
                updateFamilyDetails("civilStatus", value)
              }
            >
              <SelectTrigger
                className={`mt-1 ${
                  getFieldError("civilStatus") ? "border-red-500" : ""
                }`}
              >
                <SelectValue placeholder="Select civil status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SINGLE">SINGLE</SelectItem>
                <SelectItem value="MARRIED">MARRIED</SelectItem>
              </SelectContent>
            </Select>
            {getFieldError("civilStatus") && (
              <p className="text-sm text-red-500 mt-1">
                {getFieldError("civilStatus")}
              </p>
            )}
          </div>

          {data.familyDetails?.civilStatus === "MARRIED" && (
            <>
              <hr />

              <div className="space-y-1">
                <p className="text-lg font-semibold mt-4">Spouse Information</p>
                <p className="text-sm text-gray-600 mt-2">
                  Please provide your spouse information
                </p>
              </div>

              <div>
                <Label htmlFor="spouseName">
                  Spouse&apos;s Full Name{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="spouseName"
                  value={data.familyDetails?.spouseName || ""}
                  onChange={(e) =>
                    updateFamilyDetails("spouseName", e.target.value)
                  }
                  placeholder="Enter spouse's full name"
                  className={`mt-1 ${
                    getFieldError("spouseName") ? "border-red-500" : ""
                  }`}
                />
                {getFieldError("spouseName") && (
                  <p className="text-sm text-red-500 mt-1">
                    {getFieldError("spouseName")}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="spouseNic">Spouse&apos;s NIC Number</Label>
                  <Input
                    id="spouseNic"
                    value={data.familyDetails?.spouseNic || ""}
                    onChange={(e) =>
                      updateFamilyDetails("spouseNic", e.target.value)
                    }
                    placeholder="Enter spouse's NIC"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="spouseTin">Spouse&apos;s TIN Number</Label>
                  <Input
                    id="spouseTin"
                    value={data.familyDetails?.spouseTin || ""}
                    onChange={(e) =>
                      updateFamilyDetails("spouseTin", e.target.value)
                    }
                    placeholder="Enter spouse's TIN (if available)"
                    className="mt-1"
                  />
                </div>
              </div>
            </>
          )}

          {data.familyDetails?.civilStatus === "SINGLE" && (
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                As a single person, you only need to provide your personal
                information. No spouse details are required for your TIN
                registration.
              </p>
            </div>
          )}

          {data.familyDetails?.civilStatus === "MARRIED" && (
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-green-800">
                <strong>Note:</strong> If your spouse also needs a TIN, they
                must apply separately. Each individual requires their own TIN
                registration.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FamilyDetailsStep;
