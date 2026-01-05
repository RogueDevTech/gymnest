"use client";
import { trainingSessions } from "@/src/components/ListingData";
import { use } from "react";
import TrainingClient from "./TrainingClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: Props) {
  const { slug } = use(params);
  const session = trainingSessions.find((p) => p.slug === slug);

  if (!session) {
    return <div className="p-10 text-red-500">Training session not found</div>;
  }

  return <TrainingClient session={session} />;
}


