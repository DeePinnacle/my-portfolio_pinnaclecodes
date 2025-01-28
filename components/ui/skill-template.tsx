import React from 'react'
import SkillItem from "@/components/ui/skills-items";
import { IconType } from 'react-icons';

interface Skill {
    skills: {
    name: string,
    level: number,
    icon: IconType
    }[]
}

const SkillTemplate = ({ skills }:Skill) => {
  return (
    <div className="my-6">
    {skills.map((skill, index) => (
      <SkillItem
        key={index}
        name={skill.name}
        level={skill.level}
        icon={skill.icon}
        delay={index * 0.2}
      />
    ))}
  </div>
  )
}

export default SkillTemplate