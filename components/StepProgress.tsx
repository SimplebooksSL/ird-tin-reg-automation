import React from "react";
import { Check } from "lucide-react";

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

const StepProgress = ({
  currentStep,
  totalSteps,
  stepTitles,
}: StepProgressProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 sm:py-6">
      {/* ======================================================================
        MOBILE VIEW (screens smaller than `md`)
        - A single, compact row.
        - Titles are hidden to save space.
        - Connecting lines are solid.
        ======================================================================
      */}
      <div className="flex items-center justify-between md:hidden">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isLast = stepNumber === totalSteps;

          return (
            <React.Fragment key={stepNumber}>
              {/* Step Circle */}
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-300 z-10
                  ${
                    isCompleted
                      ? "bg-[#FF612F] border-[#FF612F] text-white"
                      : isCurrent
                      ? "bg-[#080A3C] border-[#080A3C] text-white"
                      : "bg-white border-gray-300 text-gray-500"
                  }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span>{stepNumber}</span>
                )}
              </div>

              {/* Flexible Connecting Line (solid for mobile) */}
              {!isLast && (
                <div className="flex-1 h-0.5 mx-1">
                  {" "}
                  {/* Adjusted margin for closer lines */}
                  <div
                    className={`h-full transition-all duration-500 ease-in-out ${
                      isCompleted ? "bg-[#FF612F]" : "bg-gray-300"
                    }`}
                  ></div>{" "}
                  {/* Solid line */}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* ======================================================================
        DESKTOP VIEW (`md` screens and larger)
        - This is your original layout, preserved exactly as requested.
        - It is hidden on mobile and becomes visible on larger screens.
        ======================================================================
      */}
      <div className="hidden md:block">
        {/* Row 1: Step Balls and Connecting Lines */}
        <div className="flex items-center justify-center">
          <div className="flex items-center relative">
            {Array.from({ length: totalSteps }, (_, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;
              const isLast = stepNumber === totalSteps;

              return (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-300 relative z-10
                    ${
                      isCompleted
                        ? "bg-[#FF612F] border-[#FF612F] text-white"
                        : isCurrent
                        ? "bg-[#080A3C] border-[#080A3C] text-white"
                        : "bg-white border-gray-300 text-gray-500"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span>{stepNumber}</span>
                    )}
                  </div>

                  {!isLast && (
                    <div className="w-16 lg:w-20 h-0.5 mx-2">
                      <div
                        className={`h-full transition-all duration-500 ease-in-out ${
                          isCompleted
                            ? "bg-[#FF612F]"
                            : "border-t-2 border-dashed border-gray-300"
                        }`}
                      ></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Step Titles */}
        <div className="flex justify-center mt-3 lg:mt-4">
          <div className="flex items-center relative">
            {Array.from({ length: totalSteps }, (_, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;
              const isLast = stepNumber === totalSteps;

              return (
                <div key={stepNumber} className="flex items-center">
                  <div className="w-10 flex justify-center">
                    <span
                      className={`text-xs font-medium transition-colors duration-300 text-center whitespace-nowrap ${
                        isCompleted || isCurrent
                          ? "text-[#080A3C]"
                          : "text-gray-500"
                      }`}
                    >
                      {stepTitles[index]}
                    </span>
                  </div>
                  {!isLast && <div className="w-16 lg:w-20 mx-2"></div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepProgress;
