
"use client";
import { treadmill } from "@/src/components/ListingData";
import Structure from "@/src/components/Structure";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import React from "react";

interface CardItem {
  content: string;
  purchase: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerParent: Variants = {
  hidden: { opacity: 1 }, 
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cards: CardItem[] = [
  {
    content: "Free Shipping",
    purchase: "Enjoy complimentary delivery on purchases above ₦500,000",
  },
  {
    content: "Free Return",
    purchase:
      "Changed your mind? Send it back within 30 days, no questions asked",
  },
  {
    content: "Secured Payments",
    purchase: "Pay securely with encrypted, PCI-certified gateways.",
  },
  {
    content: "Worldwide Shipping",
    purchase: "We deliver across Africa and beyond — safe, fast, and reliable.",
  },
];

const TreadmillListing: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-16 py-10 lg:py-16 lg:max-w-[1440px] max-w-full mx-auto">
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Added amount for better performance
      >
        <h4 className="font-[Kumbh] font-semibold text-[16px] lg:text-[32px] leading-[100%] tracking-normal">
          Treadmills Built for Every Goal
        </h4>

        <Link
          href="/shop"
          className="hover:text-amber-700 transition duration-300"
        >
          <span className="font-[Kumbh] font-normal text-[16px] leading-[100%] tracking-normal cursor-pointer">
            Browse all products
          </span>
        </Link>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {treadmill.map((item, index) => (
          <Structure key={index} {...item} />
        ))}
      </motion.div>

      {/* Assurance Section */}
      <div className="flex flex-col gap-8 mt-8">
        <motion.h3
          className="font-[Kumbh] font-semibold text-[32px] leading-[100%] tracking-normal"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          GymNest Assurance
        </motion.h3>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cards.map((item: CardItem) => (
            <motion.div
              key={item.content}
              variants={staggerItem}
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-[#ffffff] py-10 px-3 flex flex-col items-center justify-center lg:items-start lg:justify-center border border-[#FBCC0C1A] rounded-xl"
            >
              <h3 className="font-[Kumbh] text-[#222222] font-semibold text-[16px] leading-[100%] tracking-normal mb-2">
                {item.content}
              </h3>
              <p className="font-[Kumbh] font-normal text-center lg:text-start text-[16px] leading-6 tracking-normal text-[#3B3B3B]">
                {item.purchase}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TreadmillListing;
