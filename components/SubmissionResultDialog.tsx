/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { SubmissionResult } from "@/types/ird-types";

interface SubmissionResultDialogProps {
  isOpen: boolean;
  result: SubmissionResult | null;
  onClose: () => void;
  onSaveData?: () => void;
  onConfirmSave?: () => void;
}

const SubmissionResultDialog = ({
  isOpen,
  result,
  onClose,
  onSaveData,
  onConfirmSave,
}: SubmissionResultDialogProps) => {
  if (!result) return null;

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  // Success case
  if (result.success && result.status === "completed") {
    return (
      <AlertDialog open={isOpen}>
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <AlertDialogTitle className="text-lg font-semibold text-green-800">
                Application Submitted Successfully!
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription asChild>
              <div className="text-sm text-gray-600 space-y-3">
                <div>
                  Your TIN registration application has been successfully
                  submitted and processed.
                </div>

                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-green-800">
                        Confirmation Number:
                      </span>
                      <span className="ml-2 font-mono text-green-700">
                        {result.confirmationNumber}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-green-800">
                        Submitted At:
                      </span>
                      <span className="ml-2 text-green-700">
                        {formatTimestamp(result.timestamp)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  Please save your confirmation number for future reference. You
                  will receive a confirmation email shortly.
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={onClose}
              className="bg-green-600 hover:bg-green-700"
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  // Processing error case (user-side error)
  if (!result.success && result.status === "processing") {
    return (
      <AlertDialog open={isOpen}>
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <AlertDialogTitle className="text-lg font-semibold text-yellow-800">
                Application Warning
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription asChild>
              <div className="text-sm text-gray-600 space-y-3">
                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <div className="text-yellow-800 font-medium">
                    {result.message}
                  </div>
                </div>
                {result.message && result.message === "Invalid NIC" ? (
                  <div>
                    It seems there was an issue with your National Identity Card
                    (NIC) number. Please double-check the NIC you provided and
                    ensure it is valid.
                  </div>
                ) : result.message &&
                  result.message ===
                    "There is an existing TIN registration request." ? (
                  <div>
                    It seems you already have an existing TIN registration
                    request. Please check your previous submissions or contact
                    support for assistance.
                  </div>
                ) : result.message &&
                  result.message === "Applicant has been registered in IRD." ? (
                  <div>
                    It appears that you are already registered with the IRD. If
                    you believe this is an error, please contact IRD support for
                    further assistance.
                  </div>
                ) : (
                  <div>
                    There was an issue with your submission. Please review the
                    details you provided and try submitting again.
                  </div>
                )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={onClose}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  // Server error case (initiated/failed)
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <AlertDialogTitle className="text-lg font-semibold text-red-800">
              Submission Failed
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription asChild>
            <div className="text-sm text-gray-600 space-y-3">
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <div className="text-red-800 font-medium">
                  We&#39;re experiencing technical difficulties with our servers
                  at the moment.
                </div>
              </div>
              <div>
                Please try again later. We apologize for the inconvenience.
              </div>
              <div className="font-medium">
                Would you like to save your registration details so you can
                quickly refill the form when you return?
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2">
          <AlertDialogCancel onClick={onClose} className="order-2 sm:order-1">
            No, Don&#39;t Save
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirmSave}
            className="bg-[#FF612F] hover:bg-[#FF612F]/90 order-1 sm:order-2"
          >
            Yes, Save Details
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SubmissionResultDialog;
