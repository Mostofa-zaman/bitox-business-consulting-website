import React from "react";
import Container from "../common/Container";
import allImages from "../helper/imageProvider";
import Image from "next/image";

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

              {/* Right: heading + skills */}
            <div className="lg:border-l border-[#0000001a] lg:pl-[60px]">
              <h4 className="headingFour font-bold text-primary">
                Achieve goals and coach fast with strategic clarity and focus.
              </h4>
              <p className="text-tarnary para-lg my-[30px]">
                We help businesses move forward with confidence by turning
                complex challenges into clear action plans through structured
                guidance, analysis and targeted coaching,{" "}
              </p>

              <Link href={"/about"} className="inline-block">
                {" "}
                <ButtonTwo frontText={"Get in touch"} />
              </Link>

              {/* Animated Progress Bars */}
              <div className="mt-[60px]">
                {aboutSectionskills.map((skill, i) => (
                  <AnimatedProgressBar
                    key={i}
                    label={skill.label}
                    value={skill.value}
                    duration={1200 + i * 150}
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
