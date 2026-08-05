import React from "react";

import Container from "../common/Container";
import Responsive from "../common/Responsive";
import allImages from "../helper/imageProvider";
import Link from "next/link";
import ProjectCard from "../common/ProjectCard";

const PortfolioSection = () => {
    
  const { projectImages } = allImages;
  return (
    <section className="  py-[70px] md:py-[120px]">
      <Container size={"lg"}>
        <h2 className="headingTwo max-w-[950px]  text-primary font-bold text-center mx-auto">
          Real Challenges. Real Solutions. Real Impact.
        </h2>
         <div className="py-[60px] space-y-[30px]">
            <Responsive.Grid cols={{ base: 1, lg: 2 }} gap="lg">
            {projectImages[0].map((items, index) => {
              return (
                <Link key={index} href={`/projects/${items.slug}`}>
                   <ProjectCard
                    image={items.img}
                    mainClass={"w-full !h-[400px] md:!h-[510px]"}
                    title={items.title}
                    subtitleOne={items.subtitleOne}
                    subtitleTwo={items.subtitleTwo}
                  />
                </Link>
              );
            })}
          </Responsive.Grid>
             <Responsive.Grid cols={{ base: 1, lg: 3 }} gap="lg">
            {projectImages[1].map((items, index) => {
              return (
                <Link key={index} href={`/projects/${items.slug}`}>
                  <ProjectCard
                    image={items.img}
                    mainClass={"w-full !h-[400px] md:!h-[510px] "}
                    title={items.title}
                    subtitleOne={items.subtitleOne}
                    subtitleTwo={items.subtitleTwo}
                  />
                </Link>
              );
            })}
          </Responsive.Grid>

         </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
