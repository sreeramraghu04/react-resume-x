import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
