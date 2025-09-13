import React from "react";

const MinimalistTemplate = ({ data }) => {
  const resume = {
    name: data?.name || "Your Name",
    title: data?.title || "Job Role",
    email: data?.email || "your.emailid@example.com",
    phone: data?.phone || "+91 xxxx xxxx",
    summary: data?.summary || "about yourself.",
    education: data?.education ?? [],
    experience: data?.experience ?? [],
    skills: data?.skills ?? [],
    projects: data?.projects ?? [],
  };

  return (
    <div className="p-6 bg-white text-black font-light tracking-wide">
      <h1 className="text-2xl font-bold">{resume.name}</h1>
      <p className="text-gray-600 mb-2">{resume.title}</p>
      <p className="text-sm text-gray-500 mb-6">
        {resume.email} | {resume.phone}
      </p>

      {resume.summary && <p className="mb-6">{resume.summary}</p>}

      {resume.education.length > 0 && (
        <section className="mb-4">
          <h2 className="font-semibold">Education</h2>
          {resume.education.map((edu, idx) => (
            <p key={idx}>
              {edu.degree}, {edu.school} ({edu.year})
            </p>
          ))}
        </section>
      )}

      {resume.experience.length > 0 && (
        <section className="mb-4">
          <h2 className="font-semibold">Experience</h2>
          {resume.experience.map((exp, idx) => (
            <div key={idx}>
              <p className="">
                {exp.role} @ {exp.company} ({exp.duration})
              </p>
            </div>
          ))}
        </section>
      )}

      {resume.skills.length > 0 && (
        <section className="mb-4">
          <h2 className="font-semibold">Skills</h2>
          <p>{resume.skills.join(" • ")}</p>
        </section>
      )}

      {resume.projects.length > 0 && (
        <section>
          <h2 className="font-semibold">Projects</h2>
          {resume.projects.map((proj, idx) => (
            <p key={idx}>
              {proj.name}: {proj.description}
            </p>
          ))}
        </section>
      )}
    </div>
  );
};

export default MinimalistTemplate;
