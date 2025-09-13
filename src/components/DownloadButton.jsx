/* import React, { useRef } from "react";
import ResumePreview from "./ResumePreview";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadButton = () => {
  const resumeRef = useRef();

  const handleDownload = async () => {
    const element = resumeRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      let heightLeft = pdfHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= 297;

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= 297;
      }

      pdf.save("resume.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Check console for details.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div ref={resumeRef}>
        <ResumePreview />
      </div>

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
 */

import React, { useRef } from "react";
import ResumePreview from "./ResumePreview";
import html2pdf from "html2pdf.js";

const DownloadButton = () => {
  const resumeRef = useRef();

  const handleDownload = () => {
    const element = resumeRef.current;
    if (!element) return;

    const opt = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6 px-2">
      {/* Responsive wrapper */}
      <div
        ref={resumeRef}
        className="
          w-full 
          max-w-[800px]  
          overflow-auto
          rounded-lg 
          p-4 sm:p-6 md:p-2
        "
        style={{
          minHeight: "auto", // let height adjust on mobile
          height: "auto", // automatic height for small screens
          boxSizing: "border-box",
        }}
      >
        <ResumePreview />
      </div>

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
