import React from "react";
import { steps } from "./steps/steps";

const Stepper = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => {
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;

        return (
          <div
            key={step.id}
            onClick={() => setCurrentStep(step.id)}
            className="flex-1 flex items-center cursor-pointer"
          >
            {/* Step circle + title */}
            <div className="flex flex-col items-center mt-2">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 
                ${
                  isActive
                    ? "bg-blue-600 text-white scale-110 shadow-md"
                    : isCompleted
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-xs mt-2 font-medium transition-colors duration-300 ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {step.title}
              </span>
            </div>

            {/* Progress line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-2 relative">
                <div className="absolute top-0 left-0 h-1 w-full bg-gray-300 rounded"></div>
                <div
                  className={`absolute top-0 left-0 h-1 rounded transition-all duration-500 ${
                    isCompleted ? "bg-blue-600 w-full" : "w-0"
                  }`}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
