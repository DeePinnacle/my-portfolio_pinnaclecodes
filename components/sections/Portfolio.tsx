import React from "react";
import { AllProjects } from "../AllProjects";
import { BackendProjects } from "../Backend-projects";
import { FrontendProjects } from "../Frontend-projects";
import TabViewContainer from "../TabViewContainer";
import MaxWidthWrapper from "../ui/max-width";
import { WebappProjects } from "../Webapp-projects";
import { WebsitesProjects } from "../Website-projects";
import CustomTabs from "../ui/custom-tabs";

const Portfolios = () => {
  const tabs = [
    {
      title: "All",
      value: "all",
      content: (
        <TabViewContainer>
          <div>
            <p>All Projects</p>
            <AllProjects />
          </div>
        </TabViewContainer>
      ),
    },
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <TabViewContainer>
          <div>
            <p>Frontend tab</p>
            <FrontendProjects />
          </div>
        </TabViewContainer>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <TabViewContainer>
          <div>
            <p>Backend tab</p>
            <BackendProjects />
          </div>
        </TabViewContainer>
      ),
    },
    {
      title: "Webapp",
      value: "webapp",
      content: (
        <TabViewContainer>
          <div>
            <p>Webapp tab</p>
            <WebappProjects />
          </div>
        </TabViewContainer>
      ),
    },
    {
      title: "Websites",
      value: "websites",
      content: (
        <TabViewContainer>
          <div>
            <p>Website tab</p>
            <WebsitesProjects />
          </div>
        </TabViewContainer>
      ),
    },
  ];
  return (
    <MaxWidthWrapper>
      <div className="w-full px-2 py-8">
        <h1 className="text-7xl text-[gray] font-semibold font-jost lg:ml-16">
          Projects
        </h1>
        <div className="[perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-14">
          <CustomTabs tabs={tabs} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Portfolios;
