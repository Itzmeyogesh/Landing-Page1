// Testimonials.jsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sneha Patil',
    role: 'AI Intern',
    text: 'This internship was a turning point. I gained real-world skills and built an AI model I’m proud of.',
  },
  {
    name: 'Rohan Deshmukh',
    role: 'Web Development Intern',
    text: 'Great mentors and hands-on projects helped me land my first freelance job! Highly recommend.',
  },
  {
    name: 'Ayesha Khan',
    role: 'Power BI Intern',
    text: 'The Power BI dashboard project gave me confidence. Loved the learning experience here!',
  },
];

// Animation for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, type: 'spring' },
  }),
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-br from-indigo-50 to-white py-20 px-6">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-indigo-800 mb-14"
      >
        What Interns Say
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <TiltCard key={i} i={i} {...item} />
        ))}
      </div>
    </section>
  );
};

// Tilt effect card
const TiltCard = ({ i, name, role, text }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group p-[2px] rounded-2xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 transition-all duration-500 hover:scale-[1.02]"
      ref={ref}
    >
      {/* Inner white card */}
      <div className="bg-white rounded-2xl p-6 shadow-lg h-full relative overflow-hidden">
        {/* Animated quote icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="text-indigo-500 text-3xl mb-4"
        >
          <FaQuoteLeft />
        </motion.div>

        {/* Testimonial text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.3 + 0.3, duration: 0.6 }}
          className="text-gray-700 italic mb-4 leading-relaxed"
        >
          “{text}”
        </motion.p>

        {/* Name + Role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.3 + 0.5, duration: 0.6 }}
          className="mt-auto"
        >
          <h4 className="text-indigo-700 font-semibold text-lg">{name}</h4>
          <span className="text-sm text-gray-500">{role}</span>
        </motion.div>

        {/* Hover Glow Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-indigo-300 to-purple-300 transition duration-500 rounded-2xl"></div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
