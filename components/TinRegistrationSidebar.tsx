import React from "react";
import { Check, Phone, MessageCircle, Mail } from "lucide-react";

interface TinRegistrationSidebarProps {
  currentStep: number;
  stepTitles: string[];
  completedSteps: number[];
}

const TinRegistrationSidebar = ({
  currentStep,
  stepTitles,
  completedSteps,
}: TinRegistrationSidebarProps) => {
  const isStepCompleted = (stepNumber: number) => {
    return completedSteps.includes(stepNumber);
  };

  const isStepCurrent = (stepNumber: number) => {
    return stepNumber === currentStep;
  };

  return (
    <div className="w-70 h-screen fixed left-0 top-0 bg-[#080A3C] border-r border-gray-700 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="bg-white rounded-lg p-2 flex justify-center items-center">
          <h3 className="text-[#080A3C] font-black text-xl">simplebooks</h3>
        </div>
      </div>

      {/* Steps - Scrollable if needed */}
      <div className="flex-1 p-6 pb-0 overflow-y-auto">
        <div className="space-y-2">
          {stepTitles.map((title, index) => {
            const stepNumber = index + 1;
            const isCompleted = isStepCompleted(stepNumber);
            const isCurrent = isStepCurrent(stepNumber);

            return (
              <div
                key={stepNumber}
                className={`flex items-start gap-3 p-2.5 rounded-lg transition-all duration-200 ${
                  isCurrent
                    ? "bg-white/10 border border-white/20 shadow-sm"
                    : isCompleted
                    ? "bg-green-500/10 border border-green-500/20"
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                {/* Step indicator */}
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all flex-shrink-0 ${
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isCurrent
                      ? "bg-[#FF612F] text-white"
                      : "bg-gray-600 text-gray-300"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                </div>

                {/* Step title */}
                <div className="flex-1 min-w-0">
                  <h4
                    className={`text-sm font-medium leading-tight ${
                      isCurrent
                        ? "text-white"
                        : isCompleted
                        ? "text-green-400"
                        : "text-gray-300"
                    }`}
                  >
                    {title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expert Support Section - Always visible at bottom */}
      <div className="p-6 border-t border-gray-700 bg-[#080A3C]">
        <div className="text-center">
          <h4 className="text-sm font-semibold text-white mb-3">
            Need an Expert Support?
          </h4>
        </div>

        <div className="space-y-2">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+94772705624"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 rounded-lg bg-white/10 border border-white/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-200 group"
          >
            <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-green-400">
              WhatsApp
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:taxteam@simplebooks.com"
            className="flex items-center gap-3 p-2.5 rounded-lg bg-white/10 border border-white/20 hover:bg-[#FF612F]/20 hover:border-[#FF612F]/40 transition-all duration-200 group"
          >
            <div className="w-7 h-7 bg-[#FF612F] rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-[#FF612F]">
              Email Us
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+94772705624"
            className="flex items-center gap-3 p-2.5 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-200 group"
          >
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="h-3.5 w-3.5 text-[#080A3C]" />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white">
              Call Us
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TinRegistrationSidebar;
