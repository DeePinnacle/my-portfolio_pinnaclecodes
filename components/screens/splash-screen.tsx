"use client";
import React from "react";
// import Image from "next/image";

import { motion } from "framer-motion";

const SplashScreen = () => {
    const name = "< Pinnacle💻Codes />"
  return (
    // <AnimatePresence>
    // </AnimatePresence>
    <motion.div
      // initial={{
      //   opacity: 1,
      //   x: "100vw"
      // }}
      exit={{
        scale: 0,
        y: "50%",
        transition: {
          duration: 0.4,
        },
      }}
      className="w-full min-h-screen bg-[#050505e3] bg-blend-darken flex flex-col items-center justify-center"
    >
      {/* <motion.div 
          initial={{
            opacity: 0,
            scale: 0,
            y: -400
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            delay: 0.5,
            duration: 3,
            ease: "easeIn"
          }}
          className="relative w-60 h-60 rounded-full -top-14">
          <Image
            src={"/file.png"}
            alt="ace-lux-logo"
            fill
            priority
            objectFit="center"
            objectPosition="center"
            className="scale-125"
          />
        </motion.div> */}
      <motion.p
        initial={{
          opacity: 0,
          scale: 0,
          x: -400,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 3,
          ease: "easeIn",
        }}
        className="portfolio-logo text-base"
      >
        { name }
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;
