import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Domains", "Internships", "Contact"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300
      backdrop-blur-lg bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-cyan-600/30
      border-b border-white/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1
          className="text-2xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-cyan-300 via-pink-300 to-yellow-300 tracking-tight cursor-pointer
          transform transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        >
          Internship Hub
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-medium text-white">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition"
              >
                <span className="transition duration-200 group-hover:text-cyan-300">
                  {item}
                </span>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-cyan-300 to-pink-300 transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul
          className="flex flex-col gap-4 text-lg font-medium p-6
          bg-gradient-to-b from-indigo-900/60 via-purple-900/60 to-cyan-900/60
          backdrop-blur-xl border-t border-white/20 text-white"
        >
          {navItems.map((item, index) => (
            <li
              key={item}
              className={`transition-all duration-500 delay-[${index * 100}ms] ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="block w-full hover:text-cyan-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
