// "use client";
// import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { ArrowIcon } from "@/src/components/icons/icons";
// import Link from "next/link";

// interface Trainer {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
// }

// const trainers: Trainer[] = [
//   {
//     id: 1,
//     name: "Hammed Bello",
//     role: "Cardio & Endurance",
//     image: "/gymnast.webp",
//   },
//   {
//     id: 2,
//     name: "Sarah Johnson",
//     role: "Yoga & Flexibility",
//     image: "/female-trainer.webp",
//   },
//   {
//     id: 3,
//     name: "Mike Chen",
//     role: "Strength Training",
//     image: "/trainer-3.webp",
//   },
//   {
//     id: 4,
//     name: "Aisha Abdullahi",
//     role: "Mobility & Rehab",
//     image: "/gymnast.webp",
//   },
// ];

// const TrainerCarousel: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const [dir, setDir] = useState(0);

//   // const [width, setWidth] = useState(
//   //   typeof window !== "undefined" ? window.innerWidth : 1200
//   // );
//   const [width, setWidth] = useState<number | null>(null);

//   // useEffect(() => {
//   //   const onResize = () => setWidth(window.innerWidth);
//   //   window.addEventListener("resize", onResize);
//   //   return () => window.removeEventListener("resize", onResize);
//   // }, []);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     handleResize(); // set initial width on mount

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // const isMobile = width < 768;
//   const isMobile = width !== null && width < 768;

//   const next = useCallback(() => {
//     if (index >= trainers.length - 1) return;
//     setDir(1);
//     setIndex((i) => i + 1);
//   }, [index]);

//   const prev = useCallback(() => {
//     if (index <= 0) return;
//     setDir(-1);
//     setIndex((i) => i - 1);
//   }, [index]);

//   const visible = useMemo(() => {
//     const out: Array<{ trainer: Trainer; pos: number }> = [];
//     for (let p = 0; p < Math.min(4, trainers.length); p++) {
//       const idx = (index + p) % trainers.length;
//       out.push({ trainer: trainers[idx], pos: p });
//     }
//     return out;
//   }, [index]);

//   if (width === null) return null;
//   if (!trainers || trainers.length === 0) return null;

//   // NEW smoother configs
//   const getConfig = (pos: number) => {
//     if (isMobile) {
//       const configs = [
//         { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1, z: 40 },
//         { x: 10, y: 12, scale: 0.94, rotate: 6, opacity: 0.9, z: 30 },
//         { x: 20, y: 22, scale: 0.88, rotate: 12, opacity: 0.75, z: 20 },
//         { x: 30, y: 34, scale: 0.82, rotate: 18, opacity: 0.6, z: 10 },
//       ];
//       return configs[pos] || configs[configs.length - 1];
//     }

//     // Desktop improved
//     const configs = [
//       { x: 0, y: 0, scale: 1, rotate: -6, opacity: 1, z: 50 },
//       { x: 36, y: 24, scale: 0.93, rotate: 0, opacity: 0.95, z: 40 },
//       { x: 72, y: 12, scale: 0.86, rotate: 6, opacity: 0.82, z: 30 },
//       { x: 108, y: -8, scale: 0.78, rotate: 24, opacity: 0.7, z: 20 },
//     ];
//     return configs[pos] || configs[configs.length - 1];
//   };

//   const variants = {
//     initial: (custom: { pos: number; direction: number }) => {
//       const cfg = getConfig(custom.pos);
//       const offsetX =
//         custom.direction === 1 ? 80 : custom.direction === -1 ? -80 : 0;

//       return {
//         x: cfg.x + offsetX,
//         y: cfg.y + 30,
//         scale: cfg.scale * 0.96,
//         rotate:
//           cfg.rotate +
//           (custom.direction === 1 ? 6 : custom.direction === -1 ? -6 : 0),
//         opacity: 0,
//       };
//     },

//     animate: (custom: { pos: number }) => {
//       const cfg = getConfig(custom.pos);
//       return {
//         x: cfg.x,
//         y: cfg.y,
//         scale: cfg.scale,
//         rotate: cfg.rotate,
//         opacity: cfg.opacity,
//         zIndex: cfg.z,
//       };
//     },

//     exit: (custom: { pos: number; direction: number }) => {
//       const cfg = getConfig(custom.pos);
//       const exitOffset = custom.direction === 1 ? -120 : 120;

//       return {
//         x: cfg.x + exitOffset,
//         y: cfg.y - 20,
//         scale: cfg.scale * 0.92,
//         rotate: cfg.rotate + (custom.direction === 1 ? -8 : 8),
//         opacity: 0,
//       };
//     },
//   };

//   const onDragEnd = (info: {
//     offset: { x: number };
//     velocity: { x: number };
//   }) => {
//     const { x } = info.offset;
//     const { x: vx } = info.velocity;

//     if (x < -80 || vx < -400) next();
//     else if (x > 80 || vx > 400) prev();
//   };

//   return (
//     <section
//       className="
//         m-4 md:m-16
//         bg-[linear-gradient(180deg,rgba(253,250,239,0.046)_3.45%,rgba(255,253,242,0.2)_100%)]
//         border border-[#FBCC0C33] rounded-3xl
//         p-4 md:p-6 py-10 md:py-20
//         min-h-[600px] md:min-h-[900px]
//         flex items-center
//         shadow-[0px_4px_14px_0px_#0000001A]
//       "
//     >
//       <div className="container xl:max-w-[1440px] mx-auto w-full">
//         <div className="flex justify-between items-center">
//           <h2 className="text-[22px] md:text-[32px] font-[Kumbh] font-semibold leading-[110%]">
//             Meet our Trainers
//           </h2>

//           <Link href="/training-session">
//             <button className="font-[Kumbh] text-[14px] md:text-[16px] leading-[110%]">
//               See all trainers →
//             </button>
//           </Link>
//         </div>

//         <div className="flex items-center justify-center w-full pt-10">
//           <div className="relative w-full flex items-center justify-center">
//             <div className="relative h-[380px] sm:h-[420px] md:h-[620px] flex items-center justify-center">
//               <div
//                 className="relative w-[260px] sm:w-[300px] md:w-[420px] lg:w-[551px]
//                               h-[340px] sm:h-[380px] md:h-[520px] lg:h-[643px]
//                               flex items-center justify-center"
//               >
//                 <AnimatePresence initial={false} custom={dir}>
//                   {visible.map(({ trainer, pos }) => {
//                     const isFront = pos === 0;
//                     const key = `${trainer.id}-${pos}-${index}-${dir}`;

//                     return (
//                       <motion.div
//                         key={key}
//                         custom={{ pos, direction: dir }}
//                         variants={variants}
//                         initial="initial"
//                         animate="animate"
//                         exit="exit"
//                         transition={{
//                           type: "spring",
//                           stiffness: isFront ? 280 : 220,
//                           damping: isFront ? 28 : 26,
//                         }}
//                         style={{
//                           position: "absolute",
//                           top: "50%",
//                           left: "50%",
//                           translate: "-50% -50%",
//                           cursor: isFront ? "grab" : "default",
//                           pointerEvents: isFront ? "auto" : "none",
//                           touchAction: "none",
//                           willChange: "transform",
//                         }}
//                         drag={isFront ? "x" : false}
//                         dragConstraints={{ left: 0, right: 0 }}
//                         dragElastic={0.24}
//                         onDragEnd={(e, info) => isFront && onDragEnd(info)}
//                         whileTap={
//                           isFront ? { cursor: "grabbing", scale: 0.995 } : {}
//                         }
//                         className="
//                           rounded-xl
//                           w-[260px] h-[340px]
//                           sm:w-[300px] sm:h-[380px]
//                           md:w-[420px] md:h-[520px]
//                           lg:w-[551px] lg:h-[643px]
//                         "
//                       >
//                         <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#F6F0D5]">
//                           <Image
//                             src={trainer.image}
//                             alt={trainer.name}
//                             fill
//                             className="object-contain"
//                             priority={pos === 0}
//                           />

//                           <div
//                             className="
//                               absolute left-0 right-0 bottom-0
//                               px-4 py-6
//                               md:px-6 md:py-14
//                               backdrop-blur-[10px]
//                               bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_64.67%,rgba(251,204,12,0.02)_116%)]
//                             "
//                           >
//                             <h3 className="text-lg md:text-[32px] font-semibold font-[Kumbh] text-white leading-[110%] mb-2 md:mb-4">
//                               {trainer.name}
//                             </h3>
//                             <p className="text-xs md:text-base font-[Kumbh] text-white/90">
//                               {trainer.role}
//                             </p>
//                           </div>

//                           {isFront && (
//                             <div
//                               className="
//                                 absolute bg-white top-3 right-3
//                                 w-[38px] h-[38px]
//                                 md:w-[60px] md:h-[60px]
//                                 rounded-full flex items-center justify-center
//                                 shadow-[0px_2px_8px_0px_#0000001A]
//                               "
//                             >
//                               <ArrowIcon />
//                             </div>
//                           )}
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* PREV BUTTON */}
//             <button
//               onClick={prev}
//               disabled={index === 0}
//               className="
//                 absolute left-2 top-1/2 -translate-y-1/2
//                 bg-white rounded-full
//                 w-10 h-10 md:w-12 md:h-12
//                 flex items-center justify-center
//                 shadow z-20 disabled:opacity-30
//               "
//             >
//               <svg
//                 className="w-4 h-4 md:w-5 md:h-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M15 19l-7-7 7-7"
//                   stroke="#111827"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             {/* NEXT BUTTON */}
//             <button
//               onClick={next}
//               disabled={index >= trainers.length - 1}
//               className="
//                 absolute right-2 top-1/2 -translate-y-1/2
//                 bg-white rounded-full
//                 w-10 h-10 md:w-[60px] md:h-[60px]
//                 flex items-center justify-center
//                 shadow z-20 disabled:opacity-30
//               "
//             >
//               <svg
//                 className="w-4 h-4 md:w-5 md:h-5"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M9 5l7 7-7 7"
//                   stroke="#111827"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrainerCarousel;

"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowIcon } from "@/src/components/icons/icons";
import Link from "next/link";

interface Trainer {
  id: number;
  name: string;
  role: string;
  image: string;
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: "Hammed Bello",
    role: "Cardio & Endurance",
    image: "/gymnast.webp",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Yoga & Flexibility",
    image: "/female-trainer.webp",
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "Strength Training",
    image: "/trainer-3.webp",
  },
  {
    id: 4,
    name: "Aisha Abdullahi",
    role: "Mobility & Rehab",
    image: "/gymnast.webp",
  },
];

const TrainerCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width !== null && width < 768;

  const next = useCallback(() => {
    if (index >= trainers.length - 1) return;
    setDir(1);
    setIndex((i) => i + 1);
  }, [index]);

  const prev = useCallback(() => {
    if (index <= 0) return;
    setDir(-1);
    setIndex((i) => i - 1);
  }, [index]);

  const visible = useMemo(() => {
    const out: Array<{ trainer: Trainer; pos: number }> = [];
    for (let p = 0; p < Math.min(4, trainers.length); p++) {
      const idx = (index + p) % trainers.length;
      out.push({ trainer: trainers[idx], pos: p });
    }
    return out;
  }, [index]);

  if (width === null) return null;
  if (!trainers || trainers.length === 0) return null;

  // UPDATED: Mobile config - removed rotation and reduced sizes
  const getConfig = (pos: number) => {
    if (isMobile) {
      const configs = [
        { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1, z: 40 },
        { x: 8, y: 10, scale: 0.92, rotate: 0, opacity: 0.8, z: 30 },
        { x: 16, y: 18, scale: 0.84, rotate: 0, opacity: 0.6, z: 20 },
        { x: 24, y: 26, scale: 0.76, rotate: 0, opacity: 0.4, z: 10 },
      ];
      return configs[pos] || configs[configs.length - 1];
    }

    // Desktop remains the same
    const configs = [
      { x: 0, y: 0, scale: 1, rotate: -6, opacity: 1, z: 50 },
      { x: 36, y: 24, scale: 0.93, rotate: 0, opacity: 0.95, z: 40 },
      { x: 72, y: 12, scale: 0.86, rotate: 6, opacity: 0.82, z: 30 },
      { x: 108, y: -8, scale: 0.78, rotate: 24, opacity: 0.7, z: 20 },
    ];
    return configs[pos] || configs[configs.length - 1];
  };

  const variants = {
    initial: (custom: { pos: number; direction: number }) => {
      const cfg = getConfig(custom.pos);
      const offsetX =
        custom.direction === 1 ? 80 : custom.direction === -1 ? -80 : 0;

      return {
        x: cfg.x + offsetX,
        y: cfg.y + 30,
        scale: cfg.scale * 0.96,
        rotate: cfg.rotate, // Removed extra rotation for mobile
        opacity: 0,
      };
    },

    animate: (custom: { pos: number }) => {
      const cfg = getConfig(custom.pos);
      return {
        x: cfg.x,
        y: cfg.y,
        scale: cfg.scale,
        rotate: cfg.rotate,
        opacity: cfg.opacity,
        zIndex: cfg.z,
      };
    },

    exit: (custom: { pos: number; direction: number }) => {
      const cfg = getConfig(custom.pos);
      const exitOffset = custom.direction === 1 ? -120 : 120;

      return {
        x: cfg.x + exitOffset,
        y: cfg.y - 20,
        scale: cfg.scale * 0.92,
        rotate: cfg.rotate, // Removed extra rotation for mobile
        opacity: 0,
      };
    },
  };

  const onDragEnd = (info: {
    offset: { x: number };
    velocity: { x: number };
  }) => {
    const { x } = info.offset;
    const { x: vx } = info.velocity;

    if (x < -80 || vx < -400) next();
    else if (x > 80 || vx > 400) prev();
  };

  return (
    <section
      className="
        m-4 md:m-16 
        bg-[linear-gradient(180deg,rgba(253,250,239,0.046)_3.45%,rgba(255,253,242,0.2)_100%)]
        border border-[#FBCC0C33] rounded-3xl 
        p-4 md:p-6 py-8 md:py-20 
        min-h-[400px] md:min-h-[900px]  // REDUCED mobile height
        flex items-center 
        shadow-[0px_4px_14px_0px_#0000001A]
      "
    >
      <div className="container xl:max-w-[1440px] mx-auto w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] md:text-[32px] font-[Kumbh] font-semibold leading-[110%]">
            Meet our Trainers
          </h2>

          <Link href="/training-session">
            <button className="font-[Kumbh] text-[12px] md:text-[16px] leading-[110%]">
              See all trainers →
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-center w-full pt-6 md:pt-10">
          <div className="relative w-full flex items-center justify-center">
            {/* REDUCED container heights for mobile */}
            <div className="relative h-[280px] sm:h-[320px] md:h-[620px] flex items-center justify-center">
              <div
                className="relative 
                  w-[200px] h-[260px]        // REDUCED mobile size
                  sm:w-[260px] sm:h-[320px]  // Adjusted small screen
                  md:w-[420px] md:h-[520px] 
                  lg:w-[551px] lg:h-[643px] 
                  flex items-center justify-center"
              >
                <AnimatePresence initial={false} custom={dir}>
                  {visible.map(({ trainer, pos }) => {
                    const isFront = pos === 0;
                    const key = `${trainer.id}-${pos}-${index}-${dir}`;

                    return (
                      <motion.div
                        key={key}
                        custom={{ pos, direction: dir }}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                          type: "spring",
                          stiffness: isFront ? 280 : 220,
                          damping: isFront ? 28 : 26,
                        }}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          translate: "-50% -50%",
                          cursor: isFront ? "grab" : "default",
                          pointerEvents: isFront ? "auto" : "none",
                          touchAction: "none",
                          willChange: "transform",
                        }}
                        drag={isFront ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.24}
                        onDragEnd={(e, info) => isFront && onDragEnd(info)}
                        whileTap={
                          isFront ? { cursor: "grabbing", scale: 0.995 } : {}
                        }
                        className="
                          rounded-xl 
                          w-[200px] h-[260px]        // REDUCED mobile size
                          sm:w-[260px] sm:h-[320px]  // Adjusted small screen
                          md:w-[420px] md:h-[520px]
                          lg:w-[551px] lg:h-[643px]
                        "
                      >
                        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#F6F0D5]">
                          <Image
                            src={trainer.image}
                            alt={trainer.name}
                            fill
                            className="object-contain"
                            priority={pos === 0}
                          />

                          <div
                            className="
                              absolute left-0 right-0 bottom-0 
                              px-3 py-4                    // REDUCED padding for mobile
                              md:px-6 md:py-14
                              backdrop-blur-[10px]
                              bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_64.67%,rgba(251,204,12,0.02)_116%)]
                            "
                          >
                            <h3 className="text-[14px] md:text-[32px] font-semibold font-[Kumbh] text-white leading-[110%] mb-1 md:mb-4">
                              {trainer.name}
                            </h3>
                            <p className="text-[10px] md:text-base font-[Kumbh] text-white/90">
                              {trainer.role}
                            </p>
                          </div>

                          {isFront && (
                            <div
                              className="
                                absolute bg-white top-2 right-2    // Adjusted position for mobile
                                w-[32px] h-[32px]                 // REDUCED size for mobile
                                md:w-[60px] md:h-[60px]
                                rounded-full flex items-center justify-center
                                shadow-[0px_2px_8px_0px_#0000001A]
                              "
                            >
                              <ArrowIcon className="w-3 h-3 md:w-auto md:h-auto" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* PREV BUTTON - made smaller for mobile */}
            <button
              onClick={prev}
              disabled={index === 0}
              className="
                absolute left-1 top-1/2 -translate-y-1/2    // Adjusted position
                bg-white rounded-full 
                w-8 h-8 md:w-12 md:h-12                    // REDUCED mobile size
                flex items-center justify-center 
                shadow z-20 disabled:opacity-30
              "
            >
              <svg
                className="w-3 h-3 md:w-5 md:h-5" // REDUCED mobile size
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="#111827"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* NEXT BUTTON - made smaller for mobile */}
            <button
              onClick={next}
              disabled={index >= trainers.length - 1}
              className="
                absolute right-1 top-1/2 -translate-y-1/2   // Adjusted position
                bg-white rounded-full 
                w-8 h-8 md:w-[60px] md:h-[60px]           // REDUCED mobile size
                flex items-center justify-center 
                shadow z-20 disabled:opacity-30
              "
            >
              <svg
                className="w-3 h-3 md:w-5 md:h-5" // REDUCED mobile size
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke="#111827"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerCarousel;
