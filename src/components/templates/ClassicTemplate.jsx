import React from "react";

const ClassicTemplate = ({ data }) => {
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
    <div className="p-10 bg-white text-black font-serif border border-gray-400">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">{resume.name}</h1>
        <p className="text-lg">{resume.title}</p>
        <p className="text-sm text-gray-600">
          {resume.email} | {resume.phone}
        </p>
      </header>

      {resume.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b mb-2">Profile</h2>
          <p>{resume.summary}</p>
        </section>
      )}

      {resume.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b mb-2">
            Education
          </h2>
          {resume.education.map((edu, idx) => (
            <p key={idx}>
              <span className="font-semibold">{edu.degree}</span> — {edu.school}{" "}
              ({edu.year})
            </p>
          ))}
        </section>
      )}

      {resume.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b mb-2">
            Experience
          </h2>
          {resume.experience.map((exp, idx) => (
            <div key={idx} className="mb-3">
              <p className="font-semibold">
                {exp.role}, {exp.company} ({exp.duration})
              </p>
              {exp.details && (
                <ul className="list-disc list-inside ml-4">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {resume.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b mb-2">Skills</h2>
          <p>{resume.skills.join(", ")}</p>
        </section>
      )}

      {resume.projects.length > 0 && (
        <section>
          <h2 className="text-lg font-bold uppercase border-b mb-2">
            Projects
          </h2>
          {resume.projects.map((proj, idx) => (
            <p key={idx}>
              <span className="font-semibold">{proj.name}:</span>{" "}
              {proj.description}
            </p>
          ))}
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
