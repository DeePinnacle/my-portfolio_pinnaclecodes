"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="gen-container">
      <div className="gen-wrapper lg:pb-40 lg:pt-24">
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
              },
            }}
            viewport={{
              once: true,
            }}
            className="text-5xl font-jost lg:text-4xl lg:text-center"
          >
            Happy Feet, Happy Lives: What Our Customers Say
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 200,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2.3,
              },
            }}
            viewport={{
              once: true,
            }}
            className="mt-2 mb-14 md:text-2xl md:mb-16 lg:text-base lg:w-2/3 lg:text-center lg:pb-20"
          >
            Discover how our shoes combine style, support, and comfort to keep
            our customers walking confidently every day. Hear firsthand why they
            love our footwear and how it&apos;s made a difference in their
            lives.
          </motion.p>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2.5,
            },
          }}
          viewport={{
            once: true,
          }}
          className="relative grid grid-cols-1 lg:grid-cols-2  gap-20"
        >
          <div>
            <div className="relative w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 999
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <div className="relative w-full h-72 overflow-hidden md:h-[35rem] lg:h-80">
                      <Image
                        src={`/${testimonial.src}`}
                        alt={testimonial.name}
                        fill
                        objectFit="cover"
                        objectPosition="center"
                        draggable={false}
                        className="h-full w-full rounded-3xl object-cover object-center"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4 mt-60 md:mt-[32rem] lg:mt-0">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold dark:text-white text-black md:text-4xl lg:text-2xl">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-neutral-500 md:text-2xl lg:text-xl">
                {testimonials[active].designation}
              </p>
              <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300 md:text-2xl lg:text-base">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button md:w-16 md:h-16 lg:w-10 lg:h-10"
              >
                <ArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300 md:h-8 md:w-8 lg:w-4 lg:h-4" />
              </button>
              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button md:w-16 md:h-16 lg:w-10 lg:h-10"
              >
                <ArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300 md:h-8 md:w-8 lg:w-4 lg:h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
