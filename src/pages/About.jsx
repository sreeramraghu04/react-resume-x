import React from "react";
import Link from "react-router-dom";

const About = () => {
  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
          About This Project
        </h1>
        <p className="text-gray-700 mb-4 md:mb-6 text-base sm:text-lg">
          This Resume Builder is a portfolio project built just using{" "}
          <span className="font-semibold text-blue-600">React</span> and{" "}
          <span className="font-semibold text-purple-600">Tailwind CSS</span>.
          It allows users to build resumes step by step, choose from multiple
          templates, and download their resume as a PDF.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 md:mb-4 mt-6 md:mt-8">
          Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4 md:mb-6 space-y-2 text-base sm:text-lg">
          <li className="pl-2">
            Multi-step resume form (Personal Info, Education, Skills, Projects,
            etc.)
          </li>
          <li className="pl-2">Multiple professional templates</li>
          <li className="pl-2">One-click PDF download</li>
          <li className="pl-2">Responsive design that works on all devices</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 md:mb-4 mt-6 md:mt-8">
          About Me
        </h2>
        <p className="text-gray-700 text-base sm:text-lg">
          Hi 👋 I'm <span className="font-semibold text-blue-600">Sreeram</span>
          , a{" "}
          <span className="font-semibold text-purple-600">
            MERN stack developer
          </span>{" "}
          passionate about building interactive web apps. I created this project
          to showcase my frontend skills and to help job seekers create
          professional resumes quickly.
        </p>

        {/* Optional: Add a call-to-action or link */}
        <div className="mt-8 md:mt-10 pt-6 border-t border-gray-100">
          <p className="text-gray-600 text-sm md:text-base">
            Ready to create your resume?{" "}
            <Link>
              to="/resumebuilder"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Get started here →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
