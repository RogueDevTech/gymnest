// src/store/bookingStore.ts
"use client";

import { create } from "zustand";
import { Session } from "@/src/components/ListingData";

export interface BookingType {
  trainer: Session;
  type: string;
  package: string;
  date: string;
  location: string;
  time: string;
  price: number;
}

interface BookingState {
  booking: BookingType | null;
  setBooking: (data: BookingType) => void;
  clearBooking: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  booking: null,

  setBooking: (data) => set({ booking: data }),
  clearBooking: () => set({ booking: null }),
}));
