import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaJava, FaDatabase, FaGithub, FaBootstrap
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { MdEngineering } from 'react-icons/md'; // for Advanced Java (general representation)

// Skills Data
const skills = [
  { name: 'HTML', icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={40} className="text-purple-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-sky-400" /> },
  { name: 'Java', icon: <FaJava size={40} className="text-red-400" /> },
  { name: 'Advanced Java', icon: <MdEngineering size={40} className="text-indigo-400" /> },
  { name: 'SQL', icon: <FaDatabase size={40} className="text-green-400" /> },
  { name: 'GitHub', icon: <FaGithub size={40} className="text-white" /> },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Skill = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 py-12 bg-[rgb(12,14,34)] text-white overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 underline decoration-blue-500 underline-offset-4">
        My Skills
      </h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-[150px] h-[150px] flex flex-col items-center justify-center bg-[rgb(24,26,54)] p-4 rounded-2xl shadow-md transition duration-300 ease-in-out cursor-pointer
              hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-500 hover:bg-[rgb(28,30,60)]"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {skill.icon}
            <p className="mt-4 font-mono font-semibold text-base text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skill