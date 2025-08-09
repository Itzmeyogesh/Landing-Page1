import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // fake submit for demo — replace with your API call
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent! 🎉");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus(""), 3000);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-br from-sky-50 via-white to-indigo-50 overflow-hidden"
    >
      {/* Decorative SVG background (inline to avoid external URL issues) */}
      <svg
        className="absolute -z-10 left-1/2 top-0 -translate-x-1/2 opacity-20 pointer-events-none"
        width="900"
        height="600"
        viewBox="0 0 900 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <circle cx="150" cy="120" r="200" fill="url(#g)" />
        <circle cx="700" cy="420" r="180" fill="#c7b2ff" />
      </svg>

      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl font-bold text-center mb-8 text-slate-800"
      >
        Get in touch
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-xl mx-auto bg-white/90 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-8 space-y-4"
      >
        <div className="flex items-center border rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-sky-300">
          <span className="px-3 text-slate-500">
            <FaUser />
          </span>
          <input
            aria-label="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your name"
            className="w-full px-3 py-3 outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex items-center border rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-sky-300">
          <span className="px-3 text-slate-500">
            <FaEnvelope />
          </span>
          <input
            aria-label="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-3 outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex items-start border rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-sky-300">
          <span className="px-3 pt-3 text-slate-500">
            <FaCommentDots />
          </span>
          <textarea
            aria-label="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows="5"
            className="w-full px-3 py-3 outline-none resize-none bg-transparent"
            required
          />
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex-1 bg-sky-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-sky-700 transition"
          >
            Send Message
          </motion.button>

          <span className="text-sm text-slate-600">{status}</span>
        </div>
      </motion.form>
    </section>
  );
}
