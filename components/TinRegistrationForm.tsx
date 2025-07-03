/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import PersonalDetailsStep from "./form-steps/PersonalDetailsStep";
import AddressStep from "./form-steps/AddressStep";
import ContactStep from "./form-steps/ContactStep";
import ProfessionStep from "./form-steps/ProfessionStep";
import FamilyDetailsStep from "./form-steps/FamilyDetailsStep";
import ReviewStep from "./form-steps/ReviewStep";
import StepProgress from "./StepProgress";
import TinRegistrationSidebar from "./TinRegistrationSidebar";
import SubmissionLoadingModal from "./SubmissionLoadingModal";
import SubmissionResultDialog from "./SubmissionResultDialog";
import FloatingSupportButton from "./FloatingSupportButton";
import { IrdSubmissionData, SubmissionResult } from "@/types/ird-types";
import { getStepValidation, ValidationError } from "@/utils/formValidation";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { submitTinRegistration } from "@/API/submit-tin-registration";
import {
  saveTinRegistrationData,
  clearTinRegistrationData,
} from "@/utils/localStorageUtils";
import SaveBeforeBackDialog from "./SaveBeforeBackDialog";

interface TinRegistrationFormProps {
  onBack: () => void;
  initialData?: Partial<IrdSubmissionData>;
}

const TinRegistrationForm = ({
  onBack,
  initialData,
}: TinRegistrationFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<Partial<IrdSubmissionData>>(
    initialData || {}
  );
  const [sameAsPermanent, setSameAsPermanent] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [submissionResult, setSubmissionResult] =
    useState<SubmissionResult | null>(null);
  const [showResultDialog, setShowResultDialog] = useState(false);
  const [showSaveBeforeBackDialog, setShowSaveBeforeBackDialog] =
    useState(false);

  const totalSteps = 6;
  const stepTitles = [
    "Personal Details",
    "Address Details",
    "Contact Details",
    "Family Details",
    "Profession & Income",
    "Review & Submit",
  ];

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  // Define the calculateProgress function (assuming it's here)
  const calculateProgress = () => {
    // Your progress calculation logic...
    return 0; // Placeholder
  };

  // Define the updateFormData function
  const updateFormData = (stepData: Partial<IrdSubmissionData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setValidationErrors([]);
  };

  // Define the validateCurrentStep function
  const validateCurrentStep = (): boolean => {
    const errors = getStepValidation(currentStep, formData);
    setValidationErrors(errors);
    if (errors.length > 0) {
      toast({
        title: "Validation Error",
        description: `Please fill in all required fields. ${errors.length} field(s) need attention.`,
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      if (!validateCurrentStep()) {
        return;
      }
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps((prev) => [...prev, currentStep]);
      }
      setCurrentStep(currentStep + 1);
      setValidationErrors([]);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setValidationErrors([]);
    }
  };

  // Define all other handler functions (handleSubmit, handleBackClick, etc.)
  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;
    setLoading(true);
    try {
      const result = await submitTinRegistration(formData as IrdSubmissionData);
      setSubmissionResult(result);
    } catch (error) {
      const failedResult: SubmissionResult = {
        submissionId: "",
        timestamp: new Date().toISOString(),
        status: "failed",
        success: false,
        message: "Failed to submit TIN Registration. Please try again.",
        errors: [],
      };
      setSubmissionResult(failedResult);
    } finally {
      setLoading(false);
      setShowResultDialog(true);
    }
  };

  const handleResultDialogClose = () => {
    setShowResultDialog(false);
    if (submissionResult?.success) {
      clearTinRegistrationData();
      onBack();
    }
    setSubmissionResult(null);
  };

  const handleSaveData = () => {
    if (submissionResult) {
      saveTinRegistrationData(formData, submissionResult);
      toast({
        title: "Data Saved",
        description:
          "Your registration details have been saved for later completion.",
      });
    }
    setShowResultDialog(false);
    setSubmissionResult(null);
    onBack();
  };

  const hasFormData = () => {
    return Object.values(formData).some(
      (value) => value && value.toString().trim() !== ""
    );
  };

  const handleBackClick = () => {
    if (hasFormData()) {
      setShowSaveBeforeBackDialog(true);
    } else {
      onBack();
    }
  };

  const handleSaveAndGoBack = () => {
    saveTinRegistrationData(formData);
    setShowSaveBeforeBackDialog(false);
    onBack();
  };

  const handleDiscardAndGoBack = () => {
    clearTinRegistrationData();
    setShowSaveBeforeBackDialog(false);
    onBack();
  };

  const handleCancelSaveDialog = () => {
    setShowSaveBeforeBackDialog(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetailsStep
            data={formData}
            onUpdate={updateFormData}
            validationErrors={validationErrors}
          />
        );
      case 2:
        return (
          <AddressStep
            data={formData}
            onUpdate={updateFormData}
            validationErrors={validationErrors}
            sameAsPermanent={sameAsPermanent}
            onSameAsPermanentChange={setSameAsPermanent}
          />
        );
      case 3:
        return (
          <ContactStep
            data={formData}
            onUpdate={updateFormData}
            validationErrors={validationErrors}
          />
        );
      case 4:
        return (
          <FamilyDetailsStep
            data={formData}
            onUpdate={updateFormData}
            validationErrors={validationErrors}
          />
        );
      case 5:
        return (
          <ProfessionStep
            data={formData}
            onUpdate={updateFormData}
            validationErrors={validationErrors}
          />
        );
      case 6:
        return <ReviewStep data={formData} onUpdate={updateFormData} />;
      default:
        return (
          <PersonalDetailsStep
            data={formData}
            onUpdate={updateFormData}
            validationErrors={validationErrors}
          />
        );
    }
  };

  return (
    <div className="bg-gray-50 font-poppins">
      {/* Use Flexbox on large screens to create a two-column layout */}
      <div className="lg:flex">
        {/* ======== Sidebar Column ======== */}
        {/* This column has a fixed width and contains the sticky sidebar */}
        <aside className="hidden lg:block lg:w-60 lg:flex-shrink-0">
          {/* This inner div is what becomes sticky */}
          <div className="lg:sticky lg:top-0">
            <TinRegistrationSidebar
              currentStep={currentStep}
              stepTitles={stepTitles}
              completedSteps={completedSteps}
            />
          </div>
        </aside>

        {/* ======== Main Content & Footer Column ======== */}
        {/* This column takes the remaining space and contains all scrolling content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Main content area */}
          <main className="flex-grow">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
              <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <Button
                    onClick={handleBackClick}
                    variant="ghost"
                    className="flex items-center gap-2 text-[#080A3C] hover:bg-[#080A3C] hover:text-white font-poppins order-1 sm:order-none"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="hidden xs:inline">Back to Home</span>
                    <span className="xs:hidden">Back</span>
                  </Button>
                  <div className="flex-1 min-w-0 sm:text-left text-center">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#080A3C] font-poppins leading-tight">
                      TIN Registration Application
                    </h1>
                    <p className="text-sm sm:text-base text-[#080A3C]/70 font-poppins mt-1">
                      <span className="block sm:inline">
                        Step {currentStep} of {totalSteps}:{" "}
                        {stepTitles[currentStep - 1]}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Progress Bar - Mobile only */}
            <div className="bg-white border-b lg:hidden">
              <StepProgress
                currentStep={currentStep}
                totalSteps={totalSteps}
                stepTitles={stepTitles}
              />
            </div>

            {/* Form Card */}
            <div className="max-w-4xl mx-auto px-4 py-4 sm:py-6">
              <Card>
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-lg sm:text-xl text-[#080A3C] font-poppins">
                    {stepTitles[currentStep - 1]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {renderStep()}

                  {/* Navigation */}
                  <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 mt-6 border-t">
                    <Button
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      variant="outline"
                      className="flex items-center justify-center gap-2 border-[#080A3C] text-[#080A3C] hover:bg-[#080A3C] hover:text-white font-poppins order-2 sm:order-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous
                    </Button>

                    {currentStep < totalSteps ? (
                      <Button
                        onClick={nextStep}
                        className="bg-[#FF612F] hover:bg-[#FF612F]/90 text-white flex items-center justify-center gap-2 font-poppins order-1 sm:order-2"
                      >
                        Next
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        className="bg-[#080A3C] hover:bg-[#080A3C]/90 text-white font-poppins order-1 sm:order-2"
                        onClick={handleSubmit}
                      >
                        Submit Application
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>

          {/* Footer - Now part of the main content column */}
          <footer className="bg-[#080A3C] text-white py-6">
            <div className="max-w-6xl mx-auto px-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                simplebooks
              </h2>
              <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-8 md:gap-16 items-start">
                {/* Company Info */}
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    simplebooks helps small business owners and entrepreneurs
                    grow their businesses through financial consulting,
                    registrations and legal services. Backed by local knowledge
                    through our offices in Sri Lanka, Bangladesh and India, the
                    team of consultants are ready to help you every step of the
                    way.
                  </p>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <a
                        href="https://www.facebook.com/teamsimplebooks/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-4 w-4 text-[#080A3C]" />
                      </a>
                    </div>
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <a
                        href="https://www.instagram.com/teamsimplebooks/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-4 w-4 text-[#080A3C]" />
                      </a>
                    </div>
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <a
                        href="https://www.youtube.com/c/Simplebooks"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="h-4 w-4 text-[#080A3C]" />
                      </a>
                    </div>
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <a
                        href="https://www.whatsapp.com/channel/0029Vb7AGCL5a23w67Qh1U29"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4 text-[#080A3C]" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Sri Lanka Office */}
                <div>
                  <p className="text-sm text-gray-300">Simplebooks (Pvt) Ltd</p>
                  <p className="text-sm text-gray-300">
                    Millennium Tower (Kelly
                  </p>
                  <p className="text-sm text-gray-300">Felder Building),</p>
                  <p className="text-sm text-gray-300">
                    2nd Floor, 345 Galle Rd,
                  </p>
                  <p className="text-sm text-gray-300">Colombo 00300,</p>
                  <p className="text-sm text-gray-300">Sri Lanka.</p>
                  <p className="text-sm text-white font-medium mt-2">
                    0117 555 878
                  </p>
                </div>

                {/* Bangladesh Office */}
                <div>
                  <p className="text-sm text-gray-300">
                    REGUS – Dhaka, Crystal Palace,
                  </p>
                  <p className="text-sm text-gray-300">House 22, 3rd Floor,</p>
                  <p className="text-sm text-gray-300">Crystal Palace Road,</p>
                  <p className="text-sm text-gray-300">NO 140,</p>
                  <p className="text-sm text-gray-300">
                    Gulshan Ave, Gulshan-1,
                  </p>
                  <p className="text-sm text-gray-300">
                    Dhaka 1212, Bangladesh.
                  </p>
                  <p className="text-sm text-white font-medium mt-2">
                    +880-1312-329255
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Modals remain at the top level */}
      <SubmissionLoadingModal isOpen={loading} />
      <SubmissionResultDialog
        isOpen={showResultDialog}
        result={submissionResult}
        onClose={handleResultDialogClose}
        onConfirmSave={handleSaveData}
      />
      <SaveBeforeBackDialog
        isOpen={showSaveBeforeBackDialog}
        onSave={handleSaveAndGoBack}
        onDiscard={handleDiscardAndGoBack}
        onCancel={handleCancelSaveDialog}
      />

      {/* Floating Support Button */}
      <FloatingSupportButton />
    </div>
  );
};

export default TinRegistrationForm;
