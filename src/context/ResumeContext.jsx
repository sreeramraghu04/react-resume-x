import React, { createContext, useState } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: [
      {
        degree: "",
        school: "",
        year: "",
      },
    ],
    experience: [
      {
        role: "",
        company: "",
        duration: "",
        details: [],
      },
    ],
    skills: [],
    projects: [
      {
        name: "",
        description: "",
      },
    ],
    template: "modern", // default template
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};
