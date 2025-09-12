import React from "react";

const About = () => {
  return (
    <div className="py-12 mt-15">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          About This Project
        </h1>
        <p className="text-gray-700 mb-4">
          This Resume Builder is a portfolio project built just using{" "}
          <span className="font-semibold">React, Tailwind CSS</span>. It allows
          users to build resumes step by step, choose from multiple templates,
          and download their resume as a PDF.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            Multi-step resume form (Personal Info, Education, Skills, Projects,
            etc.)
          </li>
          <li>Multiple professional templates</li>
          <li>One-click PDF download</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Me</h2>
        <p className="text-gray-700">
          Hi 👋 I'm <span className="font-semibold">Your Sreeram</span>, a{" "}
          <span className="font-semibold">MERN stack developer</span> passionate
          about building interactive web apps. I created this project to
          showcase my frontend skills and to help job seekers create
          professional resumes quickly.
        </p>
      </div>
    </div>
  );
};

export default About;
