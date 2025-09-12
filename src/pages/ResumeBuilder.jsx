import React, { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import EducationForm from "../components/forms/EducationForm";
import ExperienceForm from "../components/forms/ExperienceForm";
import ProjectsForm from "../components/forms/ProjectsForm";
import SkillsForm from "../components/forms/SkillsForm";
import ResumePreview from "../components/ResumePreview";
import TemplateSelector from "../components/TemplateSelector";
import DownloadButton from "../components/DownloadButton";
import Stepper from "../components/Stepper";
import { steps } from "../components/steps/steps";

const ResumeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ResumeForm />;
      case 2:
        return <EducationForm />;
      case 3:
        return <ExperienceForm />;
      case 4:
        return <SkillsForm />;
      case 5:
        return <ProjectsForm />;
      case 6:
        return (
          <div className="space-y-4">
            <TemplateSelector />
            <DownloadButton />
            <ResumePreview />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {/* Progress bar */}
      <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />

      {/* Step Content */}
      <div className="bg-gradient-to-br from-blue-100 to-indigo-50 p-6 rounded-xl shadow-md">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {/* Back button only after step 1 */}
        {currentStep > 1 && (
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700"
          >
            Back
          </button>
        )}

        {/* Next until the last step */}
        {currentStep < steps.length && (
          <button
            onClick={() => setCurrentStep((prev) => prev + 1)}
            className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 ${
              currentStep === 1 ? "ml-auto" : ""
            }`}
          >
            Next
          </button>
        )}

        {/* Finish on last step */}
        {currentStep === steps.length && (
          <button
            onClick={() =>
              document
                .getElementById("resume-preview-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="ml-auto px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
