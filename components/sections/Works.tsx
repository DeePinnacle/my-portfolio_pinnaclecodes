"use client";

import { Tabs } from "../ui/tabs";
import MaxWidthWrapper from "../ui/max-width";
import TabViewContainer from "../TabViewContainer";
import { FrontendProjects } from "../Frontend-projects";
import { AllProjects } from "../AllProjects";
import { BackendProjects } from "../Backend-projects";
import { WebappProjects } from "../Webapp-projects";
import { WebsitesProjects } from "../Website-projects";

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
                <h1 className="text-7xl text-[gray] font-semibold font-jost">Projects</h1>
                <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-14">
                    <Tabs tabs={tabs} />
                </div>
            </div>
        </MaxWidthWrapper>
    );
}
export default Portfolios;