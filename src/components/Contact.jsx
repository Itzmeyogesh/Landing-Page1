import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      // Example: Send to EmailJS API (replace YOUR_SERVICE_ID, TEMPLATE_ID, USER_ID)
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "YOUR_SERVICE_ID",
          template_id: "YOUR_TEMPLATE_ID",
          user_id: "YOUR_PUBLIC_KEY",
          template_params: {
            to_email: "techieszoneintern@gmail.com", // fixed recipient
            from_name: name,
            from_email: email,
            message: message,
          },
        }),
      });

      if (res.ok) {
        setStatus("Message sent! 🎉");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (err) {
      setStatus("Error sending message ❌");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-br from-sky-50 via-white to-indigo-50 overflow-hidden"
    >
      {/* Decorative SVG */}
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
