import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-14 mt-10">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
        Build Your Resume in Minutes 🚀
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
        Create a professional, ATS-friendly resume using multiple templates,
        expert-crafted summaries, and one-click PDF downloads.
      </p>

      {/* CTA Button */}
      <Link
        to="/resumebuilder"
        className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition"
      >
        Get Started
      </Link>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl">
        <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <span className="text-blue-600 text-xl">🎨</span>
            </div>
            <h3 className="font-bold text-lg text-gray-800">
              Multiple Templates
            </h3>
          </div>
          <p className="text-gray-600">
            Choose from modern, classic, minimalist, and creative designs.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <span className="text-blue-600 text-xl">💡</span>
            </div>
            <h3 className="font-bold text-lg text-gray-800">
              Professional Tips
            </h3>
          </div>
          <p className="text-gray-600">
            Get suggestions for professional resume summaries and content.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <span className="text-blue-600 text-xl">📥</span>
            </div>
            <h3 className="font-bold text-lg text-gray-800">Easy Download</h3>
          </div>
          <p className="text-gray-600">
            Export your resume as a PDF and save it directly to your computer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
