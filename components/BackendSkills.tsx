"use client";
import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { Database } from "lucide-react";

import { Skill } from "../types";
import SkillTemplate from "./ui/skill-template";

import { motion } from "framer-motion";

const BackendSkills = () => {
  const skills: Skill[] = [
    { name: "NodeJS", level: 85, icon: FaNodeJs },
    { name: "ExpressJS", level: 87, icon: FaNodeJs },
    { name: "MongoDB", level: 90, icon: DiMongodb },
    { name: "PostgreSQL", level: 75, icon: BiLogoPostgresql },
    { name: "JWT", level: 85, icon: MdSecurity },
    { name: "OAuth", level: 85, icon: TbBrandOauth },
    { name: "Postman", level: 90, icon: SiPostman },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: "100%",
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
        <Database className="w-2/5 h-72 md:w-1/4 lg:w-1/4 lg:h-28" />
        <p className="font-jost font-bold text-5xl md:text-6xl lg:text-4xl">
          Backend Skills
        </p>
      </div>
      <SkillTemplate skills={skills} />
    </motion.div>
  );
};

export default BackendSkills;
