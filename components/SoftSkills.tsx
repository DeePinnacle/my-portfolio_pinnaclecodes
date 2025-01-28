"use client"
import React from "react";
import { FaWrench, FaCommentDots, FaSyncAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { PiEyesFill } from "react-icons/pi"
import { Lightbulb } from "lucide-react"

import { Skill } from "../types";
import SkillTemplate from "./ui/skill-template";

import { motion } from "framer-motion"

const SoftSkills = () => {
  const skills: Skill[] = [
    { name: "Problem-solving", level: 95, icon: FaWrench },
    { name: "Communication", level: 98, icon: FaCommentDots },
    { name: "Adaptability", level: 96, icon: FaSyncAlt },
    { name: "Teamwork", level: 99, icon: FaHandshake },
    { name: "Time management", level: 95, icon: IoIosTime },
    { name: "Attention to Detail", level: 95, icon: PiEyesFill },
  ];
  
  return (
    <motion.div 
    initial={{
      opacity:0,
      x: "100%"
    }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition:{
        duration: 2
      }
    }}
    viewport={{
      once: true
    }}
      className="mt-4 mb-2 bg-black/40 p-4 rounded-xl">
    <div className="flex flex-row items-center gap-8">
      <Lightbulb className="w-2/5 h-72 md:w-1/4 lg:w-1/4 lg:h-28" />
      <p className="font-jost font-bold text-5xl md:text-6xl lg:text-4xl">Soft Skills</p>
    </div>
    <SkillTemplate skills={skills} />
  </motion.div>
  );
};

export default SoftSkills;
