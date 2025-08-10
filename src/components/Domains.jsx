import React from 'react';
import {
  FaCode,
  FaDatabase,
  FaRobot,
  FaShieldAlt,
  FaCloud,
  FaCube
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const domains = [
  { name: "Web Development", icon: <FaCode /> },
  { name: "Data Science", icon: <FaDatabase /> },
  { name: "AI / ML", icon: <FaRobot /> },
  { name: "Power BI", icon: <FaShieldAlt /> },
  { name: "Java Full Stack", icon: <FaCloud /> },
  { name: "Blockchain", icon: <FaCube /> },
];

const Domains = () => {
  return (
    <section
      id="domains"
      className="relative py-28 px-6 text-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 animate-gradient-x"></div>

      {/* Floating Blobs */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wide mb-14 hover:scale-105 transition-transform duration-300"
      >
        🚀 Explore Our Internship Domains
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10">
        {domains.map((domain, i) => (
          <motion.div
            key={i}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group transform hover:scale-105 transition-all duration-300"
          >
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-transparent hover:border-pink-500 transition-all duration-300 relative overflow-hidden">
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-2xl"></div>

              {/* Icon */}
              <div className="relative z-10 flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-4xl mb-5 shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300">
                {domain.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-indigo-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                {domain.name}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                Work on real-world projects, learn top tools, and build strong foundations with expert guidance.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) }
            50% { transform: translateY(-20px) }
          }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float 8s ease-in-out infinite;
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 15s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Domains;
