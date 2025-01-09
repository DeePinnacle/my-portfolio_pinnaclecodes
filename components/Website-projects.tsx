import { projectsdb } from "@/data/data";
import ProjectContent from "./ProjectContent";
export const WebsitesProjects = () => {
  return (
    <div>
      {projectsdb
        .filter((project) => project.category === "website")
        .map((item) => (
            <ProjectContent 
              key={item.id}  
              title={item.title}
              description={item.description}
              repoLink={item.repoLink}
              demoLink={item.demoLink}
              image={item.image}
              techStack={item.techStack}
            />
        ))}
    </div>
  );
};
