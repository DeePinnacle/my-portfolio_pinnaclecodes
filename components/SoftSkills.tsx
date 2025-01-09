import React from "react";
import { FaWrench, FaCommentDots, FaSyncAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { PiEyesFill } from "react-icons/pi"
import { Lightbulb } from "lucide-react"

import { Skill } from "../types";
import SkillTemplate from "./ui/skill-template";

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
    <div className="my-4">
      <div className="">
        <Lightbulb className="w-full h-72" />
        <p className="font-jost font-bold text-6xl">Soft Skills</p>
        <SkillTemplate skills={skills} />
      </div>
    </div>
  );
};

export default SoftSkills;
