// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <section className="relative h-[600px] lg:h-[781px] rounded-none md:rounded-[19px] overflow-hidden m-0 md:mt-6 md:ml-6 md:mr-6 md:mb-15">
//       <div className="absolute inset-0">
//         <Image
//           src="/training.webp"
//           alt="Hero Image"
//           fill
//           className="object-cover object-center z-0"
//           priority
//         />
//         <div className="absolute inset-0 bg-[#000000CC] z-10"></div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-20 2xl:max-w-[1440px] 2xl:mx-auto  px-5 md:px-12 h-full flex flex-col justify-center text-white"
//       >
//         <p className="text-sm sm:text-base md:text-[20px] font-normal leading-[110%] tracking-normal font-[Kumbh] mb-2">
//           4.8 of 5 <span className="text-[#FBCC0C]">★</span> Avg Rating
//         </p>

//         <h1 className="font-[MainluxBold] text-[28px] sm:text-[35px] lg:text-[60px] font-bold leading-8 sm:leading-[38px] lg:leading-[76px] tracking-normal mb-3">
//           Transform Every Step. <br className="hidden sm:block" />
//           From Purchase to Progress.
//         </h1>

//         <p className="font-[Kumbh] text-[16px] sm:text-[20px] lg:text-[24px] leading-[130%] sm:leading-[115%] tracking-normal mb-6 max-w-[831px]">
//           Buy high-performance fitness equipments and book verified gym
//           instructors. Everything you need to hit your fitness goals —
//           delivered.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4">
//           <Link href="/shop" className="w-full sm:w-auto">
//             <button
//               className="
//         w-full sm:w-48 py-3 font-[Kumbh] rounded-lg
//         bg-[#FBCC0C] text-[#1B1A1A]
//         transition-all duration-300 ease-in-out
//         sm:hover:bg-transparent sm:hover:text-[#FBCC0C] sm:hover:border sm:hover:border-[#FBCC0C]
//       "
//             >
//               Shop Now
//             </button>
//           </Link>
//           <Link href="/training-session" className="w-full sm:w-auto">
//             <button
//               className="
//         w-full sm:w-48 py-3 font-[Kumbh] rounded-lg
//         bg-transparent border border-[#FBCC0C] text-[#FBCC0C]
//         transition-all duration-300 ease-in-out
//         sm:hover:bg-[#FBCC0C] sm:hover:text-[#1B1A1A]
//       "
//             >
//               Book a Trainer
//             </button>
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const STATIC_PARTICLES = Array.from({ length: 15 }, (_, i) => ({
//   id: i,
//   x: Math.random() * 100,
//   y: Math.random() * 100,
//   size: Math.random() * 3 + 1,
//   duration: Math.random() * 20 + 10,
//   delay: Math.random() * 5,
//   xOffset: Math.random() * 20 - 10,
// }));

// const Hero: React.FC = () => {
//   return (
//     <section className="relative h-[600px] lg:h-[781px] rounded-none md:rounded-[19px] overflow-hidden m-0 md:mt-6 md:ml-6 md:mr-6 md:mb-15">
//       <div className="absolute inset-0">
//         <div className="absolute inset-0">
//           <Image
//             src="/training.webp"
//             alt="Hero Image"
//             fill
//             className="object-cover object-center z-0"
//             priority
//           />
//           <div className="absolute inset-0 bg-[#000000CC] z-10"></div>
//         </div>

//         {/* Animated Gradient Accent */}
//         <motion.div
//           className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-b from-[#FBCC0C]/20 via-transparent to-transparent z-10"
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: 360,
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         {/* Floating Particles */}
//         {STATIC_PARTICLES.map((particle) => (
//           <motion.div
//             key={particle.id}
//             className="absolute rounded-full bg-[#FBCC0C] z-10"
//             style={{
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               width: particle.size,
//               height: particle.size,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               x: [0, particle.xOffset, 0],
//               opacity: [0.3, 0.8, 0.3],
//             }}
//             transition={{
//               duration: particle.duration,
//               delay: particle.delay,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-20 2xl:max-w-[1440px] 2xl:mx-auto px-5 md:px-12 h-full flex flex-col justify-center text-white"
//       >
//         {/* Rating */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-2"
//         >
//           <div className="text-sm sm:text-base md:text-[20px] font-normal leading-[110%] tracking-normal font-[Kumbh] inline-flex items-center gap-2">
//             <motion.span
//               animate={{ rotate: 360 }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="inline-block"
//             >
//               4.8
//             </motion.span>
//             <span>of 5</span>
//             <motion.span
//               className="text-[#FBCC0C] text-xl"
//               animate={{
//                 scale: [1, 1.2, 1],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatDelay: 3,
//               }}
//             >
//               ★
//             </motion.span>
//             <span>Avg Rating</span>
//           </div>
//         </motion.div>

//         {/* Main Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mb-3"
//         >
//           <h1 className="font-[MainluxBold] text-[28px] sm:text-[35px] lg:text-[60px] font-bold leading-8 sm:leading-[38px] lg:leading-[76px] tracking-normal">
//             <motion.span
//               className="block"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//             >
//               Transform Every Step.
//             </motion.span>
//             <motion.span
//               className="block"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.7 }}
//             >
//               From Purchase to Progress.
//             </motion.span>
//           </h1>
//         </motion.div>

//         {/* Description */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 1.2 }}
//           className="mb-6 max-w-[831px]"
//         >
//           <p className="font-[Kumbh] text-[16px] sm:text-[20px] lg:text-[24px] leading-[130%] sm:leading-[115%] tracking-normal">
//             <motion.span
//               className="inline-block"
//               animate={{
//                 backgroundPosition: ["0% 0%", "100% 0%"],
//               }}
//               transition={{
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               style={{
//                 background: "linear-gradient(90deg, #FBCC0C, #ffffff, #FBCC0C)",
//                 backgroundSize: "200% 100%",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Buy high-performance fitness equipment
//             </motion.span>{" "}
//             and book verified gym instructors. Everything you need to hit your
//             fitness goals — delivered.
//           </p>
//         </motion.div>

//         {/* CTA Buttons - Using original simple hover */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.6 }}
//           className="flex flex-col sm:flex-row gap-4"
//         >
//           <Link href="/shop" className="w-full sm:w-auto">
//             <motion.button
//               className="w-full sm:w-48 py-3 font-[Kumbh] rounded-lg bg-[#FBCC0C] text-[#1B1A1A] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#FBCC0C] hover:border hover:border-[#FBCC0C]"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Shop Now
//             </motion.button>
//           </Link>
//           <Link href="/training-session" className="w-full sm:w-auto">
//             <motion.button
//               className="w-full sm:w-48 py-3 font-[Kumbh] rounded-lg bg-transparent border border-[#FBCC0C] text-[#FBCC0C] transition-all duration-300 ease-in-out hover:bg-[#FBCC0C] hover:text-[#1B1A1A]"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Book a Trainer
//             </motion.button>
//           </Link>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           animate={{
//             opacity: [0.5, 1, 0.5],
//             y: [0, 10, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="flex flex-col items-center">
//             <span className="text-sm font-[Kumbh] mb-2">Scroll to explore</span>
//             <motion.div
//               className="w-px h-8 bg-linear-to-b from-[#FBCC0C] to-transparent"
//               animate={{
//                 height: [8, 32, 8],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Floating Accent Elements */}
//       <motion.div
//         className="absolute bottom-10 left-10 w-20 h-20 border border-[#FBCC0C]/30 rounded-full"
//         animate={{
//           scale: [1, 1.2, 1],
//           rotate: 360,
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />
//       <motion.div
//         className="absolute top-10 right-10 w-12 h-12 border border-[#FBCC0C]/20 rounded-full"
//         animate={{
//           scale: [1, 1.5, 1],
//           rotate: -360,
//         }}
//         transition={{
//           duration: 15,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       />
//     </section>
//   );
// };

// export default Hero;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      duration: number;
      delay: number;
      xOffset: number;
    }>
  >([]);

  const effectRan = useRef(false);

  // Generate particles ONLY on client side to avoid hydration mismatch
  useEffect(() => {
    // Only run once
    if (effectRan.current) return;
    effectRan.current = true;

    // Use setTimeout to defer the state update
    const timer = setTimeout(() => {
      setParticles(
        Array.from({ length: 15 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          xOffset: Math.random() * 20 - 10,
        }))
      );
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[600px] lg:h-[781px] rounded-none md:rounded-[19px] overflow-hidden m-0 md:mt-6 md:ml-6 md:mr-6 md:mb-15">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src="/training.webp"
            alt="Hero Image"
            fill
            className="object-cover object-center z-0"
            priority
          />
          <div className="absolute inset-0 bg-[#000000CC] z-10"></div>
        </div>

        {/* Animated Gradient Accent */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-b from-[#FBCC0C]/20 via-transparent to-transparent z-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Particles - Render only after client-side generation */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#FBCC0C] z-10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 2xl:max-w-[1440px] 2xl:mx-auto px-5 md:px-12 h-full flex flex-col justify-center text-white"
      >
        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2"
        >
          <div className="text-sm sm:text-base md:text-[20px] font-normal leading-[110%] tracking-normal font-[Kumbh] inline-flex items-center gap-2">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block"
            >
              4.8
            </motion.span>
            <span>of 5</span>
            <motion.span
              className="text-[#FBCC0C] text-xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              ★
            </motion.span>
            <span>Avg Rating</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-3"
        >
          <h1 className="font-[MainluxBold] text-[28px] sm:text-[35px] lg:text-[60px] font-bold leading-8 sm:leading-[38px] lg:leading-[76px] tracking-normal">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Transform Every Step.
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              From Purchase to Progress.
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-6 max-w-[831px]"
        >
          <p className="font-[Kumbh] text-[16px] sm:text-[20px] lg:text-[24px] leading-[130%] sm:leading-[115%] tracking-normal">
            <motion.span
              className="inline-block"
              animate={{
                backgroundPosition: ["0% 0%", "100% 0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #FBCC0C, #ffffff, #FBCC0C)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Buy high-performance fitness equipment
            </motion.span>{" "}
            and book verified gym instructors. Everything you need to hit your
            fitness goals — delivered.
          </p>
        </motion.div>

        {/* CTA Buttons - Using original simple hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/shop" className="w-full sm:w-auto">
            <motion.button
              className="w-full sm:w-48 py-3 font-[Kumbh] rounded-lg bg-[#FBCC0C] text-[#1B1A1A] transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#FBCC0C] hover:border hover:border-[#FBCC0C]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </Link>
          <Link href="/training-session" className="w-full sm:w-auto">
            <motion.button
              className="w-full sm:w-48 py-3 font-[Kumbh] rounded-lg bg-transparent border border-[#FBCC0C] text-[#FBCC0C] transition-all duration-300 ease-in-out hover:bg-[#FBCC0C] hover:text-[#1B1A1A]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Trainer
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            opacity: [0.5, 1, 0.5],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm font-[Kumbh] mb-2">Scroll to explore</span>
            <motion.div
              className="w-px h-8 bg-linear-to-b from-[#FBCC0C] to-transparent"
              animate={{
                height: [8, 32, 8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Accent Elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 border border-[#FBCC0C]/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-10 right-10 w-12 h-12 border border-[#FBCC0C]/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
};

export default Hero;
