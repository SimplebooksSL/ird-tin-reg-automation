"use client";
import { useState, useEffect, useCallback } from "react";
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

  // Memoized function to handle form closure
  const handleFormClose = useCallback(() => {
    // Reset all states
    setShowForm(false);
    setSavedData(null);
    setShowRefillDialog(false);

    // Force body scroll restoration
    setTimeout(() => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
    }, 100);
  }, []);

  // Disable body scroll when form is open and enable scroll-to-top
  useEffect(() => {
    if (showForm) {
      // Disable body scroll more thoroughly
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      // Scroll form container to top
      const formContainer = document.querySelector(".form-container");
      if (formContainer) {
        formContainer.scrollTop = 0;
      }
    } else {
      // Re-enable body scroll
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    // Cleanup function to restore body scroll
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [showForm]);

  // Additional cleanup on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

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
          onBack={handleFormClose}
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
