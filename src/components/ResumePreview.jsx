import React, { useContext, forwardRef } from "react";
import { ResumeContext } from "../context/ResumeContext";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import MinimalistTemplate from "./templates/MinimalistTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";

const ResumePreview = forwardRef((props, ref) => {
  const { resumeData } = useContext(ResumeContext);

  let SelectedTemplate;
  switch (resumeData.template) {
    case "classic":
      SelectedTemplate = ClassicTemplate;
      break;
    case "minimalist":
      SelectedTemplate = MinimalistTemplate;
      break;
    case "creative":
      SelectedTemplate = CreativeTemplate;
      break;
    default:
      SelectedTemplate = ModernTemplate;
  }

  // resume content wrapped in ref for printing
  return (
    <div ref={ref} className="p-6">
      <SelectedTemplate data={resumeData} />
    </div>
  );
});

export default ResumePreview;
