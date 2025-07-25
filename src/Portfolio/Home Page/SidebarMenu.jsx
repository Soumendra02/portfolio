// components/SidebarMenu.jsx
import React from 'react';
import { HiX } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const SidebarMenu = ({ isOpen, setIsOpen }) => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const linkStyles = ({ isActive }) =>
    `${isActive ? 'text-blue-500 underline scale-105' : ''}`;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[70%] bg-[rgb(20,22,44)] z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={() => setIsOpen(false)}>
          <HiX size={28} className="text-white" />
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col items-center gap-6 font-semibold font-mono text-lg mt-8 text-white">
        {navItems.map((item) => (
          <li
            key={item}
            className="hover:text-blue-500 hover:underline transition-transform transform hover:scale-105 duration-200"
            onClick={() => setIsOpen(false)}
          >
            <NavLink to={`/${item.toLowerCase()}`} className={linkStyles}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;