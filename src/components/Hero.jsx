import React from 'react';
import { FaRocket, FaSearch, FaChevronDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 flex flex-col justify-center items-center text-center px-6 overflow-hidden font-sans"
    >
      {/* Background bubble animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-64 h-64 bg-indigo-300 rounded-full opacity-30 blur-3xl top-12 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-cyan-200 rounded-full opacity-30 blur-2xl bottom-0 right-0 animate-pulse delay-200"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-4xl w-full"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-900 mb-6 flex justify-center items-center gap-3 tracking-tight">
          <FaRocket className="text-indigo-600 animate-bounce" />
          <TypeAnimation
            sequence={[
              "Empowering Future Professionals",
              2000,
              "Building Real Skills for Real Careers",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline"
          />
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-8 max-w-2xl mx-auto leading-relaxed">
          Launch your career with online internships in Web Development, AI/ML, Java, Power BI, and more.
          Learn from experts, build real projects, and earn valuable certifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#internships"
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:brightness-110 transition text-sm sm:text-base"
          >
            🚀 Apply Now
          </a>
          <a
            href="#domains"
            className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-indigo-50 transition text-sm sm:text-base"
          >
            🔍 Explore Domains
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-12 text-indigo-600 text-xl"
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;
