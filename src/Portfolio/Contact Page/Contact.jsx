import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Contact = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 py-12 bg-[rgb(12,14,34)] text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 underline decoration-blue-500 underline-offset-4">
        Get in touch
      </h2>

      <motion.div
        className="max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.form
          variants={itemVariants}
          className="bg-[rgb(24,26,54)] p-8 rounded-2xl shadow-md space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted (functionality not connected yet)');
          }}
        >
          <div>
            <label htmlFor="name" className="block font-mono text-sm mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-[rgb(30,32,60)] text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-sm mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-[rgb(30,32,60)] text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-sm mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full bg-[rgb(30,32,60)] text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-full font-mono font-semibold text-white shadow-lg"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default Contact;
