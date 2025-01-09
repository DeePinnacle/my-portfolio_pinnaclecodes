import React from "react";
import {
    FaHtml5,
    FaCss3,
    FaReact,

} from "react-icons/fa"
import {
  IoLogoJavascript
} from "react-icons/io5"
import {
    SiShadcnui,
    SiFramer
} from "react-icons/si"
import {
 RiTailwindCssFill,
 RiNextjsLine
} from "react-icons/ri"

import {
  MonitorSmartphone
} from "lucide-react"
import { IconType } from "react-icons";
import SkillTemplate from "./ui/skill-template";

interface Skill {
    name: string,
    level: number,
    icon: IconType
}

const FrontendSkills = () => {
  const skills: Skill[] = [
    { name: "HTML5", level: 99, icon: FaHtml5 },
    { name: "CSS3", level: 95, icon: FaCss3 },
    { name: "JavaScript", level: 90, icon: IoLogoJavascript },
    { name: "NextJS", level: 92, icon: RiNextjsLine  },
    { name: "ReactJS", level: 75, icon: FaReact },
    { name: "TailwindCSS", level: 90, icon: RiTailwindCssFill },
    { name: "Shadcn-ui", level: 90, icon: SiShadcnui },
    { name: "Framer-motion", level: 75, icon: SiFramer },
  ];
  return (
    <div className="my-4">
      <div className="">
        <MonitorSmartphone className="w-full h-72" />
        <p className="font-jost font-bold text-6xl">Frontend Skills</p>
        <SkillTemplate skills={skills} />
      </div>
    </div>
  );
};

export default FrontendSkills;
