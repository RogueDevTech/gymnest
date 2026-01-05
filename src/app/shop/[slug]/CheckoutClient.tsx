

import React, { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/src/components/Breadcrumb";
import { ProductType } from "@/src/components/ListingData";

interface CheckoutClientProps {
  product: ProductType;
}

export default function CheckoutClient({ product }: CheckoutClientProps) {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [discountCode, setDiscountCode] = useState("");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
    { label: "Checkout", href: "/checkout" },
    { label: "Payment" },
  ];

  const shippingInfo = {
    name: "John Doe",
    phone: "234 0810000000",
    address: "72 Mobalaji Johnson avenue",
    city: "Victoria Island, Lagos, Nigeria",
    postalCode: "000000",
  };

  const handleApplyDiscount = () => {
    console.log("Applying discount:", discountCode);
  };

  return (
    <div className="px-4 py-16 lg:px-16 lg:py-22 lg:max-w-[1440px] lg:mx-auto">
      <div className="my-6 lg:my-15">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div
            className="border border-[#E2DFDF] py-4 px-4 shadow-[0px_0px_4px_0px_#0000001A]
 rounded-lg bg-white"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base lg:text-lg">
                Shipping Details
              </h3>
              <button className="text-blue-500 hover:text-blue-600 transition-colors text-sm">
                Change
              </button>
            </div>
            <div className="mt-3 text-sm">
              <p className="font-medium">{shippingInfo.name}</p>
              <p>{shippingInfo.phone}</p>
              <p>{shippingInfo.address}</p>
              <p>{shippingInfo.city}</p>
              <p>{shippingInfo.postalCode}</p>
            </div>
          </div>

          {/* Shipping Method */}
          <div
            className="border border-[#E2DFDF] py-4 px-4 shadow-[0px_0px_4px_0px_#0000001A]
 rounded-lg bg-white"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base lg:text-lg">
                Shipping Method
              </h3>
              <button className="text-blue-500 hover:text-blue-600 transition-colors text-sm">
                Change
              </button>
            </div>
            <div className="mt-3 text-sm">
              <p className="font-medium">Standard Delivery</p>
              <p>Estimated delivery: 3-5 business days</p>
              <p>Free shipping</p>
            </div>
          </div>

          {/* Payment Method */}
          <div
            className="border border-[#E2DFDF] py-4 px-4 shadow-[0px_0px_4px_0px_#0000001A]
 rounded-lg bg-white"
          >
            <h3 className="font-semibold text-base lg:text-lg mb-3">
              Payment Method
            </h3>

            {/* Credit Card */}
            <label className="flex items-center gap-2 cursor-pointer mb-3">
              <input
                type="radio"
                name="payment-method"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="accent-black"
              />
              <span className="font-medium text-sm lg:text-base">
                Credit Card
              </span>
            </label>

            {paymentMethod === "card" && (
              <div className="mt-3 flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Card number"
                  className="border rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Expiry date (mm/yy)"
                    className="border rounded px-3 py-3 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="border rounded px-3 py-3 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Name on card"
                  className="border rounded px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
            )}

            {/* PayPal */}
            <label className="flex items-center gap-2 mt-4 cursor-pointer">
              <input
                type="radio"
                name="payment-method"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                className="accent-black"
              />
              <span className="font-medium text-sm lg:text-base">PayPal</span>
            </label>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <div className="border border-[#E2DFDF] py-4 px-4 shadow-[0px_0px_4px_0px_#0000001A] rounded-lg bg-white lg:sticky lg:top-6">
            <h3 className="font-semibold font-[Kumbh] text-[18px] lg:text-[20px] leading-none tracking-normal mb-4">
              Order Summary
            </h3>

            {/* Product Item */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 lg:w-12.5 lg:h-12.5 shrink-0 bg-[#F5F5F5] rounded">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{product.title}</p>
                <p className="font-[Kumbh] text-sm lg:text-base font-normal leading-[110%] tracking-normal text-[#484747]">
                  ₦{product.price.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Discount Code */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="border border-[#DEDEDE] text-black font-[Kumbh] font-normal text-sm lg:text-base leading-[110%] tracking-normal rounded-lg px-3 py-2 w-full h-10"
              />
              <button
                onClick={handleApplyDiscount}
                className="bg-[#E7E7E7] px-3 lg:px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm lg:text-base text-[#222222] font-normal whitespace-nowrap"
              >
                Apply
              </button>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>₦{product.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span>₦0.00</span>
              </div>
            </div>

            <hr className="my-3" />

            {/* Total */}
            <div className="flex justify-between text-base lg:text-lg font-semibold mb-4">
              <span>Total</span>
              <span>₦{product.price.toLocaleString()}</span>
            </div>

            {/* Checkout Button */}
            <button className="bg-yellow-500 w-full py-3 rounded font-medium hover:bg-yellow-600 transition-colors text-sm lg:text-base">
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
