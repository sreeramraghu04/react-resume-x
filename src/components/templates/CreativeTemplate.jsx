import React from "react";

const CreativeTemplate = ({ data }) => {
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
    <div className="p-8 bg-gradient-to-br from-purple-100 to-blue-100 text-black rounded-xl shadow-lg">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-purple-700">
          {resume.name}
        </h1>
        <p className="text-lg text-gray-700">{resume.title}</p>
        <p className="text-sm text-gray-600">
          {resume.email} | {resume.phone}
        </p>
      </header>

      {resume.summary && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-purple-800 mb-2">
            About Me
          </h2>
          <p>{resume.summary}</p>
        </section>
      )}

      {resume.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-purple-800 mb-2">
            Education
          </h2>
          {resume.education.map((edu, idx) => (
            <p key={idx} className="mb-1">
              {edu.degree} — {edu.school} ({edu.year})
            </p>
          ))}
        </section>
      )}

      {resume.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-purple-800 mb-2">Work</h2>
          {resume.experience.map((exp, idx) => (
            <div key={idx} className="mb-3">
              <p className="font-medium">
                {exp.role} at {exp.company} ({exp.duration})
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
          <h2 className="text-xl font-semibold text-purple-800 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((s, i) => (
              <span
                key={i}
                className="px-3 py-3 bg-purple-200 text-purple-900 rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      )}

      {resume.projects.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-purple-800 mb-2">
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

export default CreativeTemplate;
