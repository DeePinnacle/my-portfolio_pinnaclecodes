"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltips";
import { items } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const CTA = () => {
  return (
    <div className="w-full p-2 bg-gray-200 overflow-hidden lg:flex lg:flex-row lg:gap-6 lg:px-6 lg:py-8">
      {/* image container  */}
      <motion.div
        initial={{
          x: "100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{
          once: true,
        }}
        className="relative w-full h-[25rem] md:h-[45rem] lg:h-[35rem]"
      >
        <Image
          src={"/cta-img.jpg"}
          alt="computer-operator"
          fill
          priority
          objectFit="cover"
          objectPosition="center"
          className="-scale-x-100"
        />
      </motion.div>
      {/* content */}
      <motion.div
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{
          once: true,
        }}
        className="w-full my-2 lg:order-first"
      >
        <h1 className="text-5xl text-[#050505e3] font-jost font-semibold md:text-7xl">
          Your Vision, My Code—Let&apos;s Build Something Amazing!
        </h1>
        <p className="text-[#050505e3] font-jost my-2 text-xl md:text-3xl lg:text-base lg:font-poppins lg:my-8">
          Let&apos;s turn your ideas into stunning, functional, and impactful
          digital solutions. Together, we can create something that stands out
          and delivers real results.
        </p>
        <div className="flex flex-row items-center gap-4 my-8 px-3">
          <div className="relative w-3/5 h-16 p-4 border-2 border-solid border-[#050505e3] md:h-24 lg:h-16">
            <Link
              href=""
              className="px-4 py-5 w-full text-center absolute -top-4 -left-4 bg-primary flex flex-row items-center justify-center md:text-3xl md:h-24 lg:h-16 lg:text-base"
            >
              Let&apos; work Together
            </Link>
          </div>{" "}
          <Link
            href=""
            className="px-4 py-4 border-2 border-solid border-[#050505e3] md:w-2/4 md:h-24 md:text-3xl flex flex-row items-center justify-center lg:h-16 lg:text-base"
          >
            Contact me
          </Link>
        </div>
        <div className="flex flex-row items-center my-4 w-full">
          <AnimatedTooltip items={items} />
        </div>
        <div className="flex flex-row flex-wrap items-center gap-4 md:flex-nowrap">
          <div className="h-32 bg-[#050505e3] rounded-lg p-2 w-full">
            <p className="font-jost text-6xl">4+ years</p>
            <p className="font-Sacramento text-5xl md:text-6xl">Experience</p>
          </div>
          <div className="h-32 bg-[#050505e3] rounded-lg p-2">
            <p className="font-jost text-4xl">10+</p>
            <p className="font-Sacramento text-5xl md:text-6xl">Projects</p>
          </div>{" "}
          <div className="w-60 h-32 bg-[#050505e3] rounded-lg p-2">
            <p className="font-jost text-6xl">10+</p>
            <p className="font-Sacramento text-5xl md:text-6xl">Customers</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
