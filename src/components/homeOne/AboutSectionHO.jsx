import React from "react";
import Container from "../common/Container";
import Responsive from "../common/Responsive";
import Image from "next/image";
import allImages from "../helper/imageProvider";
import ButtonTwo from "../common/ButtonTwo";
import { aboutSectionskills, aboutStats } from "../helper/homeOnehelper";
import Link from "next/link";
import AnimatedProgressBar from "../common/AnimatedProgressBar";
import CountUpStat from "../common/CountUpStat";

const AboutSectionHO = () => {
  const { aboutsection } = allImages;

  return (
    <section className="bg-secondary py-[60px]">
      <Container size="lg">
        <div className="p-[20px] md:p-[35px] bg-bg-secondaryTwo rounded-[6px]">
          <Responsive.Grid gap="none" cols={{ base: 1, lg: 2 }}>
            {/* Left Image */}
            <div className="relative rounded-[6px] mb-8 lg:mb-0 !h-[200px] md:!h-[500px] lg:!h-[675px] overflow-hidden lg:mr-[35px]">
              <Image
                src={aboutsection[0].img}
                alt="about-section"
                className="object-cover"
                fill
              />
            </div>
          </Responsive.Grid>
             <Responsive.Grid
            gap="none"
            cols={{ base: 1, lg: 2 }}
            align={"flex-start"}
          >
            <div className="lg:border-r border-[#0000001a] lg:pr-[35px] h-full">
              <h4 className="headingFour font-bold text-primary mt-[60px]">
                Creating one of the fastest way to grow your business
                successfully
              </h4>
              <p className="text-tarnary para-lg mt-[30px]">
                We help businesses move forward with confidence by turning
                complex challenges into clear action plans through structured
                guidance, analysis and targeted coaching,
              </p>

              <div className="my-[60px] h-[2px] w-full bg-[#0000001a]"></div>

      
  {/* Count-Up Stats */}
              <div className="grid grid-cols-2 gap-[30px]">
                {aboutStats.map((stat, i) => (
                  <CountUpStat
                    key={i}
                    value={stat.value}
                    label={stat.label}
                    description={stat.description}
                    duration={1800}
                  />
                ))}
              </div>
               </div>
          </Responsive.Grid>
        </div>
      </Container>
    </section>
  );
};

export default AboutSectionHO;
