import React, { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

const PersonalInfoForm = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-bold">Personal Information</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={resumeData.name || ""}
        onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        placeholder="Email"
        value={resumeData.email || ""}
        onChange={(e) =>
          setResumeData({ ...resumeData, email: e.target.value })
        }
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Phone"
        value={resumeData.phone || ""}
        onChange={(e) =>
          setResumeData({ ...resumeData, phone: e.target.value })
        }
        className="w-full p-2 border rounded"
      />

      <textarea
        placeholder="Professional Summary"
        value={resumeData.summary || ""}
        onChange={(e) =>
          setResumeData({ ...resumeData, summary: e.target.value })
        }
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default PersonalInfoForm;
