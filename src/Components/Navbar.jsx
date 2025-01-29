import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight text-blue text-orange-700">CareTrack</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-8">
            <NavLink to="/" className="text-bold cursor-pointer hover:text-orange-500 transition-all duration-500">
              HOME
            </NavLink>
            <NavLink to="/about" className="text-bold cursor-pointer transition-all duration-500 hover:text-orange-600">
              ABOUT
            </NavLink>
            <NavLink to="/services" className="text-bold cursor-pointer">
              SERVICES
            </NavLink>
            <NavLink to="/dashboard" className="text-bold cursor-pointer">
              DASHBOARD
            </NavLink>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <NavLink to="/login" className="py-2 px-3 border rounded-md">
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </NavLink>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="lg:hidden text-2xl"
            onClick={toggleNavbar}
            aria-label="Toggle Menu"
          >
            {/* Add icon for mobile menu */}
          </button>

          {/* Mobile Navigation Drawer */}
          {mobileDrawerOpen && (
            <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center py-4 space-y-4 lg:hidden">
              <NavLink to="/" onClick={toggleNavbar}>
                HOME
              </NavLink>
              <NavLink to="/about" onClick={toggleNavbar}>
                ABOUT
              </NavLink>
              <NavLink to="/services" onClick={toggleNavbar}>
                SERVICES
              </NavLink>
              <NavLink to="/dashboard" onClick={toggleNavbar}>
                DASHBOARD
              </NavLink>
              <NavLink
                to="/login"
                className="py-2 px-3 border rounded-md text-center"
                onClick={toggleNavbar}
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-center"
                onClick={toggleNavbar}
              >
                Create an account
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;