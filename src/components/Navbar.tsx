"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  // Initialize scrolled from pathname and current scroll position to avoid synchronous setState in effects
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window === "undefined")
      return pathname ? pathname !== "/" : false;
    if (pathname && pathname !== "/") return true;
    return window.scrollY > 50;
  });

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (pathname && pathname !== "/") {
      // ensure brown on non-home routes; schedule to avoid synchronous setState
      if (!scrolled) {
        const id = setTimeout(() => setScrolled(true), 0);
        return () => clearTimeout(id);
      }
      return;
    }

    // On the homepage: attach scroll listener and set initial state asynchronously
    const initId = setTimeout(() => {
      setScrolled(window.scrollY > 50);
    }, 0);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(initId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, scrolled]);

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
        px-4 sm:px-6 md:px-10
        
        /* Mobile styles */
        ${scrolled ? "top-0" : "top-1 lg:top-14"}
      
        
        ${
          scrolled
            ? "bg-[#2B2303] shadow-md text-black py-2 lg:top-10"
            : "bg-black/10 backdrop-blur-md py-2 border border-[#292827]"
        }
        
        /* Mobile margins only when not scrolled */
        ${!scrolled ? "mx-4 sm:mx-6 md:mx-8" : "mx-0"}
        ${!scrolled ? "rounded-lg" : "rounded-none"}
      `}
    >
      <div className="relative flex items-center justify-between text-white md:text-white transition-colors duration-300">
        <Link
          href="/"
          className="text-[13px] sm:text-[14px] leading-[18px] font-bold cursor-pointer font-[Over]"
        >
          MR KINGS FIT
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
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
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
            className="md:hidden mt-3 flex flex-col gap-3 font-medium text-gray-800 bg-white rounded-lg shadow-lg p-4"
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
