import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function WordFlip() {
  const words = ["Frontend developer", "Backend developer", "Fullstack developer", "Responsive Web Designer", "Web app developer"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="mx-auto font-normal text-[gray] dark:text-neutral-400">
        I&apos;m, a passionate { /*<FlipWords words={words} /> */} specializing in crafting modern, responsive, and user-focused websites. From intuitive interfaces to robust functionality, I bring your vision to life with clean and efficient code.
      </div>
    </div>
  );
}
