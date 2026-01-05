"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LineIcon } from "@/src/components/icons/icons";

const categories = [
  {
    title: "Strength & Conditioning",
    desc: "Increase strength, build lean muscle, and boost performance with guided training programs created by your coach for consistent progress.",
    img: "/weight.png",
    offset: "top-[24px]",
    size: "h-[400px]",
    width: 166,
    height: 166,
  },
  {
    title: "Weight Loss & Transformation",
    desc: "Increase strength, build lean muscle, and boost performance with guided training programs created by your coach for consistent progress.",
    img: "/tape.png",
    offset: "bottom-[85px]",
    size: "h-[419px]",
    width: 188,
    height: 188,
  },
  {
    title: "Mobility & Wellness",
    desc: "Enhance flexibility, balance, and recovery through guided mobility sessions. Your trainer will help you move better, feel stronger, and maintain overall body wellness.",
    img: "/bottle.png",
    offset: "top-[45px]",
    size: "h-[400px]",
    width: 143,
    height: 215,
  },
  {
    title: "Cardio & Endurance",
    desc: "Boost stamina, heart health, and overall fitness with structured cardio sessions designed to challenge and energize you.",
    img: "/mill.png",
    offset: "bottom-[50px]",
    size: "h-[500px]",
    width: 276,
    height: 276,
  },
];

const booking = [
  {
    img: "/selescope.svg",
    option: "Browse trainer categories",
    content:
      "Strength, Yoga, Cardio, or Weight Loss — to find the right match for your goals.",
  },
  {
    img: "/calender.svg",
    option: "Select Trainer & Schedule",
    content:
      "View profiles, ratings, and prices. Pick your preferred trainer, then select a date and time that fits your routine.",
  },
  {
    img: "/ticket.png",
    option: "Book & Start Training",
    content:
      "Confirm your session with secure payment. You’ll receive an instant confirmation and reminders before your session.",
  },
];

const TrainerCategories = () => {
  return (
    <div className="rounded-2xl bg-[#181716] px-6 lg:px-12 py-6 lg:my-10 lg:mr-6 lg:ml-6 md:m-4">
      <div className="mt-4 lg:max-w-[1400px] lg:mx-auto">
        <h3 className="font-[MainluxBold] text-[32px] leading-[100%] text-white mb-3">
          Book trainers by their speciality
        </h3>
        <p className="font-[Kumbh] text-[16px] leading-[150%] text-white max-w-[645px]">
          Every trainer on GymNest is vetted, reviewed, and ready to guide you.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 justify-between pt-8 lg:pt-0.5 gap-y-4 gap-x-4 relative lg:max-w-[1400px] lg:mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {categories.map((cat, idx) => (
          <motion.article
            key={idx}
            className={`
              relative rounded-2xl overflow-hidden bg-[#42423E] 
              lg:p-6 p-4 shadow-[0px_2px_10px_0px_#FBCC0C3B] 
              flex flex-col justify-between
              ${cat.size} 
              ${cat.offset}
              max-md:h-auto
              max-md:pt-8 max-md:pb-6
              max-md:flex-col
              max-md:relative
              max-md:top-0 max-md:bottom-0
              max-md:gap-4
            `}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
              delay: idx * 0.06,
            }}
          >
            <div className="max-md:pb-4 flex flex-col justify-between">
              <h3 className=" max-w-[700px] text-[15px] lg:text-[20px] font-[Kumbh] font-semibold mb-3 text-white">
                {cat.title}
              </h3>
              <p className="text-[#EEEEEE] font-[Kumbh] text-base leading-6 tracking-normal">
                {cat.desc}
              </p>
            </div>
            <div className="mt-6 max-md:mt-2">
              <button className="text-yellow-400 text-sm font-medium hover:underline">
                Explore Category →
              </button>
            </div>
            <Image
              src={cat.img}
              alt={cat.title}
              width={cat.width}
              height={cat.height}
              className="
                pointer-events-none 
                absolute 
                right-0 
                bottom-0 
                object-contain 
                opacity-95
                max-md:static
                max-md:mx-auto
                max-md:mt-4
                max-md:w-[120px]
                max-md:h-auto
              "
              style={{
                filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.35))",
              }}
            />

            <span className="absolute left-0 right-0 bottom-0 h-1 bg-[#2e2b29] max-md:hidden" />
          </motion.article>
        ))}
      </motion.div>
      <div className="mt-12 lg:max-w-[1440px] mx-auto flex flex-col">
        <h3 className="font-[Kumbh] text-[32px] text-white mb-10">
          How booking works
        </h3>

        <div className="flex items-center justify-center gap-3 mb-10 max-md:hidden">
          <button className="border border-[#FFE88A1A] rounded-[100%] p-2.5 bg-[#AB8B0A4D] text-white">
            1
          </button>
          <LineIcon />
          <button className="border border-[#FFE88A1A] rounded-[100%] p-2.5 bg-[#AB8B0A4D] text-white">
            2
          </button>
          <LineIcon />
          <button className="border border-[#FFE88A1A] rounded-[100%] p-2.5 bg-[#AB8B0A4D] text-white">
            3
          </button>
        </div>

        <div className="grid mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
          {booking.map((itm, index) => (
            <motion.div
              key={index}
              className="
                bg-[#4E4621] rounded-xl p-6 flex flex-col justify-between 
                px-6 py-10 h-[300px]

                /* Mobile fix */
                max-md:h-auto
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-4 max-md:mx-auto"
              >
                <Image
                  src={itm.img}
                  width={105}
                  height={105}
                  alt="booking-step"
                  className="object-contain"
                />
              </motion.div>

              <div className="max-md:text-center">
                <h3 className="font-[Kumbh] text-[20px] text-white mb-2">
                  {itm.option}
                </h3>
                <p className="font-[Kumbh] text-[15px] text-[#EEEEEE]">
                  {itm.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerCategories;
