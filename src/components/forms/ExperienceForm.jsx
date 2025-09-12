import React, { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const ExperienceForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, field, value) => {
    const updated = [...resumeData.experience];
    updated[index][field] = value;
    setResumeData({ ...resumeData, experience: updated });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { role: "", company: "", duration: "", description: "" }],
    });
  };

  const removeExperience = (index) => {
    const updated = resumeData.experience.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, experience: updated });
  };

  return (
    <div className="p-4 rounded-xl mt-4">
      <h2 className="text-lg font-semibold">Experience</h2>
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="space-y-2 mt-3 border-b pb-3">
          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            onChange={(e) => handleChange(index, "role", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Duration"
            value={exp.duration}
            onChange={(e) => handleChange(index, "duration", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Description"
            value={exp.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={() => removeExperience(index)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addExperience}
        className="mt-3 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
