// components/Navbar.jsx
import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { TbHexagonLetterSFilled } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const linkStyles = ({ isActive }) =>
    `${isActive ? 'text-blue-500 underline scale-105' : ''}`;

  return (
    <nav className="w-full bg-[rgb(12,14,34)] text-white shadow-md px-4 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <TbHexagonLetterSFilled size={30} className="text-blue-400" />
          <span className="text-2xl font-bold tracking-wide">Soumendra.dev</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:block">
          <ul className="flex gap-10 font-semibold font-mono text-lg transition-all ease-in-out duration-300">
            {navItems.map((item) => (
              <li
                key={item}
                className="hover:text-blue-500 hover:underline transition-transform transform hover:scale-105 duration-200"
              >
                <NavLink to={`/${item.toLowerCase()}`} className={linkStyles}>
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Icon - Top Right */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <HiOutlineMenu size={28} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <SidebarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;