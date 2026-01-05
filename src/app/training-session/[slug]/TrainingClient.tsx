"use client";
import React, { useState } from "react";
import Breadcrumb from "@/src/components/Breadcrumb";
import Image from "next/image";
import { Session } from "@/src/components/ListingData";
import { useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { useBookingStore } from "@/src/store/bookingStore";

interface TrainingClientProps {
  session: Session;
}

export default function TrainingClient({ session }: TrainingClientProps) {
  const setBooking = useBookingStore((state) => state.setBooking);
  const [selectedSessionType, setSelectedSessionType] =
    useState("Studio Session");
  const [selectedPackage, setSelectedPackage] = useState("1 Session");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Lekki");
  const [selectedTime, setSelectedTime] = useState("");
  const router = useRouter();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Trainer", href: "/training-session" },
    { label: session.name },
  ];

  const sessionTypes = [
    "Studio Session",
    "Virtual Session",
    "Home Session (+₦4,000)",
  ];

  const packages = [
    "1 Session",
    "3 Sessions (₦23,000)",
    "5 Sessions (₦30,000)",
  ];

  const locations = ["Lekki", "Yaba", "Surulere"];
  const availableTimes = ["7:30 am", "8:30 am", "6:00 pm", "7:30 pm"];

  const handleBookTrainer = () => {
    setBooking({
      trainer: session,
      type: selectedSessionType,
      package: selectedPackage,
      date: selectedDate,
      location: selectedLocation,
      time: selectedTime,
      price: 9000,
    });

    router.push("/checkout");
  };

  return (
    <div className="max-w-[1440px] py-15 mx-auto px-4 lg:px-16 lg:pt-20 lg:pb-10 2xl:py-20">
      <div className="my-15">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-10 mt-8">
        <div className="relative h-full">
          <div className="relative w-full h-[480px] rounded-lg overflow-hidden bg-[#F6F0D5]">
            <Image
              src={session.img}
              alt={session.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="p-4 bg-[#ffffff] h-auto">
            <h2 className="font-[Kumbh] font-semibold text-[24px] leading-[110%] tracking-normal pb-4">
              {session.name}
            </h2>

            <p className="text-[#7A7A7A] font-regular text-[16px] font-[Kumbh] pb-4 border-b border-[#D8D8D8] leading-[110%] tracking-normal">
              {session.session}
            </p>
            <div className="mt-12">
              <h3 className="text-[18px] font-medium leading-[110%] tracking-normal font-[Kumbh]">
                About {session.name.split(" ")[0]}
              </h3>

              <p className="mt-6 font-[Kumbh] text-[16px] font-regular leading-[130%] text-[#484747]">
                A certified fitness coach specializing in cardio and endurance.
                {session.name.split(" ")[0]} helps clients build stamina,
                improve heart health, and sustain progress with structured,
                high-energy sessions tailored to your pace.
              </p>

              <div className="flex items-center gap-4 mt-4">
                <div className="px-3 py-2 border border-[#9897971A] bg-[#F2F2F2] rounded-lg text-[#393838] leading-[110%] tracking-normal text-[16px] font-[Kumbh]">
                  6+ years of experience
                </div>
                <div className="px-3 py-2 border border-[#9897971A] bg-[#F2F2F2] rounded-lg text-[#393838] leading-[110%] tracking-normal text-[16px] font-[Kumbh]">
                  ⭐ 4.8 rating
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className=" text-[18px] border-t border-[#D8D8D8] pt-4 leading-[110%] tracking-normal font-medium font-[Kumbh]">
                Certifications
              </h3>

              <ul className="list-disc text-[#484747] pl-5 mt-4 flex flex-col gap-3 font-[Kumbh] tracking-normal text-[16px] font-regular leading-[150%]">
                <li>ACE® Certified Personal Trainer</li>
                <li>CPR & First Aid Certified</li>
                <li>Sports Nutrition (Foundations)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-0 rounded-lg p-6 bg-[#FFFFFF]">
          <h2 className="text-[20px] font-[Kumbh] font-semibold leading-[100%] tracking-normal">
            ₦9,000
          </h2>
          <p className="font-regular text-[16px] font-[Kumbh] pt-4 pb-4 border-b border-[#B6B2B2] leading-[100%] tracking-normal">
            per session
          </p>

          <h3 className="text-[20px] font-[Kumbh] font-semibold leading-[100%] tracking-normal pt-4">
            Session Time
          </h3>
          <p className="font-regular text-[16px] font-[Kumbh] pt-4 pb-4 leading-[100%] tracking-normal">
            50–60 minutes
          </p>
          <div className="">
            <h3 className="font-[Kumbh] text-[20px] leading-[100%] tracking-normal font-semibold mt-6 mb-3">
              Session type
            </h3>

            <div className="space-y-3">
              {sessionTypes.map((label) => (
                <label
                  key={label}
                  className="flex items-center gap-2 cursor-pointer border border-[#DEDEDE] rounded-lg py-3 px-5"
                >
                  <input
                    type="radio"
                    name="sessionType"
                    className="scale-110 accent-black"
                    checked={selectedSessionType === label}
                    onChange={() => setSelectedSessionType(label)}
                  />
                  <div className="font-[Kumbh] font-regular text-[16px] leading-[110%] tracking-normal">
                    {label}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-[Kumbh] text-[20px] leading-[100%] tracking-normal font-semibold mt-6 mb-3">
              Packages
            </h3>
            {packages.map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer border border-[#DEDEDE] rounded-lg py-3 px-5"
              >
                <input
                  type="radio"
                  name="sessionPackage"
                  className="scale-110 accent-black"
                  checked={selectedPackage === item}
                  onChange={() => setSelectedPackage(item)}
                />
                <div className="font-[Kumbh] font-regular text-[16px] leading-[110%] tracking-normal">
                  {item}
                </div>
              </label>
            ))}
          </div>

          <h3 className="font-[Kumbh] text-[20px] leading-[100%] tracking-normal font-semibold mt-6 mb-3">
            Session Schedule
          </h3>
          <div>
            <label
              htmlFor=""
              className="font-[Kumbh] font-regular text-[16px] leading-[100%] tracking-normal text-[#B2B2B2]"
            >
              Choose date
            </label>
            <input
              type="date"
              className="border border-[#E7E4E4] mt-4 font-regular text-[16px] text-[#222222] leading-[100%] rounded-lg px-3 py-4 w-full font-[Kumbh] focus:outline-none"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div className="relative w-full mt-6">
            <select
              className="
      border border-[#E7E4E4] 
      font-regular text-[16px] text-[#222222] leading-[100%] 
      rounded-lg 
      px-4 pr-10 py-4 w-full font-[Kumbh] 
      focus:outline-none 
      appearance-none    /* REMOVE DEFAULT ARROW */
    "
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <FiChevronDown
              className="
      absolute 
      right-4 
      top-1/2 
      -translate-y-1/2 
      pointer-events-none
      text-[#222222]
    "
              size={20}
            />
          </div>
          <div className="mt-6">
            <label
              htmlFor=""
              className="font-[Kumbh] font-regular text-[16px] leading-[100%] tracking-normal text-[#B2B2B2]"
            >
              Available Time
            </label>
            <div className="grid grid-cols-4 gap-2 mt-4">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  className={`border border-[#E7E4E4] px-4 py-2 outline-0 rounded-lg text-[16px] font-regular leading-[100%] font-[Kumbh] transition ${
                    selectedTime === time
                      ? "bg-[#FBCC0C] text-[#222222]"
                      : "hover:bg-yellow-400"
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button
            className="w-full mt-6 bg-[#FBCC0C] py-3 px-4 rounded-lg font-[Kumbh] text-[#1B1A1A] text-[16px] tracking-normal hover:bg-yellow-600 transition-colors"
            onClick={handleBookTrainer}
          >
            Book Trainer
          </button>
        </div>
      </div>
    </div>
  );
}
