import React from "react";
import Container from "../common/Container";
import Responsive from "../common/Responsive";
import Image from "next/image";
import allImages from "../helper/imageProvider";
import ButtonTwo from "../common/ButtonTwo";
import Link from "next/link";
import AnimatedProgressBar from "../common/AnimatedProgressBar";

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

        </div>
      </Container>
    </section>
  );
};

export default AboutSectionHO;
