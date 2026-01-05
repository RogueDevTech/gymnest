"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import Modal from "@/src/components/Modal";
import Breadcrumb from "@/src/components/Breadcrumb";
import { useBookingStore, BookingType } from "@/src/store/bookingStore";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [showModal, setShowModal] = useState(false);

  const booking = useBookingStore((s) => s.booking) as BookingType | null;

  const trainerName = booking?.trainer?.name ?? "Unknown Trainer";
  const trainerSession = booking?.trainer?.session ?? "Fitness Session";
  const trainerImage = booking?.trainer?.img ?? "/placeholder.png";

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-16 lg:pt-20 lg:pb-10 2xl:py-20 py-15">
      {/* Breadcrumb */}
      <div className="my-15">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Trainers", href: "/training-session" },
            { label: "Verification", href: "/verification" },
            { label: "Checkout", href: "/checkout" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10">
        <div className="flex flex-col gap-4 ">
          <div className="border border-[#E2DFDF] bg-[#FFFFFF] py-6 px-5 rounded-lg shadow-[0px_0px_4px_0px_#0000001A]">
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-semibold font-[Kumbh]">
                Payment Method
              </h2>
              <FiChevronDown />
            </div>
            <div className="rounded-lg border-2 border-[#DEDEDE] mt-6 mb-6">
              <div className="flex items-center justify-between py-3 px-5 border-b border-[#EEE9E9]">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="mt-1"
                  />
                  <p className="font-[Kumbh] font-regular text-[16px] leading-[100%] tracking-normal">
                    Credit Card
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/visa-emblem.png"
                    alt="img"
                    width={40}
                    height={23}
                  />
                  <Image
                    src="/master-emblem.png"
                    alt="img"
                    width={40}
                    height={23}
                  />
                </div>
              </div>
              {paymentMethod === "card" && (
                <div className="space-y-4 px-5 py-3">
                  <div className="">
                    <div className="text-[16px] font-regular leading-[110%] tracking-normal font-[Kumbh] mb-2">
                      Card number
                    </div>
                    <input
                      className="w-full border-0 rounded-lg p-3 focus:outline-none font-[Kumbh] bg-[#F2F2F2] font-regular text-[16px] text-[#A8A8A8] leading-[110%] tracking-normal"
                      placeholder="Enter card number"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[16px] font-regular leading-[110%] tracking-normal font-[Kumbh] mb-2">
                        Expiry date
                      </div>
                      <input
                        className="w-full border-0 rounded-lg p-3 focus:outline-none font-[Kumbh] bg-[#F2F2F2] font-regular text-[16px] text-[#000000] leading-[110%] tracking-normal"
                        placeholder="(mm/yy)"
                      />
                    </div>
                    <div>
                      <div className="text-[16px] font-regular leading-[110%] tracking-normal font-[Kumbh] mb-2">
                        CCV
                      </div>
                      <input
                        className="w-full border-0 rounded-lg p-3 focus:outline-none font-[Kumbh] bg-[#F2F2F2] font-regular text-[16px] leading-[110%] text-[#000000]  tracking-normal"
                        placeholder="***"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-[16px] font-regular leading-[110%] tracking-normal font-[Kumbh] mb-2">
                      Name on card
                    </div>
                    <input
                      className="w-full border-0 rounded-lg p-3 focus:outline-none font-[Kumbh] bg-[#F2F2F2] font-regular text-[16px] leading-[110%] text-[#000000]  tracking-normal"
                      placeholder="card number"
                    />
                  </div>
                </div>
              )}
            </div>

            <label
              className={`flex items-center gap-3 border border-[#DEDEDE] p-5 rounded-lg cursor-pointer transition ${
                paymentMethod === "paypal"
                  ? "border-[#FBCC0C] bg-[#FFF9E6]"
                  : ""
              }`}
              onClick={() => setPaymentMethod("paypal")}
            >
              <input
                type="radio"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              <span className="font-[Kumbh] font-regular text-[16px] leading-[110%] tracking-normal">
                Paypal
              </span>
            </label>
          </div>

          <div className="flex gap-8 mt-6">
            <button className="flex-1 py-4 px-3 bg-[#DFDFDF] rounded-lg font-[Kumbh] font-meduim text-[16px] leading-[110%] text-[#1B1A1A] transition">
              Cancel Booking
            </button>
            <button
              className="flex-1 py-4 px-3 bg-[#FDF4CD] rounded-lg font-[Kumbh] font-meduim text-[16px] leading-[110%] text-[#1B1A1A] transition"
              onClick={() => setShowModal(true)}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
        <div className="border border-[#E2DFDF] py-6 px-5 rounded-lg shadow-[0px_0px_4px_0px_#0000001A] bg-[#ffffff]">
          <h2 className="font-semibold leading-[110%] tracking-normal text-[20px] font-[Kumbh]">
            Order Summary
          </h2>

          <div className="flex items-center gap-4 mt-4">
            <Image
              src={trainerImage}
              width={80}
              height={80}
              className="rounded-lg object-cover"
              alt={trainerName}
            />

            <div>
              <p className="font-[Kumbh] font-semibold font-regular leading-[110%] text-[17px]">
                {trainerName}
              </p>
              <p className="text-[#484747] font-[Kumbh] text-[14px] font-regular leading-[110%] mt-3">
                {trainerSession}
              </p>
            </div>
          </div>

          <div className=" pt-4 space-y-2 pb-4">
            <div className="">
              <h3 className="mb-2 font-[Kumbh] font-regular text-sm leading-none tracking-normal text-[#5C5C5C]">
                Location{" "}
              </h3>
              <p className="font-[Kumbh] font-medium text-base leading-none tracking-normal">
                {booking?.location ?? "—"}
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-[Kumbh] font-regular text-sm leading-none tracking-normal text-[#5C5C5C]">
                Session Type
              </h3>
              <p className="font-[Kumbh] font-medium text-base leading-none tracking-normal">
                {booking?.type ?? "—"}
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-[Kumbh] font-regular text-sm leading-none tracking-normal text-[#5C5C5C]">
                Package
              </h3>
              <p className="font-[Kumbh] font-medium text-base leading-none tracking-normal">
                {booking?.package ?? "—"}
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-[Kumbh] font-regular text-sm leading-none tracking-normal text-[#5C5C5C]">
                Time
              </h3>
              <p className="font-[Kumbh] font-medium text-base leading-none tracking-normal">
                {booking?.time ?? "—"}
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-[Kumbh] font-regular text-sm leading-none tracking-normal text-[#5C5C5C]">
                Date
              </h3>
              <p className="font-[Kumbh] font-medium text-base leading-none tracking-normal">
                {booking?.date ?? "—"}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E1E1E1] flex gap-3">
            <input
              className="rounded-lg p-5 w-full border h-11 border-[#DEDEDE] focus:outline-none font-[Kumbh]"
              placeholder="Discount or Gift Code"
            />
            <button className="px-5 h-11 rounded-lg bg-[#E7E7E7] text-base font-regular text-[#222222] leading-[110%] tracking-normal  border border-[#DEDEDE] font-[Kumbh]">
              Apply
            </button>
          </div>

          <div className="mt-6 font-[Kumbh]">
            <div className="flex justify-between">
              <p className="font-[Kumbh] font-normal text-base leading-none tracking-normal">
                Subtotal
              </p>
              <p className="font-[Kumbh] font-medium text-base leading-none tracking-normal">
                ₦{booking?.price ?? "0"}
              </p>
            </div>
            <div className="flex justify-between mt-6">
              <p className="font-[Kumbh] font-semibold text-base leading-none tracking-normal">
                Total
              </p>
              <p className="font-[Kumbh] font-bold text-base leading-none tracking-normal">
                ₦{booking?.price ?? "0"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-lg font-bold mb-4 font-[Kumbh]">
          Payment Coming Soon
        </h2>
        <p className="text-[#444] mb-4 font-[Kumbh]">
          Your payment gateway will be integrated shortly.
        </p>
        <button
          className="bg-black text-white py-2 px-5 rounded-lg font-[Kumbh]"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
