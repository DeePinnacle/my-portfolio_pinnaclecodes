"use client";

import { InfiniteMovingCards } from "../ui/moving-cards";
import { testimonials } from "@/data/data"

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-[#050505e3] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

