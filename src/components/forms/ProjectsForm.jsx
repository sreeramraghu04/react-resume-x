import React, { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

const ProjectsForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = (index, field, value) => {
    const updated = [...resumeData.projects];
    updated[index][field] = value;
    setResumeData({ ...resumeData, projects: updated });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, { title: "", description: "", link: "" }],
    });
  };

  const removeProject = (index) => {
    const updated = resumeData.projects.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, projects: updated });
  };

  return (
    <div className="p-4 rounded-xl mt-4">
      <h2 className="text-lg font-semibold">Projects</h2>
      {resumeData.projects.map((proj, index) => (
        <div key={index} className="space-y-2 mt-3 border-b pb-3">
          <input
            type="text"
            placeholder="Title"
            value={proj.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Description"
            value={proj.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Link (GitHub / Demo)"
            value={proj.link}
            onChange={(e) => handleChange(index, "link", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={() => removeProject(index)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addProject}
        className="mt-3 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Project
      </button>
    </div>
  );
};

export default ProjectsForm;
