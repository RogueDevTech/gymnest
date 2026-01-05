

"use client";

import React from "react";
import Image from "next/image";
import { Session } from "./ListingData";
import Link from "next/link";
import { ArrowIcon } from "@/src/components/icons/icons";
import { motion } from "framer-motion";

interface TrainerCardProps {
  trainer: Session;
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <Link href={`/training-session/${trainer.slug}`}>
      <motion.div
        className="
          relative rounded-lg overflow-hidden shadow-[0px_2.94px_6.84px_#00000040] 
          bg-[#F6F0D5] 
          w-full
          h-[300px] sm:h-[350px] md:h-[400px] lg:h-[472px]
          mx-auto
          hover:scale-105 transition-transform duration-300
        "
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Image Container - This is crucial for mobile */}
        <div className="relative w-full h-full">
          <Image
            src={trainer.img}
            alt={trainer.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>

        {/* Overlay */}
        <div
          className="
          absolute left-0 right-0 bottom-0 px-4 py-4 md:px-6 md:py-14 
          backdrop-blur-[10px] 
          bg-[linear-gradient(0deg,rgba(0,0,0,0.2)_64.67%,rgba(251,204,12,0.02)_116%)] 
          flex flex-col items-center justify-center
        "
        >
          <h3 className="text-base md:text-lg lg:text-2xl font-semibold font-[Kumbh] text-white leading-[110%] mb-1 md:mb-2 lg:mb-4 text-center">
            {trainer.name}
          </h3>
          <p className="text-xs md:text-sm lg:text-base font-[Kumbh] text-white/90 text-center">
            {trainer.session}
          </p>
        </div>

        {/* Arrow Button */}
        <div
          className="
          absolute top-3 right-3 
          w-[32px] h-[32px] md:w-[38px] md:h-[38px] lg:w-[60px] lg:h-[60px]
          rounded-full bg-white flex items-center justify-center 
          shadow-[0px_2px_8px_0px_#0000001A]
        "
        >
          <ArrowIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-auto lg:h-auto" />
        </div>
      </motion.div>
    </Link>
  );
}
