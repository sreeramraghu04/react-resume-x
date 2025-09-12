import React, { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

const TemplateSelector = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    setResumeData({ ...resumeData, template: e.target.value });
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 rounded-lg mt-4 bg-white dark:bg-gray-800 shadow-md">
      {/* Heading */}
      <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 text-gray-800 dark:text-white">
        Choose Template
      </h2>

      {/* Dropdown */}
      <select
        value={resumeData.template}
        onChange={handleChange}
        className="w-full p-2 sm:p-3 md:p-4 border border-gray-300 dark:border-gray-600 rounded-md 
                   bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white
                   text-sm sm:text-base md:text-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="modern">Modern</option>
        <option value="classic">Classic</option>
        <option value="minimalist">Minimalist</option>
        <option value="creative">Creative</option>
      </select>
    </div>
  );
};

export default TemplateSelector;
