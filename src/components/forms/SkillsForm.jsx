import React, { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const SkillsForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [input, setInput] = useState("");

  const addSkill = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, input.trim()],
      });
      setInput("");
    }
  };

  const removeSkill = (index) => {
    const updated = resumeData.skills.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, skills: updated });
  };

  return (
    <div className="p-4 rounded-xl mt-4">
      <h2 className="text-lg font-semibold">Skills</h2>

      {/* Input field */}
      <form onSubmit={addSkill} className="flex gap-2 mt-3">
        <input
          type="text"
          placeholder="Add a skill"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {resumeData.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2"
          >
            {skill}
            <button
              onClick={() => removeSkill(index)}
              className="text-red-500 hover:text-red-700 text-xs"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;
