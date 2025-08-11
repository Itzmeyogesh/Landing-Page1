import React, { useEffect, useState } from 'react';
import { FaRocket, FaChevronDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scroll
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-[65vh] sm:min-h-[80vh] lg:min-h-screen
        flex flex-col justify-center items-center
        text-center px-4 sm:px-6 font-sans overflow-hidden
      "
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 animate-gradient-x"></div>

      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent)]"></div>

      {/* Floating Bubbles with parallax */}
      <motion.div
        className="absolute w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl"
        style={{
          top: `calc(20% + ${(mousePos.y - window.innerHeight / 2) * 0.02}px)`,
          left: `calc(10% + ${(mousePos.x - window.innerWidth / 2) * 0.02}px)`,
        }}
        transition={{ type: 'spring', stiffness: 30 }}
      />
      <motion.div
        className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full blur-3xl"
        style={{
          bottom: `calc(15% - ${(mousePos.y - window.innerHeight / 2) * 0.02}px)`,
          right: `calc(5% - ${(mousePos.x - window.innerWidth / 2) * 0.02}px)`,
        }}
        transition={{ type: 'spring', stiffness: 30 }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl text-white drop-shadow-lg"
      >
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 flex justify-center items-center gap-3 tracking-tight">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <FaRocket className="text-yellow-300 drop-shadow-glow" />
          </motion.div>
          <TypeAnimation
            sequence={[
              "🚀 Empowering Future Professionals",
              2000,
              "💼 Building Real Skills for Real Careers",
              2000,
              "📈 Your Career Starts Here",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent"
          />
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Launch your career with online internships in Web Development, AI/ML, Java, Power BI, and more.
          Learn from experts, build real projects, and earn valuable certifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <motion.a
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(255,255,255,0.6)" }}
            href="#internships"
            className="bg-white/20 backdrop-blur-lg text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg transition text-sm sm:text-base border border-white/30"
          >
            🚀 Apply Now
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.2)" }}
            href="#domains"
            className="border border-white/40 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg transition text-sm sm:text-base backdrop-blur-lg"
          >
            🔍 Explore Domains
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-6 sm:mt-10 text-white text-lg sm:text-xl cursor-pointer z-10"
        onClick={() => {
          document.querySelector('#internships')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;

