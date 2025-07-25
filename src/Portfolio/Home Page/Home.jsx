import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import TypingAnimation from './TypingAnimation';
import { IoMdDownload } from "react-icons/io";
import image from "../../../public/image.png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='min-h-[88vh] w-full flex flex-col-reverse md:flex-row text-white overflow-hidden'>

      {/* Left Section */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="w-full md:w-1/2 px-6 md:pl-[80px] pt-[50px] md:pt-[70px] flex flex-col gap-8 items-center md:items-start text-center md:text-left"
      >
        <p className='text-xl md:text-2xl font-medium'>Hello I'm</p>
        <p className='text-3xl md:text-5xl font-bold'>Soumendra Priyadarshi</p>
        <p className='text-xl md:text-2xl font-medium'>and I'm <TypingAnimation /></p>
        <p className='text-sm md:text-base text-gray-300'>
          I'm a passionate and detail-oriented developer with hands-on experience in building responsive web applications using modern technologies like React, JavaScript, and Tailwind CSS. I enjoy turning complex problems into simple, beautiful, and intuitive solutions. I am always eager to learn new tools and collaborate on meaningful projects that make a difference.
        </p>

        {/* Social Icons */}
        <div className="flex gap-10 md:gap-16 text-xl justify-center md:justify-start">
          <BsTwitterX className='hover:cursor-pointer hover:text-blue-500 transform transition duration-200 ease-linear hover:scale-105' />
          <IoLogoYoutube className='hover:cursor-pointer hover:text-red-500 transform transition duration-200 ease-linear hover:scale-105' />
          <FaInstagram className='hover:cursor-pointer hover:text-pink-500 transform transition duration-200 ease-linear hover:scale-105' />
          <FaFacebook className='hover:cursor-pointer hover:text-blue-600 transform transition duration-200 ease-linear hover:scale-105' />
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Download CV Button */}
          <a
            href="/Soumendra_Resume.pdf"
            download="Soumendra_Resume.pdf"
            className="w-44 md:w-52 border-2 border-blue-600 text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition hover:scale-105 duration-300 text-center flex justify-center items-center gap-2"
          >
            <IoMdDownload size={20} />
            Download CV
          </a>

          {/* Know More About Me Button */}
          <button className="w-44 md:w-52 bg-white/10 border border-white/20 text-white font-semibold px-4 py-2 rounded-lg backdrop-blur-md hover:bg-white/20 hover:scale-105 transition duration-300">
            <Link to="/about">Know More About Me</Link>
          </button>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
      >
        <motion.div
          className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] rounded-full bg-gradient-to-b from-blue-900 to-[rgb(12,14,34)] relative"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <img
            src={image}
            alt="Profile"
            className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 h-full w-full object-cover rounded-full"
          />
        </motion.div>
      </motion.div>


    </div>
  );
};

export default Home;