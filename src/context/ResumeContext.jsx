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
    template: "modern",
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};

/* import React, { createContext, useState } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    template: "modern",
    name: "John Doe",
    title: "Frontend Developer",
    email: "john@example.com",
    phone: "+123456789",
    skills: ["React", "JS", "CSS"],
    experience: [{ company: "ABC Corp", role: "Developer", duration: "2 years" }],
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}; */
