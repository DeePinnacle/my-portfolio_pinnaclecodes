"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image"
import { BriefcaseBusiness } from "lucide-react"; 

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: StaticImageData;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {
          items.map((item, idx)=>(
            <div key={idx} className="w-96 h-70 bg-black/40 px-3 py-6 rounded-md shadow-xl shadow-black">
              <div className="flex flex-row items-center gap-4 my-2">
                <div className="w-11 h-11 relative rounded-full p-2 bg-white overflow-hidden">
                  <Image src={item.image} alt={item.name} fill priority objectFit="cover" objectPosition="center" />
                </div>
                <span>
                  <span className="flex flex-row item-center gap-2">
                    <div className="w-9 h-9 relative overflow-hidden">
                      <Image src="/NigeriaFlag.png" alt="country-flag" fill priority objectFit="cover" objectPosition="center"  />
                    </div>
                    <p className="md:text-2xl lg:text-xl">{item.name}</p>
                  </span>                  
                  <span className="flex flex-row item-center gap-2">
                    < BriefcaseBusiness className="" />
                    <p className="md:text-2xl lg:text-xl">{item.title}</p>
                  </span>
                </span>
              </div>
              <p className="md:text-xl lg:text-base">{item.quote}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};
