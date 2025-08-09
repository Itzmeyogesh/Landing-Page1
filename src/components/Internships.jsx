import React from 'react';
import { FaLaptopCode, FaBrain, FaJava, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const internshipData = [
  {
    title: "Full-Stack Web Development",
    duration: "6 Weeks",
    tools: "HTML, CSS, JS, React, Node.js",
    icon: <FaLaptopCode className="text-3xl text-indigo-600" />,
  },
  {
    title: "AI & Machine Learning",
    duration: "8 Weeks",
    tools: "Python, TensorFlow, Scikit-learn",
    icon: <FaBrain className="text-3xl text-indigo-600" />,
  },
  {
    title: "Java Development",
    duration: "6 Weeks",
    tools: "Core Java, OOP, JDBC, Spring Boot",
    icon: <FaJava className="text-3xl text-indigo-600" />,
  },
  {
    title: "Power BI & Data Analytics",
    duration: "4 Weeks",
    tools: "Power BI, Excel, DAX, SQL",
    icon: <FaChartBar className="text-3xl text-indigo-600" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, type: 'spring' },
  }),
};

const Internships = () => {
  return (
    <section id="internships" className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 text-indigo-900"
      >
        Our Internship Programs
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {internshipData.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 12px 24px rgba(79, 70, 229, 0.15)',
            }}
            className="p-6 bg-white rounded-xl shadow transition border border-indigo-100 relative overflow-hidden group"
          >
            {/* Glow Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-indigo-800">{item.title}</h3>
              </div>
              <p className="text-gray-700 mb-1">
                <strong>Duration:</strong> {item.duration}
              </p>
              <p className="text-gray-700">
                <strong>Tools:</strong> {item.tools}
              </p>

              {/* Apply Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition font-medium shadow"
              >
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
