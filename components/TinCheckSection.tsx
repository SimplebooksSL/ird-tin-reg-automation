"use client";
import { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Search,
  Loader2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Info,
  Shield,
} from "lucide-react";
import { verifyTinRegistration } from "../API-Requests/verify-tin-registration";

const TinCheckSection = () => {
  const [nic, setNic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    found: boolean;
    message: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showResultDialog, setShowResultDialog] = useState(false);

  const getDialogStyle = (message: string) => {
    // Success cases - not registered yet (good for new registration)
    if (
      message.includes("not registered with the Inland Revenue Department yet")
    ) {
      return {
        icon: <CheckCircle className="w-8 h-8 text-green-600" />,
        bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
        borderColor: "border-green-200",
        titleColor: "text-green-800",
        textColor: "text-green-700",
        buttonColor: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
        title: "Ready to Register",
        subtitle: "You can proceed with TIN registration",
        messageFormatted:
          "You are not registered with the Inland Revenue Department yet, which means you can proceed with your TIN registration application.",
      };
    }

    // Already registered - informational
    if (
      message.includes("already registered with the Inland Revenue Department")
    ) {
      return {
        icon: <Shield className="w-8 h-8 text-blue-600" />,
        bgColor: "bg-gradient-to-br from-blue-50 to-sky-50",
        borderColor: "border-blue-200",
        titleColor: "text-blue-800",
        textColor: "text-blue-700",
        buttonColor: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
        title: "Already Registered",
        subtitle: "Your TIN registration is complete",
        messageFormatted:
          "You are already registered with the Inland Revenue Department. If you haven't received your Taxpayer Registration Certificate, please visit the IRD Head Office or nearest Metro/Regional Office. For assistance, call IRD hotline: 1944",
      };
    }

    // Warning/Progress cases
    if (message.includes("Submission in progress")) {
      return {
        icon: <Clock className="w-8 h-8 text-amber-600" />,
        bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
        borderColor: "border-amber-200",
        titleColor: "text-amber-800",
        textColor: "text-amber-700",
        buttonColor: "bg-amber-600 hover:bg-amber-700 focus:ring-amber-500",
        title: "Processing in Progress",
        subtitle: "Your submission is being processed",
        messageFormatted:
          "Your TIN registration submission is currently being processed. Please wait for the process to complete.",
      };
    }

    if (
      message.includes("Verification response not received") ||
      message.includes("registration status could not be determined")
    ) {
      return {
        icon: <Clock className="w-8 h-8 text-orange-600" />,
        bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
        borderColor: "border-orange-200",
        titleColor: "text-orange-800",
        textColor: "text-orange-700",
        buttonColor: "bg-orange-600 hover:bg-orange-700 focus:ring-orange-500",
        title: "Please Try Again",
        subtitle: "Verification process incomplete",
        messageFormatted: message.includes("Verification response not received")
          ? "The verification response was not received in time. Please try again in a few moments."
          : "Your registration status could not be determined at this time. Please try again later.",
      };
    }

    // Validation errors
    if (
      message.includes("Required fields missing") ||
      message.includes("NIC is required") ||
      message.includes("Invalid")
    ) {
      return {
        icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
        bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
        borderColor: "border-red-200",
        titleColor: "text-red-800",
        textColor: "text-red-700",
        buttonColor: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
        title: "Invalid Information",
        subtitle: "Please check your input",
        messageFormatted:
          "The information provided is invalid. Please ensure you have entered a valid NIC number and try again.",
      };
    }

    // Server/Internal errors
    if (
      message.includes("Internal server error") ||
      message.includes("Submission failed")
    ) {
      return {
        icon: <XCircle className="w-8 h-8 text-gray-600" />,
        bgColor: "bg-gradient-to-br from-gray-50 to-slate-50",
        borderColor: "border-gray-200",
        titleColor: "text-gray-800",
        textColor: "text-gray-700",
        buttonColor: "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500",
        title: "Service Temporarily Unavailable",
        subtitle: "Please try again later",
        messageFormatted:
          "We're experiencing technical difficulties. Please try again in a few minutes. If the problem persists, contact support.",
      };
    }

    // Default error case
    return {
      icon: <Info className="w-8 h-8 text-slate-600" />,
      bgColor: "bg-gradient-to-br from-slate-50 to-gray-50",
      borderColor: "border-slate-200",
      titleColor: "text-slate-800",
      textColor: "text-slate-700",
      buttonColor: "bg-slate-600 hover:bg-slate-700 focus:ring-slate-500",
      title: "Information",
      subtitle: "Please review the details below",
      messageFormatted: message,
    };
  };

  const handleCheckTin = useCallback(async () => {
    setError(null);
    setResult(null);

    const nicRegex = /^[0-9]{9}[Vv]$|^[0-9]{12}$/;
    if (!nic.trim() || !nicRegex.test(nic)) {
      setError("Please enter a valid NIC number (9 digits + V or 12 digits)");
      return;
    }

    setIsLoading(true);

    try {
      const response = await verifyTinRegistration({ nic });

      setResult({
        found: response.registered ?? false,
        message: response.message ?? "",
      });
      setShowResultDialog(true);
    } catch (err) {
      if (err instanceof Error) {
        setResult({
          found: false,
          message: err.message,
        });
        setShowResultDialog(true);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [nic]);

  const handleReset = useCallback(() => {
    setNic("");
    setResult(null);
    setError(null);
    setShowResultDialog(false);
  }, []);

  const dialogStyle = result ? getDialogStyle(result.message) : null;

  return (
    <>
      <Card className="mb-8 border-2 border-dashed border-gray-200 hover:border-[#FF612F]/30 transition-all duration-300 shadow-sm hover:shadow-md">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl text-slate-800 mb-2 flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-[#FF612F]/10 rounded-full flex items-center justify-center">
              <Search className="h-6 w-6 text-[#FF612F]" />
            </div>
            Check Existing TIN Registration
          </CardTitle>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            Before applying for a new TIN, check if you&#39;re already
            registered with the Inland Revenue Department. Simply enter your NIC
            number below to verify your registration status.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="max-w-md mx-auto">
            <div className="space-y-3">
              <Label
                htmlFor="nic-check"
                className="text-sm font-medium text-slate-700"
              >
                National Identity Card (NIC) Number *
              </Label>
              <div className="relative">
                <Input
                  id="nic-check"
                  type="text"
                  placeholder="e.g., 123456789V or 200012345678"
                  value={nic}
                  onChange={(e) => setNic(e.target.value.toUpperCase())}
                  disabled={isLoading}
                  className="text-center text-lg font-medium h-12 border-2 focus:border-[#FF612F] transition-all duration-200 rounded-lg"
                />
                {nic && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        /^[0-9]{9}[Vv]$|^[0-9]{12}$/.test(nic)
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    />
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 text-center">
                Enter your 12-digit new NIC or 10-digit old NIC (9 digits + V)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Button
                onClick={handleCheckTin}
                disabled={isLoading || !nic.trim()}
                className="bg-[#FF612F] hover:bg-[#FF612F]/90 text-white px-6 py-3 text-base font-medium h-12 min-w-[140px] transition-all duration-200 rounded-lg shadow-md hover:shadow-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Check Status
                  </>
                )}
              </Button>

              {(result || nic || error) && (
                <Button
                  onClick={handleReset}
                  variant="outline"
                  disabled={isLoading}
                  className="px-6 py-3 text-base h-12 border-2 hover:bg-gray-50 transition-all duration-200 rounded-lg"
                >
                  Clear
                </Button>
              )}
            </div>
          </div>

          {error && (
            <div className="max-w-md mx-auto">
              <Alert className="border-red-200 bg-red-50 border-2 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-700 font-medium">
                  {error}
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Compact Result Dialog */}
      {result && dialogStyle && (
        <Dialog open={showResultDialog} onOpenChange={setShowResultDialog}>
          <DialogContent className="sm:max-w-md max-w-sm w-full mx-auto rounded-lg shadow-xl">
            <DialogHeader className="text-center pb-2">
              <div className="mx-auto mb-4">
                <div
                  className={`w-16 h-16 ${dialogStyle.bgColor} rounded-full flex items-center justify-center border-2 ${dialogStyle.borderColor} shadow-sm`}
                >
                  {dialogStyle.icon}
                </div>
              </div>
              <DialogTitle
                className={`text-lg font-bold ${dialogStyle.titleColor} mb-1`}
              >
                {dialogStyle.title}
              </DialogTitle>
              {/* NOTE: You can use a p tag directly inside DialogHeader for a simple subtitle */}
              <p className="text-xs text-gray-600 mb-4 font-medium">
                {dialogStyle.subtitle}
              </p>
            </DialogHeader>

            {/* This is the corrected section. Moved the styled div outside of DialogDescription */}
            <div
              className={`${dialogStyle.bgColor} p-4 rounded-lg ${dialogStyle.borderColor} border mx-2 mb-4`}
            >
              <p
                className={`${dialogStyle.textColor} font-medium text-sm leading-relaxed`}
              >
                {dialogStyle.messageFormatted}
              </p>
            </div>

            <DialogFooter className="justify-center pt-2">
              <Button
                onClick={() => setShowResultDialog(false)}
                className={`${dialogStyle.buttonColor} text-white px-6 py-2 font-medium text-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:ring-2 focus:ring-offset-2`}
              >
                OK
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default TinCheckSection;
