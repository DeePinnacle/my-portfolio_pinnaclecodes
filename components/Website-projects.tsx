"use client"
import { motion } from "framer-motion"
import { animationVariants } from "@/config/config"
import { projectsdb } from "@/data/data";
import ProjectContent from "./ProjectContent";
export const WebsitesProjects = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-6">
      {projectsdb
        .filter((project) => project.category === "website")
        .map((item, idx) => (
          <motion.div
          variants ={animationVariants}
          initial="initial" 
          whileInView="animate"
          custom={idx}
          viewport={{
            once: true
          }}
          key={item.id}
          >
            <ProjectContent 
              title={item.title}
              description={item.description}
              repoLink={item.repoLink}
              demoLink={item.demoLink}
              image={item.image}
              techStack={item.techStack}
            />
          </motion.div>
        ))}
    </div>
  );
};
