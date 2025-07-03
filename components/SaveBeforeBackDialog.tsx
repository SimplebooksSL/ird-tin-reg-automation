import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Save, X } from "lucide-react";

interface SaveBeforeBackDialogProps {
  isOpen: boolean;
  onSave: () => void;
  onDiscard: () => void;
  onCancel: () => void;
}

const SaveBeforeBackDialog = ({
  isOpen,
  onSave,
  onDiscard,
  onCancel,
}: SaveBeforeBackDialogProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onCancel()}>
      <AlertDialogContent className="w-[calc(100%-2rem)] max-w-md rounded-lg sm:p-6 p-4">
        {/* Close Icon */}
        <button
          onClick={onCancel}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:ring-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Save className="w-6 h-6 text-amber-600" />
            </div>
            <AlertDialogTitle className="text-lg font-semibold text-amber-800">
              Save Your Progress?
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-sm text-gray-600 space-y-3 break-words">
            <p>
              You have filled some information in the TIN registration form.
            </p>
            <p>
              Would you like to save your progress so you can continue later, or
              discard the changes?
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex-col sm:flex-row gap-2 mt-4">
          <AlertDialogAction
            onClick={onDiscard}
            className="w-full sm:w-auto bg-transparent border border-input bg-background hover:bg-accent hover:text-accent-foreground text-foreground order-2 sm:order-1"
          >
            Discard & Go Back
          </AlertDialogAction>

          <AlertDialogAction
            onClick={onSave}
            className="w-full sm:w-auto bg-[#FF612F] hover:bg-[#FF612F]/90 text-white order-1 sm:order-2"
          >
            Save & Go Back
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SaveBeforeBackDialog;
