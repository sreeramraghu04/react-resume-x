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

  return (
    <div className="flex justify-center w-full overflow-auto p-2 sm:p-4">
      {/* Responsive container */}
      <div
        ref={ref}
        className="
          bg-white shadow-lg
          w-full max-w-[800px]  /* responsive width for screens */
          min-h-[80vh] md:min-h-[90vh]
          p-4 sm:p-6 md:p-8
          box-border
          rounded-lg
          print:w-[210mm] print:min-h-[297mm] print:p-[20mm]  /* A4 for PDF */
        "
      >
        <SelectedTemplate data={resumeData} />
      </div>
    </div>
  );
});

export default ResumePreview;
