import React from 'react'
import Container from "../common/Container";
import allImages from '../helper/imageProvider';
import Image from "next/image";

const AboutSectionHO = () => {
  const { aboutsection } = allImages;
  return (
    <section className="bg-secondary py-[60px]">
       <Container size="lg">
        <div className="p-[20px] md:p-[35px] bg-bg-secondaryTwo rounded-[6px]">

                 {/* Left Image */}
            <div className="relative rounded-[6px] mb-8 lg:mb-0 !h-[200px] md:!h-[500px] lg:!h-[675px] overflow-hidden lg:mr-[35px]">
              <Image
                src={aboutsection[0].img}
                alt="about-section"
                className="object-cover"
                fill
              />
            </div>


            </div>

       </Container>
    </section>
  )
}

export default AboutSectionHO