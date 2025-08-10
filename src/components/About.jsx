import React from 'react';
import { FaLaptopCode, FaChartLine, FaGraduationCap, FaMobileAlt, FaPaintBrush, FaUserTie, FaBriefcase, FaUserEdit, FaProjectDiagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const coreFeatures = [
  {
    title: 'Hands-On Learning',
    icon: <FaLaptopCode />,
    desc: 'Engage with real-world projects that simulate actual industry tasks.',
  },
  {
    title: 'Career Focused',
    icon: <FaChartLine />,
    desc: 'Build your portfolio, earn certifications, and grow job-ready skills.',
  },
  {
    title: 'Expert Mentorship',
    icon: <FaGraduationCap />,
    desc: 'Learn from industry professionals in guided interactive sessions.',
  },
];

const services = [
  { title: 'Web Development', icon: <FaLaptopCode />, desc: 'Expert training in web technologies and frameworks.' },
  { title: 'App Development', icon: <FaMobileAlt />, desc: 'Training for Android and iOS mobile app development.' },
  { title: 'Graphics Services', icon: <FaPaintBrush />, desc: 'Learn graphic design, visual effects, and digital art.' },
  { title: 'Personalized Project Guidance', icon: <FaProjectDiagram />, desc: 'One-on-one guidance to ensure project success.' },
  { title: 'Placement Support', icon: <FaBriefcase />, desc: 'Resume building, interview prep, and job assistance.' },
  { title: 'Career Guidance & Mentorship', icon: <FaUserTie />, desc: 'Navigate your professional journey with confidence.' },
  { title: 'LinkedIn Profile & CV Building', icon: <FaUserEdit />, desc: 'Create impactful LinkedIn profiles and resumes.' },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-gradient-to-br from-[#06082A] via-[#12193B] to-[#0A0F2D] text-white overflow-hidden"
    >
      {/* Background Aurora Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-pink-500 via-indigo-500 to-blue-500 opacity-20 rounded-full blur-[180px] top-[-100px] left-[-200px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-indigo-400 to-blue-300 opacity-30 rounded-full blur-[160px] bottom-[-100px] right-[-120px] animate-ping delay-300"></div>
        <div className="absolute w-[200px] h-[200px] bg-purple-400 opacity-10 rounded-full blur-[100px] top-[30%] right-[25%] animate-bounce"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6 text-center"
        >
          Who We Are
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-indigo-100 leading-relaxed max-w-4xl mx-auto mb-16 text-center"
        >
          <span className="text-pink-400 font-semibold">Technical One</span> is a distinguished online platform offering comprehensive internship opportunities for graduate and undergraduate students. 
          Our programs are expertly crafted and delivered by seasoned industry professionals, ensuring a superior learning experience.
        </motion.p>

        {/* Core Features */}
        <div className="grid md:grid-cols-3 gap-10 px-4 mb-20">
          {coreFeatures.map((card, i) => (
            <Tilt key={i} tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable glareMaxOpacity={0.2} glareColor="white" className="transform-gpu">
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-md border border-indigo-400/20 hover:border-pink-400/30 transition duration-300 rounded-3xl p-8 shadow-xl group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-pink-400 text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-indigo-200">{card.desc}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Services Section */}
        <motion.h3
          className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-10"
        >
          Our Services
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {services.map((service, i) => (
            <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.15}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white/5 backdrop-blur-md border border-cyan-400/20 hover:border-pink-400/30 rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-cyan-400 text-4xl mb-4">{service.icon}</div>
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="text-sm text-indigo-200">{service.desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="#internships"
            className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            🚀 Explore Internships
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
