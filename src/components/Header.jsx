
import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";




function Header() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
  return (
    <header className="fixed top-0 left-0 w-full bg-red-600 shadow z-50">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
   
      <img src="/assets/logos.jpeg" alt="Logo" className="h-12 w-50 rounded-full" />

      {/* Desktop Nav */}
      <nav className="space-x-4 hidden md:block">
        <a href="#about" className="text-white ">About us</a>
        <a href="#skills" className="text-white ">Our Menu</a>
        <a href="#projects" className="text-white ">Ita Faaji</a>
        <a href="#contact" className="text-white ">Contact</a>
      </nav>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          {isOpen ? (
           <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden px-4 pb-4">
        <nav className="flex flex-col space-y-2">
          <a href="#about" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>About</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    )}
  </header>
  );
}

export default Header;
