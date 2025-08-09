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
  {
    name: "Web Development",
    icon: <FaCode className="text-5xl text-indigo-600 mb-4 animate-pulse" />,
  },
  {
    name: "Data Science",
    icon: <FaDatabase className="text-5xl text-indigo-600 mb-4 animate-pulse" />,
  },
  {
    name: "AI / ML",
    icon: <FaRobot className="text-5xl text-indigo-600 mb-4 animate-pulse" />,
  },
  {
    name: "Cybersecurity",
    icon: <FaShieldAlt className="text-5xl text-indigo-600 mb-4 animate-pulse" />,
  },
  {
    name: "Cloud Computing",
    icon: <FaCloud className="text-5xl text-indigo-600 mb-4 animate-pulse" />,
  },
  {
    name: "Blockchain",
    icon: <FaCube className="text-5xl text-indigo-600 mb-4 animate-pulse" />,
  },
];

const Domains = () => {
  return (
    <section
      id="domains"
      className="py-28 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100 text-center relative overflow-hidden"
    >
      {/* Background visuals */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-300 rounded-full blur-2xl opacity-20 -z-10 animate-pulse delay-150"></div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-12"
      >
        🚀 Explore Our Internship Domains
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {domains.map((domain, i) => (
          <motion.div
            key={i}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-transparent hover:border-indigo-400 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                {domain.icon}
                <h3 className="text-xl font-bold text-indigo-800 mb-3 tracking-wide">
                  {domain.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Work on real-world projects, learn top tools, and build strong foundations in this domain with expert guidance.
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Domains;
