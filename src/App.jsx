import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ResumeBuilder from "./pages/ResumeBuilder";
import { ResumeProvider } from "./context/ResumeContext";

const App = () => {
  return (
    <Router>
      <ResumeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resumebuilder" element={<ResumeBuilder />} />
          </Routes>
        </Layout>
      </ResumeProvider>
    </Router>
  );
};

export default App;
