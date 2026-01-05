"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-999 transition-all duration-300
        /* Desktop styles - unchanged */
        lg:mx-auto lg:w-[91%] lg:max-w-[1440px] lg:rounded-lg
        px-5 sm:px-8 md:px-10
        
        /* Mobile styles */
        ${scrolled ? "top-0" : "top-2 lg:top-14"}
      
        
        ${
          scrolled
            ? "bg-[#2B2303] shadow-md text-black py-3 lg:top-10"
            : "bg-black/10 backdrop-blur-md py-4 border border-[#292827]"
        }
        
        /* Mobile margins only when not scrolled */
        ${!scrolled ? "mx-4 sm:mx-6 md:mx-8" : "mx-0"}
        ${!scrolled ? "rounded-lg" : "rounded-none"}
      `}
    >
      <div className="relative flex items-center justify-between text-white md:text-white transition-colors duration-300">
        <Link
          href="/"
          className="text-[14px] leading-[18px] font-bold cursor-pointer font-[Over]"
        >
          GYMNEST
        </Link>

        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 font-medium font-[Kumbh]">
          <Link href="/shop">
            <li className="cursor-pointer hover:text-[#FBCC0C] transition">
              Shop
            </li>
          </Link>
          <Link href="/training-session">
            <li className="cursor-pointer hover:text-[#FBCC0C] transition">
              Trainer
            </li>
          </Link>

          <li
            onClick={scrollToContact}
            className="cursor-pointer hover:text-[#FBCC0C] transition"
          >
            Contact
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <FiShoppingCart size={20} className="cursor-pointer" />
          <button className="px-4 py-2 font-semibold rounded-md border-0 border-gray-800 hover:bg-yellow-500 hover:text-black transition">
            Log In
          </button>
          <button className="w-[119px] py-3 font-[Kumbh] font-regular text-[#1B1A1A] rounded-lg bg-[#FBCC0C]">
            Register
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden mt-4 flex flex-col gap-4 font-medium text-gray-800 bg-white rounded-lg shadow-lg p-6"
          >
            <li className="cursor-pointer hover:text-yellow-500 transition">
              Shop
            </li>
            <li className="cursor-pointer hover:text-yellow-500 transition">
              Trainer
            </li>
            <li className="cursor-pointer hover:text-yellow-500 transition">
              Contact
            </li>

            <div className="flex flex-col gap-3 mt-4">
              <button className="px-4 py-2 font-[Kumbh] font-bold text-[12px] rounded-md border border-gray-800 hover:bg-yellow-500 hover:text-black transition">
                Log In
              </button>
              <button className="w-full py-2 font-[Kumbh] font-regular text-[#1B1A1A] rounded-lg bg-[#FBCC0C]">
                Register
              </button>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
