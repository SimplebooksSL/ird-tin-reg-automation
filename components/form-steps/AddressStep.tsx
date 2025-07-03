"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DISTRICTS_BY_PROVINCE,
  DIVISIONAL_SECRETARIATS_BY_DISTRICTS,
  GRAMA_NILADHARI_DIVISIONS_BY_DIVISIONAL_SECRETARIATS,
  PROVINCES,
} from "@/constants/constants";
import { IrdSubmissionData } from "@/types/ird-types";
import { ValidationError } from "@/utils/formValidation";
import { useState, useEffect } from "react";
import {
  saveSameAsPermanentState,
  getSameAsPermanentState,
} from "@/utils/localStorageUtils";

interface AddressStepProps {
  data: Partial<IrdSubmissionData>;
  onUpdate: (data: Partial<IrdSubmissionData>) => void;
  validationErrors?: ValidationError[];
  sameAsPermanent: boolean;
  onSameAsPermanentChange: (checked: boolean) => void;
}

const AddressStep = ({
  data,
  onUpdate,
  validationErrors = [],
  sameAsPermanent,
  onSameAsPermanentChange,
}: AddressStepProps) => {
  // Local state for dropdowns to control their UI state instantly
  const [selectedProvince, setSelectedProvince] = useState(
    data.statAddress?.province || ""
  );
  const [selectedDistrict, setSelectedDistrict] = useState(
    data.statAddress?.district || ""
  );
  const [selectedSecretariat, setSelectedSecretariat] = useState(
    data.statAddress?.secretariat || ""
  );

  // Load the checkbox state from localStorage on component mount
  useEffect(() => {
    const savedState = getSameAsPermanentState();
    if (savedState !== sameAsPermanent) {
      onSameAsPermanentChange(savedState);
    }
  }, []);

  const getFieldError = (fieldName: string): string | undefined => {
    return validationErrors.find((error) => error.field === fieldName)?.message;
  };

  const updateAddress = (
    addressType: "address" | "residentialAddress",
    field: string,
    value: string
  ) => {
    const currentAddress = data[addressType] || {};
    const updatedData = {
      [addressType]: {
        ...currentAddress,
        [field]: value,
      },
    };

    // If updating permanent address and sameAsPermanent is checked, also update residential
    if (addressType === "address" && sameAsPermanent) {
      updatedData.residentialAddress = {
        ...data.residentialAddress,
        [field]: value,
      };
    }

    onUpdate(updatedData);
  };

  const handleSameAsPermanentChange = (checked: boolean) => {
    // Save to localStorage
    saveSameAsPermanentState(checked);

    onSameAsPermanentChange(checked); // update the parent state
    if (checked) {
      const permanentAddress: Partial<IrdSubmissionData["address"]> =
        data.address || {};
      onUpdate({
        residentialAddress: {
          premisesNo: permanentAddress.premisesNo || "",
          unitNo: permanentAddress.unitNo || "",
          line1: permanentAddress.line1 || "",
          line2: permanentAddress.line2 || "",
          line3: permanentAddress.line3 || "",
          postalCode: permanentAddress.postalCode || "",
        },
      });
    } else {
      // Clear the residential address if unchecked
      onUpdate({
        residentialAddress: {
          premisesNo: "",
          unitNo: "",
          line1: "",
          line2: "",
          line3: "",
          postalCode: "",
        },
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Permanent Address */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Permanent Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="premisesNo">Premises No.</Label>
              <Input
                id="premisesNo"
                value={data.address?.premisesNo || ""}
                onChange={(e) =>
                  updateAddress("address", "premisesNo", e.target.value)
                }
                placeholder="House/Building number"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="unitNo">Unit No.</Label>
              <Input
                id="unitNo"
                value={data.address?.unitNo || ""}
                onChange={(e) =>
                  updateAddress("address", "unitNo", e.target.value)
                }
                placeholder="Apartment/Unit number"
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="line1">
              Address Line 1 <span className="text-red-500">*</span>
            </Label>
            <Input
              id="line1"
              value={data.address?.line1 || ""}
              onChange={(e) =>
                updateAddress("address", "line1", e.target.value)
              }
              placeholder="Street address"
              className={`mt-1 ${
                getFieldError("addressLine1") ? "border-red-500" : ""
              }`}
            />
            {getFieldError("addressLine1") && (
              <p className="text-sm text-red-500 mt-1">
                {getFieldError("addressLine1")}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="line2">Address Line 2</Label>
              <Input
                id="line2"
                value={data.address?.line2 || ""}
                onChange={(e) =>
                  updateAddress("address", "line2", e.target.value)
                }
                placeholder="Additional address info"
                className={`mt-1 ${
                  getFieldError("addressLine2") ? "border-red-500" : ""
                }`}
              />
              {getFieldError("addressLine2") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("addressLine2")}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="line3">Address Line 3</Label>
              <Input
                id="line3"
                value={data.address?.line3 || ""}
                onChange={(e) =>
                  updateAddress("address", "line3", e.target.value)
                }
                placeholder="City/Town"
                className={`mt-1 ${
                  getFieldError("addressLine3") ? "border-red-500" : ""
                }`}
              />
              {getFieldError("addressLine3") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("addressLine3")}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="postalCode">Postal Code</Label>
            <Input
              id="postalCode"
              value={data.address?.postalCode || ""}
              onChange={(e) =>
                updateAddress("address", "postalCode", e.target.value)
              }
              placeholder="Postal code"
              className="mt-1"
            />
          </div>
        </CardContent>
      </Card>

      {/* Statutory Address */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Statutory Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="province">
                Province <span className="text-red-500">*</span>
              </Label>
              <Select
                value={selectedProvince}
                onValueChange={(value) => {
                  setSelectedProvince(value);
                  setSelectedDistrict("");
                  setSelectedSecretariat("");
                  onUpdate({
                    statAddress: {
                      province: value,
                      district: "",
                      secretariat: "",
                      gramaNiladhari: "",
                    },
                  });
                }}
              >
                <SelectTrigger
                  className={`mt-1 ${
                    getFieldError("province") ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  {PROVINCES.map((province) => (
                    <SelectItem key={province.value} value={province.value}>
                      {province.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {getFieldError("province") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("province")}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="district">
                District <span className="text-red-500">*</span>
              </Label>
              <Select
                value={selectedDistrict}
                onValueChange={(value) => {
                  setSelectedDistrict(value);
                  setSelectedSecretariat("");
                  onUpdate({
                    statAddress: {
                      ...data.statAddress,
                      district: value,
                      secretariat: "",
                      gramaNiladhari: "",
                    },
                  });
                }}
                disabled={!selectedProvince}
              >
                <SelectTrigger
                  className={`mt-1 ${
                    getFieldError("district") ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Select district" />
                </SelectTrigger>
                <SelectContent>
                  {(
                    DISTRICTS_BY_PROVINCE[
                      selectedProvince as keyof typeof DISTRICTS_BY_PROVINCE
                    ] || []
                  ).map((district) => (
                    <SelectItem key={district.value} value={district.value}>
                      {district.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {getFieldError("district") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("district")}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="secretariat">
                Divisional Secretariat <span className="text-red-500">*</span>
              </Label>
              <Select
                value={selectedSecretariat}
                onValueChange={(value) => {
                  setSelectedSecretariat(value);
                  onUpdate({
                    statAddress: {
                      ...data.statAddress,
                      secretariat: value,
                      gramaNiladhari: "",
                    },
                  });
                }}
                disabled={!selectedDistrict}
              >
                <SelectTrigger
                  className={`mt-1 ${
                    getFieldError("secretariat") ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Select divisional secretariat" />
                </SelectTrigger>
                <SelectContent>
                  {(
                    DIVISIONAL_SECRETARIATS_BY_DISTRICTS[
                      selectedDistrict as keyof typeof DIVISIONAL_SECRETARIATS_BY_DISTRICTS
                    ] || []
                  ).map((sec) => (
                    <SelectItem key={sec.value} value={String(sec.value)}>
                      {"label" in sec ? sec.label : sec.Label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {getFieldError("secretariat") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("secretariat")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="gramaNiladhari">
                Grama Niladhari Division <span className="text-red-500">*</span>
              </Label>
              <Select
                value={data.statAddress?.gramaNiladhari || ""}
                onValueChange={(value) =>
                  onUpdate({
                    statAddress: {
                      ...data.statAddress,
                      gramaNiladhari: value,
                    },
                  })
                }
                disabled={!selectedSecretariat}
              >
                <SelectTrigger
                  className={`mt-1 ${
                    getFieldError("gramaNiladhari") ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Select GN division" />
                </SelectTrigger>
                <SelectContent>
                  {(
                    GRAMA_NILADHARI_DIVISIONS_BY_DIVISIONAL_SECRETARIATS[
                      selectedSecretariat as keyof typeof GRAMA_NILADHARI_DIVISIONS_BY_DIVISIONAL_SECRETARIATS
                    ] || []
                  ).map((gn) => (
                    <SelectItem key={gn.value} value={String(gn.value)}>
                      {gn.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {getFieldError("gramaNiladhari") && (
                <p className="text-sm text-red-500 mt-1">
                  {getFieldError("gramaNiladhari")}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Residential Address */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Residential Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox
              id="sameAsPermanent"
              checked={sameAsPermanent}
              onCheckedChange={(checked) =>
                handleSameAsPermanentChange(checked as boolean)
              }
            />
            <Label htmlFor="sameAsPermanent" className="text-sm font-medium">
              My residential address is the same as my permanent address
            </Label>
          </div>
          {!sameAsPermanent && (
            <div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="resPremisesNo">Premises No.</Label>
                  <Input
                    id="resPremisesNo"
                    value={data.residentialAddress?.premisesNo || ""}
                    onChange={(e) =>
                      updateAddress(
                        "residentialAddress",
                        "premisesNo",
                        e.target.value
                      )
                    }
                    placeholder="House/Building number"
                    className="mt-1"
                    disabled={sameAsPermanent}
                  />
                </div>
                <div>
                  <Label htmlFor="resUnitNo">Unit No.</Label>
                  <Input
                    id="resUnitNo"
                    value={data.residentialAddress?.unitNo || ""}
                    onChange={(e) =>
                      updateAddress(
                        "residentialAddress",
                        "unitNo",
                        e.target.value
                      )
                    }
                    placeholder="Apartment/Unit number"
                    className="mt-1"
                    disabled={sameAsPermanent}
                  />
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="resLine1">
                  Address Line 1 <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="resLine1"
                  value={data.residentialAddress?.line1 || ""}
                  onChange={(e) =>
                    updateAddress("residentialAddress", "line1", e.target.value)
                  }
                  placeholder="Street address"
                  className={`mt-1 ${
                    getFieldError("residentialAddressLine1")
                      ? "border-red-500"
                      : ""
                  }`}
                  disabled={sameAsPermanent}
                />
                {getFieldError("residentialAddressLine1") && (
                  <p className="text-sm text-red-500 mt-1">
                    {getFieldError("residentialAddressLine1")}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="resLine2">Address Line 2</Label>
                  <Input
                    id="resLine2"
                    value={data.residentialAddress?.line2 || ""}
                    onChange={(e) =>
                      updateAddress(
                        "residentialAddress",
                        "line2",
                        e.target.value
                      )
                    }
                    placeholder="Additional address info"
                    className={`mt-1 ${
                      getFieldError("residentialAddressLine2")
                        ? "border-red-500"
                        : ""
                    }`}
                    disabled={sameAsPermanent}
                  />
                  {getFieldError("residentialAddressLine2") && (
                    <p className="text-sm text-red-500 mt-1">
                      {getFieldError("residentialAddressLine2")}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="resLine3">Address Line 3</Label>
                  <Input
                    id="resLine3"
                    value={data.residentialAddress?.line3 || ""}
                    onChange={(e) =>
                      updateAddress(
                        "residentialAddress",
                        "line3",
                        e.target.value
                      )
                    }
                    placeholder="City/Town"
                    className={`mt-1 ${
                      getFieldError("residentialAddressLine3")
                        ? "border-red-500"
                        : ""
                    }`}
                    disabled={sameAsPermanent}
                  />
                  {getFieldError("residentialAddressLine3") && (
                    <p className="text-sm text-red-500 mt-1">
                      {getFieldError("residentialAddressLine3")}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="resPostalCode">Postal Code</Label>
                <Input
                  id="resPostalCode"
                  value={data.residentialAddress?.postalCode || ""}
                  onChange={(e) =>
                    updateAddress(
                      "residentialAddress",
                      "postalCode",
                      e.target.value
                    )
                  }
                  placeholder="Postal code"
                  className="mt-1"
                  disabled={sameAsPermanent}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AddressStep;
