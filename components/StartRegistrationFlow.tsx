// components/StartRegistrationFlow.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming your button component
import { Card, CardContent } from "@/components/ui/card"; // For the intro card, if it's dynamic
import TinRegistrationForm from "@/components/TinRegistrationForm"; // Your multi-step form
import RefillDataDialog from "@/components/RefillDataDialog"; // Keep if needed
import FloatingSupportButton from "@/components/FloatingSupportButton"; // Keep if needed
import {
  hasPendingTinRegistration,
  getSavedTinRegistrationData,
  clearTinRegistrationData,
} from "@/utils/localStorageUtils";

const StartRegistrationFlow = () => {
  const [showForm, setShowForm] = useState(false);
  const [showRefillDialog, setShowRefillDialog] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [savedData, setSavedData] = useState<any>(null);

  const handleStartRegistration = () => {
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

  const handleBackFromForm = () => {
    setShowForm(false);
  };

  if (showForm) {
    return (
      <>
        <TinRegistrationForm
          onBack={handleBackFromForm}
          initialData={savedData?.formData}
        />
        <RefillDataDialog
          isOpen={showRefillDialog} // This will be false if form is shown normally
          onConfirm={handleRefillConfirm}
          onCancel={handleRefillCancel}
          savedDate={savedData?.savedAt}
          isFailedSubmission={savedData?.submissionStatus?.success === false}
        />
        <FloatingSupportButton />
      </>
    );
  }

  // Initial view with the "Start Registration" button
  return (
    <>
      <Card className="mb-8">
        <CardContent className="text-center">
          <Button
            onClick={handleStartRegistration}
            className="bg-[#FF612F] hover:bg-[#FF612F]/90 text-white px-8 py-3 text-lg font-medium rounded-lg transition-colors"
          >
            Start TIN Registration
          </Button>
        </CardContent>
      </Card>

      <RefillDataDialog
        isOpen={showRefillDialog}
        onConfirm={handleRefillConfirm}
        onCancel={handleRefillCancel}
        savedDate={savedData?.savedAt}
        isFailedSubmission={savedData?.submissionStatus?.success === false}
      />
      <FloatingSupportButton />
    </>
  );
};

export default StartRegistrationFlow;
