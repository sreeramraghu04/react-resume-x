import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ResumePreview from "./ResumePreview";

const DownloadButton = () => {
  const resumeRef = useRef();

  const handleDownload = useReactToPrint({
    contentRef: resumeRef, // ✅ new way for forwardRef components
    documentTitle: "your.name_resume",
  });

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {/* This is the resume that gets printed */}
      <ResumePreview ref={resumeRef} />

      {/* Button to download */}
      <button
        onClick={handleDownload}
        className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default DownloadButton;
