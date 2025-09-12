import React, { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

const TemplateSelector = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (e) => {
    setResumeData({ ...resumeData, template: e.target.value });
  };

  return (
    <div className="p-4 rounded-lg mt-4">
      <h2 className="text-lg font-semibold mb-2">Choose Template</h2>
      <select
        value={resumeData.template}
        onChange={handleChange}
        className="w-full p-4 border rounded-md bg-gray-600 dark:text-white"
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
