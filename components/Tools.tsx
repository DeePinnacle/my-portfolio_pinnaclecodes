import React from "react";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoPhonePortrait } from "react-icons/io5"
import { FolderOpen } from "lucide-react"

import { Skill } from "../types";
import SkillTemplate from "./ui/skill-template";

const DevTools = () => {
  const skills: Skill[] = [
    { name: "Git", level: 95, icon: FaGitAlt },
    { name: "Github", level: 95, icon: FaGithub },
    { name: "Vscode", level: 99, icon: VscVscode },
    { name: "Simulators", level: 99, icon: IoPhonePortrait },
    { name: "Artificial intelligence", level: 85, icon: GiArtificialIntelligence },
  ];
  return (
    <div className="my-4">
      <div className="">
        <FolderOpen className="w-full h-72" />
        <p className="font-jost font-bold text-6xl">Dev Tools</p>
        <SkillTemplate skills={skills} />
      </div>
    </div>
  );
};

export default DevTools;
