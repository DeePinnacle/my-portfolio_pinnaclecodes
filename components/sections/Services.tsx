"use client"
import { motion } from "framer-motion"
import { animationVariants } from "@/config/config"
import React from "react";
import MaxWidthWrapper from "../ui/max-width";
import { services } from "@/data/data";
const Services = () => {
  return (
    <MaxWidthWrapper>
      <div className="w-full bg-primary px-2 py-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-5 lg:py-6 lg:bg-transparent">
        <h1 className="text-7xl font-jost my-4 md:text-8xl lg:text-6xl">Services</h1>
        <p className="md:text-3xl lg:text-base">
          Delivering tailored solutions in design, development, and optimization
          to bring your digital ideas to life.
        </p>
        <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:mt-8">
          {services.map((service, idx) => (
            <motion.div 
              variants={animationVariants}
              initial="initial"
              whileInView="animate"
              custom={idx}
              viewport={{
                once: true
              }}
              key={service.id} className="bg-black/40 w-ful rounded-xl my-4 px-2 py-8">
              <p className="service-id md:text-8xl">0{service.id}</p>
              <p className="text-4xl font-jost font-semibold my-6 md:text-5xl">{service.title}</p>
              <p className="md:text-3xl md:leading-normal md:font-jost lg:text-base">{service.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Services;
