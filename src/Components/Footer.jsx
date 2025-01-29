import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">AI Healthcare</h2>
          <p className="mt-3 text-gray-400">
            Revolutionizing healthcare with AI-driven diagnostics and personalized medicine recommendations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Services</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400">Contact Us</h3>
          <p className="mt-3 text-gray-400">Email: support@aihealthcare.com</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-orange-500"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-orange-500"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-orange-500"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-orange-500"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500">
        <p>© {new Date().getFullYear()} AI Healthcare. All rights reserved.</p>
        <p className="mt-1">Designed & Developed by <span className="text-orange-500">Harsh</span></p>
      </div>
    </footer>
  );
};

export default Footer;
