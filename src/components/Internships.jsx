import React, { useState } from 'react';
import { FaLaptopCode, FaBrain, FaJava, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const internshipData = [
  {
    title: "Full-Stack Web Development",
    duration: "6 Weeks",
    tools: "HTML, CSS, JS, React, Node.js",
    icon: <FaLaptopCode className="text-4xl text-indigo-500 group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    title: "AI & Machine Learning",
    duration: "8 Weeks",
    tools: "Python, TensorFlow, Scikit-learn",
    icon: <FaBrain className="text-4xl text-purple-500 group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    title: "Java Development",
    duration: "6 Weeks",
    tools: "Core Java, OOP, JDBC, Spring Boot",
    icon: <FaJava className="text-4xl text-orange-500 group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    title: "Power BI & Data Analytics",
    duration: "4 Weeks",
    tools: "Power BI, Excel, DAX, SQL",
    icon: <FaChartBar className="text-4xl text-green-500 group-hover:scale-110 transition-transform duration-300" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: 'spring' },
  }),
};

const Internships = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const openForm = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeForm = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <section
      id="internships"
      className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-4 text-indigo-900"
      >
        🚀 Our Internship Programs
      </motion.h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
        Level up your skills with hands-on, project-based training guided by industry experts.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
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
              boxShadow: '0px 12px 40px rgba(99, 102, 241, 0.25)',
            }}
            className="group relative p-6 rounded-2xl border border-transparent bg-white/70 backdrop-blur-lg shadow-lg hover:border-indigo-400 transition-all duration-500 overflow-hidden"
          >
            {/* Animated Gradient Border Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 blur-2xl transition duration-500"></div>

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
              <motion.button
                onClick={() => openForm(item.title)}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
                className="mt-5 inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-lg hover:shadow-lg hover:from-indigo-600 hover:to-purple-600 transition font-medium shadow"
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md relative">
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-indigo-800">
              Apply for {selectedProgram}
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <textarea
                placeholder="Why are you interested?"
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Internships;
