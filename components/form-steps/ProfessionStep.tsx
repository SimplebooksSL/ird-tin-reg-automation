import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IrdSubmissionData } from "@/types/ird-types";
import { ValidationError } from "@/utils/formValidation";

interface ProfessionStepProps {
  data: Partial<IrdSubmissionData>;
  onUpdate: (data: Partial<IrdSubmissionData>) => void;
  validationErrors?: ValidationError[];
}

const ProfessionStep = ({
  data,
  onUpdate,
  validationErrors = [],
}: ProfessionStepProps) => {
  const getFieldError = (fieldName: string): string | undefined => {
    return validationErrors.find((error) => error.field === fieldName)?.message;
  };

  const handleFieldUpdate = (field: keyof IrdSubmissionData, value: string) => {
    onUpdate({ [field]: value });
  };

  const handleSourceOfIncomeChange = (source: string, checked: boolean) => {
    const currentSources = data.sourceOfIncome || [];
    let newSources;

    if (checked) {
      newSources = [...currentSources, source];
    } else {
      newSources = currentSources.filter((s) => s !== source);
    }

    onUpdate({ sourceOfIncome: newSources });
  };

  const incomeSourceOptions = [
    { value: "2", label: "EMPLOYMENT" },
    { value: "1", label: "BUSINESS" },
    { value: "3", label: "INVESTMENT" },
    { value: "999", label: "OTHER" },
  ];

  return (
    <div className="space-y-6">
      {/* Profession Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Professional Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="profession">
              Profession <span className="text-red-500">*</span>
            </Label>
            <Select
              value={data.profession || ""}
              onValueChange={(value) => handleFieldUpdate("profession", value)}
            >
              <SelectTrigger
                className={`mt-1 ${
                  getFieldError("profession") ? "border-red-500" : ""
                }`}
              >
                <SelectValue placeholder="Select your profession" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">ACCOUNTANT</SelectItem>
                <SelectItem value="2">ARCHITECT</SelectItem>
                <SelectItem value="3">CHEF/COOK</SelectItem>
                <SelectItem value="4">DOCTOR</SelectItem>
                <SelectItem value="5">ENGINEER</SelectItem>
                <SelectItem value="6">JUDGE</SelectItem>
                <SelectItem value="7">LECTURER</SelectItem>
                <SelectItem value="8">PILOT</SelectItem>
                <SelectItem value="9">SCIENTIST</SelectItem>
                <SelectItem value="10">SOFTWARE ENGINEER</SelectItem>
                <SelectItem value="11">SYSTEMS ANALYST</SelectItem>
                <SelectItem value="14">LAWYER</SelectItem>
                <SelectItem value="12">OTHERS</SelectItem>
                <SelectItem value="13">NOT APPLICABLE</SelectItem>
              </SelectContent>
            </Select>
            {getFieldError("profession") && (
              <p className="text-sm text-red-500 mt-1">
                {getFieldError("profession")}
              </p>
            )}
          </div>

          {data.profession === "12" && (
            <div>
              <Label htmlFor="professionOther">
                Specify Other Profession <span className="text-red-500">*</span>
              </Label>
              <Input
                id="professionOther"
                value={data.professionOther || ""}
                onChange={(e) =>
                  handleFieldUpdate("professionOther", e.target.value)
                }
                placeholder="Please specify your profession"
                className={`mt-1 ${
                  getFieldError("professionOther") ? "border-red-500" : ""
                }`}
              />
              {getFieldError("professionOther") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("professionOther")}
                </p>
              )}
            </div>
          )}

          <div>
            <Label htmlFor="designation">
              Designation/Position <span className="text-red-500">*</span>
            </Label>
            <Input
              id="designation"
              value={data.designation || ""}
              onChange={(e) => handleFieldUpdate("designation", e.target.value)}
              placeholder="e.g., Senior Manager, Director"
              className={`mt-1 ${
                getFieldError("designation") ? "border-red-500" : ""
              }`}
            />
            {getFieldError("designation") && (
              <p className="text-sm text-red-500 mt-1">
                {getFieldError("designation")}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Source of Income */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Source of Income</CardTitle>
          <p className="text-sm text-gray-600">
            Select all that apply <span className="text-red-500">*</span>
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {incomeSourceOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <Checkbox
                  id={option.value}
                  checked={(data.sourceOfIncome || []).includes(option.value)}
                  onCheckedChange={(checked) =>
                    handleSourceOfIncomeChange(option.value, checked as boolean)
                  }
                />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </div>
          {getFieldError("sourceOfIncome") && (
            <p className="text-sm text-red-500 mt-2">
              {getFieldError("sourceOfIncome")}
            </p>
          )}

          {(data.sourceOfIncome || []).includes("999") && (
            <div className="mt-4">
              <Label htmlFor="otherSourceOfIncome">
                Specify Other Source of Income{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="otherSourceOfIncome"
                value={data.otherSourceOfIncome || ""}
                onChange={(e) =>
                  handleFieldUpdate("otherSourceOfIncome", e.target.value)
                }
                placeholder="Please specify other source of income"
                className={`mt-1 ${
                  getFieldError("otherSourceOfIncome") ? "border-red-500" : ""
                }`}
              />
              {getFieldError("otherSourceOfIncome") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("otherSourceOfIncome")}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Registration Purpose and Additional Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Registration Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="registrationPurpose">
              Purpose of Registration <span className="text-red-500">*</span>
            </Label>
            <Select
              value={data.registrationPurpose || ""}
              onValueChange={(value) =>
                handleFieldUpdate("registrationPurpose", value)
              }
            >
              <SelectTrigger
                className={`mt-1 ${
                  getFieldError("registrationPurpose") ? "border-red-500" : ""
                }`}
              >
                <SelectValue placeholder="Select registration purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">TAX PURPOSE</SelectItem>
                <SelectItem value="2">
                  CLEARING THE GOODS FROM CUSTOMS
                </SelectItem>
                <SelectItem value="3">EXPORT REGISTRATION PROCESS</SelectItem>
                <SelectItem value="4">
                  FREIGHT FORWARDING AND CLEARING AGENTS
                </SelectItem>
                <SelectItem value="5">STAMP DUTY PAYMENT</SelectItem>
                <SelectItem value="6">INCOME TAX CLEARANCE</SelectItem>
                <SelectItem value="999">OTHERS</SelectItem>
              </SelectContent>
            </Select>
            {getFieldError("registrationPurpose") && (
              <p className="text-sm text-red-500 mt-1">
                {getFieldError("registrationPurpose")}
              </p>
            )}
          </div>

          {/* Additional Remarks - Only show when OTHER is selected */}
          {data.registrationPurpose === "999" && (
            <div>
              <Label htmlFor="remarks">
                Additional Remarks <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="remarks"
                value={data.remarks || ""}
                onChange={(e) => handleFieldUpdate("remarks", e.target.value)}
                placeholder="Please specify the purpose of registration and any additional information"
                className={`mt-1 ${
                  getFieldError("remarks") ? "border-red-500" : ""
                }`}
                rows={3}
              />
              {getFieldError("remarks") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("remarks")}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfessionStep;
