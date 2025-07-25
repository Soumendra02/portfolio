import React from 'react';
import profileImage from '../../assets/image.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-[88%] px-10 md:px-20 py-12 text-white bg-[rgb(12,14,34)] font-mono">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left: Profile Image with Gradient Ring */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-full bg-gradient-to-b from-blue-900 to-[rgb(12,14,34)]">
            <img
              src={profileImage}
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Right: Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-blue-500">About Me</h1>
          <p className="mb-6 text-lg text-gray-300 leading-7">
            I'm <span className="text-white font-semibold">Soumendra Priyadarshi</span>, a Computer Science graduate and enthusiastic web developer. I specialize in creating responsive, user-friendly websites using modern technologies like React, Tailwind CSS, and JavaScript.
            <br /><br />
            As a fresher, I’m eager to learn, grow, and contribute to real-world projects. I believe in writing clean code, collaborating with teams, and continuously improving my skills through challenges and feedback.
          </p>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-900 bg-opacity-40 p-4 rounded-lg border border-blue-800 hover:scale-105 transition">
              <Link to="/projects">
                <p className="text-xl font-semibold text-blue-400">5+</p>
                <p className="text-sm text-gray-400">Practice Projects</p>
              </Link>
            </div>
            <div className="bg-blue-900 bg-opacity-40 p-4 rounded-lg border border-blue-800 hover:scale-105 transition">
              <p className="text-xl font-semibold text-blue-400">Frontend</p>
              <p className="text-sm text-gray-400">Specialization</p>
            </div>
            <div className="bg-blue-900 bg-opacity-40 p-4 rounded-lg border border-blue-800 hover:scale-105 transition">
              <p className="text-xl font-semibold text-blue-400">Quick Learner</p>
              <p className="text-sm text-gray-400">Adaptable & Curious</p>
            </div>
            <div className="bg-blue-900 bg-opacity-40 p-4 rounded-lg border border-blue-800 hover:scale-105 transition">
              <p className="text-xl font-semibold text-blue-400">Open</p>
              <p className="text-sm text-gray-400">To Work & Internships</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About