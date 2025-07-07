import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface SubmissionLoadingModalProps {
  isOpen: boolean;
}

const SubmissionLoadingModal = ({ isOpen }: SubmissionLoadingModalProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col items-center justify-center py-8 px-4">
          {/* Add DialogTitle here for accessibility */}
          <DialogTitle className="sr-only">
            Submitting Your Application
          </DialogTitle>
          {/* sr-only hides the title visually but keeps it accessible to screen readers */}

          {/* Animated loading spinner */}
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-[#FF612F] border-t-transparent animate-spin"></div>
          </div>

          {/* Loading text - now using a regular div or span since DialogTitle handles the heading */}
          <h3 className="text-lg font-semibold text-[#080A3C] mb-2">
            Submitting Your Application
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Please wait while we process your TIN registration...
          </p>

          {/* Animated dots */}
          <div className="flex space-x-1 mt-4">
            <div className="w-2 h-2 bg-[#FF612F] rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-[#FF612F] rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-[#FF612F] rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubmissionLoadingModal;
