"use client";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@/src/components/icons/icons";
import { motion } from "framer-motion";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="rounded-0 bg-[#2B2303] md:m-4 lg:m-6 lg:rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:max-w-[1440px] lg:mx-auto px-4 sm:px-6 py-6 lg:px-12 lg:py-14"
      >
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-35">
          <div className="flex flex-col max-w-[419px] w-full">
            <h4 className="font-[Poppins] text-white font-semibold text-[22px] leading-7">
              GymNest
            </h4>
            <p className="font-[Inter] text-[14px] mt-3 leading-[22px] text-[#EEEEEE] w-full">
              Trusted by fitness enthusiasts across 50+ cities.
            </p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            <div className="flex flex-col">
              <h4 className="font-[Poppins] text-white font-semibold text-[18px] mb-4">
                Resources
              </h4>
              <ul className="list-none flex flex-col gap-3 text-[#EEEEEE] font-[Inter] text-[14px] leading-[22px]">
                <li>Help Center</li>
                <li>Trainer Sign-Up</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4
                className="font-[Poppins] text-[#ffffff] font-semibold text-[18px] mb-4
              "
              >
                Products
              </h4>
              <ul className="list-none flex flex-col gap-3 text-[#EEEEEE] font-[Inter] text-[14px] leading-[22px]">
                <li>Shop Equipment</li>
                <li>Book a Trainer</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="font-[Poppins] text-white font-semibold text-[18px] mb-4">
                Company
              </h4>
              <ul className="list-none flex flex-col gap-3 text-[#EEEEEE] font-[Inter] text-[14px] leading-[22px]">
                <li>About us</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4
                id="contact"
                className="font-[Poppins] text-white font-semibold text-[18px] mb-4"
              >
                Contact Us
              </h4>
              <ul className="list-none flex flex-col gap-3 text-[#EEEEEE] font-[Inter] text-[14px] leading-[22px]">
                <li>Gymnest@gmail.com</li>
                <li>+2249106891234</li>
                <li>+2249106891234</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-[#FBCC0C40] mt-8 md:mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <h4 className="font-[Inter] text-[14px] text-[#EEEEEE] text-center md:text-left">
            @2024 GymNest. All rights reserved
          </h4>

          <div className="flex items-center gap-4">
            <FacebookIcon />
            <XIcon />
            <LinkedinIcon />
            <InstagramIcon />
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
