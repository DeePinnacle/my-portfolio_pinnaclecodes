import React from 'react'
import {
  FaNodeJs
} from "react-icons/fa"
import {
    DiMongodb
} from "react-icons/di"
import {
    BiLogoPostgresql
} from "react-icons/bi"
import {
 SiPostman
} from "react-icons/si"
import { TbBrandOauth } from 'react-icons/tb'
import { MdSecurity } from "react-icons/md"
import {
  Database
} from "lucide-react"

import { Skill } from "../types"
import SkillTemplate from './ui/skill-template'

const BackendSkills = () => {
    const skills: Skill[] = [
        { name: "NodeJS", level: 85, icon: FaNodeJs },
        { name: "ExpressJS", level: 87, icon: FaNodeJs },
        { name: "MongoDB", level: 90, icon: DiMongodb },
        { name: "PostgreSQL", level: 75, icon: BiLogoPostgresql  },
        { name: "JWT", level: 85, icon: MdSecurity },
        { name: "OAuth", level: 85, icon: TbBrandOauth },
        { name: "Postman", level: 90, icon: SiPostman },
      ];
    return (
          <div className="my-4">
            <div className="">
              <Database className="w-full h-72" />
              <p className="font-jost font-bold text-6xl">Backend Skills</p>
              <SkillTemplate skills={skills} />
            </div>
          </div>
        );
}

export default BackendSkills