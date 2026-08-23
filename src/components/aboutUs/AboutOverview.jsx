import React from "react";
import Container from "../common/Container";
import CountUpStat from "../common/CountUpStat";
import { aboutStatsTwo } from "../helper/aboutHelper";
import Responsive from "../common/Responsive";

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
      </Container>
    </section>
  );
};

export default AboutOverview;
