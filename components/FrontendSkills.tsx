"use client";
import React from "react";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiShadcnui, SiFramer } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";

import { MonitorSmartphone } from "lucide-react";
import { IconType } from "react-icons";
import SkillTemplate from "./ui/skill-template";

interface Skill {
  name: string;
  level: number;
  icon: IconType;
}

import { motion } from "framer-motion";

const FrontendSkills = () => {
  const skills: Skill[] = [
    { name: "HTML5", level: 99, icon: FaHtml5 },
    { name: "CSS3", level: 95, icon: FaCss3 },
    { name: "JavaScript", level: 90, icon: IoLogoJavascript },
    { name: "NextJS", level: 92, icon: RiNextjsLine },
    { name: "ReactJS", level: 75, icon: FaReact },
    { name: "TailwindCSS", level: 90, icon: RiTailwindCssFill },
    { name: "Shadcn-ui", level: 90, icon: SiShadcnui },
    { name: "Framer-motion", level: 75, icon: SiFramer },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: "-100%",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 2,
        },
      }}
      viewport={{
        once: true,
      }}
      className="mt-4 mb-2 bg-black/40 p-4 rounded-xl"
    >
      <div className="flex flex-row items-center gap-8">
        <MonitorSmartphone className="w-2/5 h-72 md:w-1/4 lg:w-1/4 lg:h-28" />
        <p className="font-jost font-bold text-5xl md:text-6xl lg:text-4xl">
          Frontend Skills
        </p>
      </div>
      <SkillTemplate skills={skills} />
    </motion.div>
  );
};

export default FrontendSkills;
