import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-black/80">
      <div className="container px-4 mx-auto relative flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <span className="text-xl font-bold text-orange-700">CareTrack</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex ml-14 space-x-8 text-white">
          <NavLink to="/" className="hover:text-orange-500 transition-all">HOME</NavLink>
          <NavLink to="/about" className="hover:text-orange-500 transition-all">ABOUT</NavLink>
          <NavLink to="/services" className="hover:text-orange-500 transition-all">SERVICES</NavLink>
          <NavLink to="/dashboard" className="hover:text-orange-500 transition-all">DASHBOARD</NavLink>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-4 items-center">
          <NavLink to="/login" className="py-2 px-3 border rounded-md text-white">Sign In</NavLink>
          <NavLink to="/signup" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white">
            Create an account
          </NavLink>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="lg:hidden text-3xl text-white" onClick={toggleNavbar} aria-label="Toggle Menu">
          {mobileDrawerOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center transform transition-transform duration-300 ${
            mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <NavLink to="/" onClick={toggleNavbar} className="text-white text-xl py-3">HOME</NavLink>
          <NavLink to="/about" onClick={toggleNavbar} className="text-white text-xl py-3">ABOUT</NavLink>
          <NavLink to="/services" onClick={toggleNavbar} className="text-white text-xl py-3">SERVICES</NavLink>
          <NavLink to="/dashboard" onClick={toggleNavbar} className="text-white text-xl py-3">DASHBOARD</NavLink>
          <NavLink to="/login" className="py-2 px-6 border rounded-md text-white mt-4" onClick={toggleNavbar}>Sign In</NavLink>
          <NavLink to="/signup" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-6 rounded-md text-white mt-4" onClick={toggleNavbar}>Create an account</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
