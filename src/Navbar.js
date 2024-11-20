/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "./Images/logo.svg"

import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`w-full fixed top-0 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } z-10 shadow-md`}
    >
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
        <img src={logo} alt="Muhammad Ahsan" className="w-14 h-14 rounded-full" />
          <span
            className={`text-2xl font-bold ml-2 ${
              isDarkMode ? "text-white" : "text-indigo-900"
            }`}
          >
            Muhammad Ahsan
          </span>
        </div>
        <ul
          className={`hidden md:flex space-x-10 font-bold text-sm uppercase ${
            isDarkMode ? "text-white" : "text-gray-600"
          }`}
        >
          <li className="hover:text-gray-500">
            <a href="#">Home</a>
          </li>
          {/* <li className="hover:text-gray-500">
            <a href="#about">About me</a>
          </li> */}
          <li className="hover:text-gray-500">
            <a href="#services">Skills</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-gray-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {!isDarkMode && (<FaMoon
          className={`hidden md:block w-5 h-5 mr-2 cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-500'}`}
          onClick={toggleTheme}
          title="Toggle dark mode"
        />)}
        { isDarkMode && (<MdSunny
          className={`hidden md:block w-5 h-5 mr-2 cursor-pointer ${isDarkMode ? 'text-yellow-500' : 'text-black'}`}
          onClick={toggleTheme}
          title="Toggle dark mode"
        /> )}
        <div
          id="hamburger"
          className="space-y-1 md:hidden cursor-pointer z-20"
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
        <ul
          id="menu"
          className={`${isMenuOpen ? "block" : "hidden"} ${
            isDarkMode ? "bg-indigo-900" : "bg-white"
          } absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-center`}
        >
          <li>
            <a className={isDarkMode ? "text-white" : "text-black"} href="#">
              Home
            </a>
          </li>
          {/* <li>
            <a className={isDarkMode ? 'text-white' : 'text-black'} href="#about">About</a>
          </li> */}
          <li>
            <a
              className={isDarkMode ? "text-white" : "text-black"}
              href="#services"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className={isDarkMode ? "text-white" : "text-black"}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={isDarkMode ? "text-white" : "text-black"}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
