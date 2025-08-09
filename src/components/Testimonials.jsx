// Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, type: 'spring' },
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
        className="text-4xl font-bold text-center text-indigo-800 mb-12"
      >
        What Interns Say
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: [-0.5, 0.5, 0],
              boxShadow: '0 12px 24px rgba(79, 70, 229, 0.15)',
            }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative bg-white p-6 rounded-xl shadow border border-transparent hover:border-indigo-300 transition-all duration-300 group"
          >
            {/* Animated quote icon */}
            <motion.div
              whileHover={{ rotate: -10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-indigo-400 text-3xl mb-4"
            >
              <FaQuoteLeft />
            </motion.div>

            {/* Testimonial text */}
            <p className="text-gray-700 italic mb-4 leading-relaxed">“{item.text}”</p>

            {/* Name + Role */}
            <div className="mt-auto">
              <h4 className="text-indigo-700 font-semibold text-lg">{item.name}</h4>
              <span className="text-sm text-gray-500">{item.role}</span>
            </div>

            {/* Glow overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-indigo-300 to-purple-300 transition duration-500 rounded-xl"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
