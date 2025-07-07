"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TinRegistrationForm from "@/components/TinRegistrationForm";
import RefillDataDialog from "@/components/RefillDataDialog";
import {
  hasPendingTinRegistration,
  getSavedTinRegistrationData,
  clearTinRegistrationData,
} from "@/utils/localStorageUtils";

const ClientIndexContent = () => {
  const [showForm, setShowForm] = useState(false);
  const [showRefillDialog, setShowRefillDialog] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [savedData, setSavedData] = useState<any>(null);

  // Disable body scroll when form is open and enable scroll-to-top
  useEffect(() => {
    if (showForm) {
      // Disable body scroll
      document.body.style.overflow = "hidden";
      // Scroll form container to top
      const formContainer = document.querySelector(".form-container");
      if (formContainer) {
        formContainer.scrollTop = 0;
      }
    } else {
      // Re-enable body scroll
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore body scroll
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showForm]);

  const handleStartRegistration = () => {
    // Check if there's pending registration data
    if (hasPendingTinRegistration()) {
      const data = getSavedTinRegistrationData();
      setSavedData(data);
      setShowRefillDialog(true);
    } else {
      setShowForm(true);
    }
  };

  const handleRefillConfirm = () => {
    setShowRefillDialog(false);
    setShowForm(true);
  };

  const handleRefillCancel = () => {
    setShowRefillDialog(false);
    clearTinRegistrationData();
    setSavedData(null);
    setShowForm(true);
  };

  if (showForm) {
    return (
      <div className="fixed inset-0 bg-gray-50 z-50 overflow-y-auto form-container">
        <TinRegistrationForm
          onBack={() => setShowForm(false)}
          initialData={savedData?.formData}
        />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center">
        <Button
          onClick={handleStartRegistration}
          className="bg-[#FF612F] hover:bg-[#FF612F]/90 text-white px-8 py-3 text-lg font-medium rounded-lg transition-colors"
        >
          Start TIN Registration
        </Button>
      </div>

      {/* Refill Data Dialog */}
      <RefillDataDialog
        isOpen={showRefillDialog}
        onConfirm={handleRefillConfirm}
        onCancel={handleRefillCancel}
        savedDate={savedData?.savedAt}
        isFailedSubmission={savedData?.submissionStatus?.success === false}
      />
    </>
  );
};

export default ClientIndexContent;
