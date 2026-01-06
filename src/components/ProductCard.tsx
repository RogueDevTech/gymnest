"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProductType } from "./ListingData";

interface ProductCardProps {
  item: ProductType;
}

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <Link href={`/shop/${item.slug}`}>
      <motion.div
        className="flex flex-col gap-2 cursor-pointer"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        viewport={{ once: true }}
      >
        <div className="relative p-3 rounded-2xl bg-[#EBEBEB] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-center py-6">
            <Image
              src={item.img}
              alt={item.title}
              width={194}
              height={194}
              className="object-contain rounded-lg"
            />
          </div>
          <div className="absolute bottom-5 right-3">{item.icons}</div>
        </div>
        <div className="px-1">
          <h4 className="font-[Kumbh] font-medium text-[16px] leading-[110%] mb-2">
            {item.title}
          </h4>
          <p className="font-[Kumbh] text-[14px] text-[#484747] leading-5 mb-2">
            {item.desc}
          </p>
          <p className="font-[Kumbh] font-bold text-[16px] leading-[100%] ">
            ₦{item.price.toLocaleString()}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
