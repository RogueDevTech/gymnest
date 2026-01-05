

"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="text-sm flex items-center gap-2 my-4 py-3 px-5 bg-[#EBEBEB] rounded-lg ">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-[#6D6D6D] hover:text-[#222222]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-black">{item.label}</span>
          )}

          {index !== items.length - 1 && <span>{">"}</span>}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
