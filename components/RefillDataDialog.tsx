
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { FileText, Clock, AlertTriangle, XCircle } from "lucide-react";

interface RefillDataDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  savedDate?: string;
  isFailedSubmission?: boolean;
}

const RefillDataDialog = ({ isOpen, onConfirm, onCancel, savedDate, isFailedSubmission }: RefillDataDialogProps) => {
  const formatSavedDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getIcon = () => {
    if (isFailedSubmission) {
      return <XCircle className="w-6 h-6 text-red-600" />;
    }
    return <FileText className="w-6 h-6 text-blue-600" />;
  };

  const getIconBgColor = () => {
    if (isFailedSubmission) {
      return "bg-red-100";
    }
    return "bg-blue-100";
  };

  const getTitleColor = () => {
    if (isFailedSubmission) {
      return "text-red-800";
    }
    return "text-blue-800";
  };

  const getTitle = () => {
    if (isFailedSubmission) {
      return "Failed Submission Found";
    }
    return "Previous Application Found";
  };

  const getDescription = () => {
    if (isFailedSubmission) {
      return "We found a previously completed TIN registration that failed to submit successfully.";
    }
    return "We found a previously saved TIN registration that was not completed.";
  };

  const getDateBgColor = () => {
    if (isFailedSubmission) {
      return "bg-red-50 border-red-200";
    }
    return "bg-blue-50 border-blue-200";
  };

  const getDateTextColor = () => {
    if (isFailedSubmission) {
      return "text-red-800";
    }
    return "text-blue-800";
  };

  const getDateIconColor = () => {
    if (isFailedSubmission) {
      return "text-red-600";
    }
    return "text-blue-600";
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-12 h-12 ${getIconBgColor()} rounded-full flex items-center justify-center`}>
              {getIcon()}
            </div>
            <AlertDialogTitle className={`text-lg font-semibold ${getTitleColor()}`}>
              {getTitle()}
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-sm text-gray-600 space-y-3">
            <p>{getDescription()}</p>
            
            {savedDate && (
              <div className={`p-3 rounded-lg border ${getDateBgColor()}`}>
                <div className="flex items-center gap-2">
                  <Clock className={`w-4 h-4 ${getDateIconColor()}`} />
                  <span className={`${getDateTextColor()} font-medium`}>
                    {isFailedSubmission ? 'Failed on:' : 'Saved on:'} {formatSavedDate(savedDate)}
                  </span>
                </div>
              </div>
            )}
            
            <p>
              {isFailedSubmission 
                ? "Would you like to retry the submission with your saved information, or start a fresh registration?"
                : "Would you like to continue with your saved information to complete the registration?"
              }
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2">
          <AlertDialogCancel onClick={onCancel} className="order-2 sm:order-1">
            Start Fresh
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={onConfirm} 
            className="bg-[#FF612F] hover:bg-[#FF612F]/90 order-1 sm:order-2"
          >
            {isFailedSubmission ? 'Retry Submission' : 'Continue with Saved Data'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RefillDataDialog;
