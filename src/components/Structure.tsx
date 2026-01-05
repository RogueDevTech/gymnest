"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface TreadmillGridProps {
  img: string | StaticImageData;
  icons: React.ReactElement;
  model: string;
  features: string;
  price: number;
}

const Structure: React.FC<TreadmillGridProps> = ({
  img,
  icons,
  model,
  features,
  price,
}) => {
  return (
    <Link
      href="/shop
    "
    >
      <motion.div
        className="flex flex-col gap-4 cursor-pointer"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        viewport={{ once: true }}
      >
        <div className="relative p-4 rounded-2xl bg-[#EBEBEB] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="absolute  bg-[#443702] text-white font-[Kumbh] text-sm px-3 py-1 rounded-md shadow-sm">
            New
          </div>
          <div className="flex items-center justify-center py-6">
            <Image
              src={img}
              alt={model}
              width={232}
              height={232}
              className="object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-5 right-3 text-[#443702]">
            {icons}
          </div>
        </div>
        <div className="px-1">
          <h4 className="font-[Kumbh] font-medium text-[24px] lg:text-[17px] text-[#1a1a1a] leading-snug mb-2">
            {model}
          </h4>
          <p className="font-[Kumbh] text-[14px] text-[#484747] leading-relaxed mb-2">
            {features}
          </p>
          <p className="font-[Kumbh] font-semibold lg:font-bold text-[16px]">
            ${price}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Structure;
