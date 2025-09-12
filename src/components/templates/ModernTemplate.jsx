import React from "react";

const ModernTemplate = ({ data }) => {
  // Use optional chaining and fallback values
  const resume = {
    name: data?.name || "Your Name",
    title: data?.title || "Job Role",
    email: data?.email || "your.emailid@example.com",
    phone: data?.phone || "+91 xxxx xxxx",
    summary:
      data?.summary ||
      "about yourself.",
    education: data?.education ?? [], // ✅ empty array if undefined
    experience: data?.experience ?? [], // ✅
    skills: data?.skills ?? [], // ✅
    projects: data?.projects ?? [], // ✅
  };

  return (
    <div className="p-8 bg-white text-black rounded-lg shadow-md">
      {/* Header */}
      <header className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">{resume.name}</h1>
        <p className="text-lg text-gray-700">{resume.title}</p>
        <p className="text-sm text-gray-600 mt-2">
          {resume.email} | {resume.phone}
        </p>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Summary</h2>
        <p className="text-gray-800">{resume.summary}</p>
      </section>

      {/* Education */}
      {resume.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">
            Education
          </h2>
          {resume.education.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-medium">{edu.degree}</p>
              <p className="text-sm text-gray-700">
                {edu.school} • {edu.year}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {resume.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">
            Experience
          </h2>
          {resume.experience.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <p className="font-medium">
                {exp.role} - {exp.company}
              </p>
              <p className="text-sm text-gray-700">{exp.duration}</p>
              {exp.details && exp.details.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-gray-800">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {resume.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resume.projects.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projects</h2>
          {resume.projects.map((proj, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-medium">{proj.name}</p>
              <p className="text-sm text-gray-700">{proj.description}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ModernTemplate;
