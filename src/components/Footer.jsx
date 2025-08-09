import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import logo from '../assets/Logo.jpg'; // ✅ Replace with your actual logo path

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-6 relative text-center px-4">
      {/* Logo and Tagline */}
      <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:justify-center md:items-center gap-4 mb-4">
        <img src={logo} alt="Technical One Logo" className="w-10 h-10" />
        <p className="text-sm md:text-base">
          Made with 💡 by <span className="font-semibold text-indigo-400">Technical One</span>
        </p>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Technical One. All rights reserved.
      </p>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-4 right-4 md:top-6 md:right-6 bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full shadow-md transition"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
