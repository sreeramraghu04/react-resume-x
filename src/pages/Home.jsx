import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-10 md:py-14 lg:py-16 mt-4 md:mt-8 lg:mt-10">
      {/* Hero Section */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 md:mb-5">
        Build Your Resume in Minutes 🚀
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-4">
        Create a professional, ATS-friendly resume using multiple templates,
        expert-crafted summaries, and one-click PDF downloads.
      </p>

      {/* CTA Button */}
      <Link
        to="/resumebuilder"
        className="px-5 py-2.5 sm:px-6 sm:py-3 bg-blue-600 text-white text-base sm:text-lg rounded-lg shadow hover:bg-blue-700 transition"
      >
        Get Started
      </Link>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-12 md:mt-14 lg:mt-16 max-w-5xl w-full px-4 sm:px-6">
        <div className="p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <span className="text-blue-600 text-xl">🎨</span>
            </div>
            <h3 className="font-bold text-base md:text-lg text-gray-800">
              Multiple Templates
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Choose from modern, classic, minimalist, and creative designs.
          </p>
        </div>
        <div className="p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <span className="text-blue-600 text-xl">💡</span>
            </div>
            <h3 className="font-bold text-base md:text-lg text-gray-800">
              Professional Tips
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Get suggestions for professional resume summaries and content.
          </p>
        </div>
        <div className="p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <span className="text-blue-600 text-xl">📥</span>
            </div>
            <h3 className="font-bold text-base md:text-lg text-gray-800">
              Easy Download
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Export your resume as a PDF and save it directly to your computer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
