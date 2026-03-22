"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e, link) => {
    setIsOpen(false);
    if (link.startsWith("#")) {
      e.preventDefault();
      scrollToSection(link.substring(1));
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#1a6953]/30 border-b border-[#e6dfc1]/10 mt-2 lg:mx-26 mx-6 rounded-full">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="relative h-12 w-40">
          <Image
            src="/logos/final-logo.svg"
            alt="OSSOME hacks"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation - Pill Shape */}
      <div className="hidden md:flex items-center justify-center bg-[#e6dfc1] rounded-full px-8 py-3 shadow-lg">
        <ul className="flex items-center gap-8">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.link}
                onClick={(e) => handleNavClick(e, nav.link)}
                className="text-[#1f4047] font-medium text-lg hover:text-[#8c973d] transition-colors duration-200"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-[#e6dfc1] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[calc(100%+12px)] left-0 right-0 border border-[#e6dfc1]/20 p-6 md:hidden shadow-xl backdrop-blur-md bg-[#1a6953]/95 rounded-2xl"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((nav, index) => (
                <li key={index}>
                  <Link
                    href={nav.link}
                    onClick={(e) => handleNavClick(e, nav.link)}
                    className="text-[#e6dfc1] font-medium text-xl hover:text-[#ffc627] transition-colors"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;