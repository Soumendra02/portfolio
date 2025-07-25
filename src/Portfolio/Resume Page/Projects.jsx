import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Typing Test App',
    description:
      'A real-time typing speed calculator with WPM, accuracy, and mistake counters. Features word highlighting, countdown timer, and summary view.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoLink: '#', 
    githubLink: '#',
  },
  {
    title: 'Hospital Management System',
    description:
      'Java Servlet-based system for managing hospital data, appointments, and patient records. Built using JSP, JDBC, and MySQL.',
    tech: ['Java', 'JSP', 'JDBC', 'MySQL'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'My developer portfolio built with React and Framer Motion to showcase my skills, projects, and resume.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    demoLink: '#',
    githubLink: '#',
  },
];

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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Projects = () => {
  return (
    <div className="min-h-screen px-4 md:px-10 py-12 bg-[rgb(12,14,34)] text-white overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 underline decoration-blue-500 underline-offset-4">
        My Projects
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid gap-10 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[rgb(24,26,54)] p-6 rounded-xl shadow-md hover:ring-2 hover:ring-blue-500 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-800 text-xs px-3 py-1 rounded-full font-mono text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 mt-auto">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition"
                >
                  <FaExternalLinkAlt /> View Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
                >
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects