"use client";
import React, { useState } from "react";
import Breadcrumb from "@/src/components/Breadcrumb";
import ProductCard from "@/src/components/ProductCard";
import { products } from "@/src/components/ListingData";
import { ProductType } from "@/src/components/ListingData";

type SortType = "default" | "low" | "high";

const Listing = () => {
  const [sort, setSort] = useState<SortType>("default");

  const sortedProducts: ProductType[] = [...products].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="lg:px-16 lg:py-22 px-4 py-10">
      <div className="my-15">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      </div>
      <h3 className="font-[MainluxBold] font-regular text-[32px] leading-[110%] tracking-normal mb-2">
        Explore Our Shop
      </h3>
      <p className="font-[Kumbh] text-[16px] leading-[110%] tracking-normal font-regular mb-6">
        Find the perfect gear to power your workouts 
      </p>
      <div className="flex items-center justify-end mb-6">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortType)}
          className="border border-[#989797] px-3 py-2 rounded-lg font-[Kumbh] font-regular text-[16px] leading-[110%] tracking-normal outline-0"
        >
          <option value="default">Default</option>
          <option value="low">Lowest Price</option>
          <option value="high">Highest Price</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {sortedProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Listing;
