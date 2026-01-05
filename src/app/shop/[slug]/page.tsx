"use client";
import { products } from "@/src/components/ListingData";
import CheckoutClient from "./CheckoutClient";
import { use } from "react"; // Import the use hook

interface Props {
  params: Promise<{ slug: string }>; // params is now a Promise
}

export default function Page({ params }: Props) {
  // Unwrap the params using React.use()
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-10 text-red-500">Product not found</div>;
  }

  return <CheckoutClient product={product} />;
}
