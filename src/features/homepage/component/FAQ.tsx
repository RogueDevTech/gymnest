

"use client";
import React, { useState } from "react";
import { faqs } from "@/src/components/ListingData";
import { PlusIcon, TimesIcon } from "@/src/components/icons/icons";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div
      className="flex flex-col p-4 w-ful h-auto m-2 md:m-18 shadow-[0px_4px_4px_0px_#00000040]
 gap-12 bg-[#9B9B9B1A] rounded-xl"
    >
      <div className="2xl:max-w-[1440px] 2xl:mx-auto">
        <h2 className="mt-[60px] md:px-5 font-[Kumbh]  font-semibold text-[32px] leading-[100%] tracking-normal">
          Frequently asked questions
        </h2>
      </div>
      <div className="flex flex-col 2xl:max-w-[1440px] 2xl:mx-auto">
        {faqs.map((item: FAQItem, index: number) => (
          <div
            key={index}
            className={`m-2 md:m-5 border border-[#D8D8D8] p-4 mb-4 gap-4 rounded-lg transition-all duration-300 ${
              activeQuestion === index ? "bg-gray-100" : ""
            }`}
          >
            <div
              onClick={() => toggle(index)}
              className="flex justify-between rounded-xl items-center cursor-pointer"
            >
              <span className="font-[Kumbh] font-medium text-[18px] md:text-[20px] leading-[120%] md:leading-[100%] text-[#111111]">
                {item.question}
              </span>
              <div className="flex items-center border border-[#000000] justify-center h-[25px] w-[25px] rounded-full p-2">
                {activeQuestion === index ? <TimesIcon /> : <PlusIcon />}
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeQuestion === index
                  ? "max-h-[300px] opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-[Kumbh] font-regular max-w-[900px] text-[14px] md:text-[16px] leading-[130%] md:leading-[120%] text-[#717171] tracking-normal">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
