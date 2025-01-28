"use client";
import React from "react";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoPhonePortrait } from "react-icons/io5";
import { FolderOpen } from "lucide-react";

import { Skill } from "../types";
import SkillTemplate from "./ui/skill-template";

import { motion } from "framer-motion";

const DevTools = () => {
  const skills: Skill[] = [
    { name: "Git", level: 95, icon: FaGitAlt },
    { name: "Github", level: 95, icon: FaGithub },
    { name: "Vscode", level: 99, icon: VscVscode },
    { name: "Simulators", level: 99, icon: IoPhonePortrait },
    {
      name: "Artificial intelligence",
      level: 85,
      icon: GiArtificialIntelligence,
    },
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
        <FolderOpen className="w-2/5 h-72 md:w-1/4 lg:w-1/4 lg:h-28" />
        <p className="font-jost font-bold text-5xl md:text-6xl lg:text-4xl">
          Dev Tools
        </p>
      </div>
      <SkillTemplate skills={skills} />
    </motion.div>
  );
};

export default DevTools;
