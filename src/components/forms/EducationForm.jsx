import React, { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const EducationForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, field, value) => {
    const updated = [...resumeData.education];
    updated[index][field] = value;
    setResumeData({ ...resumeData, education: updated });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { degree: "", school: "", year: "" }],
    });
  };

  const removeEducation = (index) => {
    const updated = resumeData.education.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, education: updated });
  };

  return (
    <div className="p-4 rounded-xl mt-4">
      <h2 className="text-lg font-semibold">Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="space-y-2 mt-3 border-b pb-3">
          <input
            type="text"
            placeholder="Batch / Degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, "degree", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="School / College"
            value={edu.school}
            onChange={(e) => handleChange(index, "school", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Passout Year"
            value={edu.year}
            onChange={(e) => handleChange(index, "year", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={() => removeEducation(index)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addEducation}
        className="mt-3 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Education
      </button>
    </div>
  );
};

export default EducationForm;
