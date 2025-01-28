"use client"
import { motion } from "framer-motion"
import { projectsdb } from "@/data/data";
import ProjectContent from "./ProjectContent";
import { animationVariants } from "@/config/config"
export const FrontendProjects = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-6">
      {projectsdb
        .filter((project) => project.category === "frontend")
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
