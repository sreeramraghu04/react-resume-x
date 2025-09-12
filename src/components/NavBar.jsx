import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 transition-colors ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 dark:text-gray-200"
    }`;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            Resume Builder
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/resumebuilder" className={navLinkClasses}>
              Build a Resume?
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="focus:outline-none"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white dark:bg-gray-800 transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 py-2" : "max-h-0"
        }`}
      >
        <NavLink
          to="/"
          className={navLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/resumebuilder"
          className={navLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          Resume Builder
        </NavLink>
        <NavLink
          to="/about"
          className={navLinkClasses}
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
