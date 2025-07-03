/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IrdSubmissionData } from "@/types/ird-types";
import { ValidationError } from "@/utils/formValidation";

interface ContactStepProps {
  data: Partial<IrdSubmissionData>;
  onUpdate: (data: Partial<IrdSubmissionData>) => void;
  validationErrors?: ValidationError[];
}

const ContactStep = ({
  data,
  onUpdate,
  validationErrors = [],
}: ContactStepProps) => {
  const getFieldError = (fieldName: string): string | undefined => {
    return validationErrors.find((error) => error.field === fieldName)?.message;
  };

  const updateContact = (
    field: keyof IrdSubmissionData["contact"],
    value: string
  ) => {
    const currentContact = data.contact || { email: "", mobile: "" };
    onUpdate({
      contact: {
        ...currentContact,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card>
        {/* <CardHeader>
          <CardTitle className="text-lg">Contact Information</CardTitle>
        </CardHeader> */}
        <CardContent className="space-y-4 mt-4">
          <div>
            <Label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={data.contact?.email || ""}
              onChange={(e) => updateContact("email", e.target.value)}
              placeholder="your.email@example.com"
              className={`mt-1 ${
                getFieldError("email") ? "border-red-500" : ""
              }`}
            />
            {getFieldError("email") && (
              <p className="text-sm text-red-500 mt-1">
                {getFieldError("email")}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="mobile">
                Mobile Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="mobile"
                value={data.contact?.mobile || ""}
                onChange={(e) => updateContact("mobile", e.target.value)}
                placeholder="071 234 5678"
                className={`mt-1 ${
                  getFieldError("mobile") ? "border-red-500" : ""
                }`}
              />
              {getFieldError("mobile") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("mobile")}
                </p>
              )}
            </div>

            {/* <div>
              <Label htmlFor="home">Home Phone</Label>
              <Input
                id="home"
                value={data.contact?.home || ""}
                onChange={(e) => updateContact("home", e.target.value)}
                placeholder="011 234 5678"
                className="mt-1"
              />
            </div> */}
          </div>

          {/* <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="office">Office Phone</Label>
              <Input
                id="office"
                value={data.contact?.office || ""}
                onChange={(e) => updateContact("office", e.target.value)}
                placeholder="011 234 5678"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="fax">Fax Number</Label>
              <Input
                id="fax"
                value={data.contact?.fax || ""}
                onChange={(e) => updateContact("fax", e.target.value)}
                placeholder="011 234 5678"
                className="mt-1"
              />
            </div>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactStep;
