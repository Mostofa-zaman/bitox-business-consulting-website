import React from "react";
import Container from "../common/Container";
import CountUpStat from "../common/CountUpStat";
import { aboutStatsThree, aboutStatsTwo } from "../helper/aboutHelper";
import Responsive from "../common/Responsive";
import AboutStatCard from "../common/AboutStatCard";

const AboutOverview = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-[120px]   ">
      <Container size={"lg"}>
        <div className="">
          <Responsive.Flex>
            {aboutStatsTwo.map((items, index) => (
              <CountUpStat
                key={index}
                value={items.value}
                label={items.title}
                description={items.description}
              />
            ))}
          </Responsive.Flex>
        </div>
         <h1 className="font-bold text-[clamp(2.5rem,10vw,140px)] leading-[120%]  text-primary text-center lg:text-start py-10 md:py-[50px] lg:py-[60px]">
          Established in 2013
        </h1>
         <div className="flex-1 mt-4 lg:mt-0 hidden sm:block">
              <Responsive.Flex wrap={false}>
                {aboutStatsThree.map((items, index) => (
                  <CountUpStat
                    key={index}
                    value={items.value}
                    label={items.title}
                    description={items.description}
                    className="flex flex-col md:items-end w-full md:w-fit"
                    labelClass="font-semibold text-primary mt-[12px] md:text-end"
                    descClass="text-tarnary para-sm mt-[8px] md:text-end"
                  />
                ))}
              </Responsive.Flex>
            </div>
             <div className="flex-1 mt-4 lg:mt-0 block sm:hidden">
              <Responsive.Flex wrap={true}>
                {aboutStatsThree.map((items, index) => {
                  return (
                      <AboutStatCard
                      key={index}
                      description={items.description}
                      value={items.value}
                      title={items.title}
                      className={" flex flex-col md:items-end w-full md:w-fit"}
                      childClassOne={"md:text-end"}
                      childClassTwo={"md:text-end"}
                    />
                  );
                })}
              </Responsive.Flex>
            </div>
            


      </Container>
    </section>
  );
};

export default AboutOverview;
