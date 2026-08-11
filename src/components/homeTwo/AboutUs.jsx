"use client";

import React from 'react'
import Container from "@/components/common/Container";
import Image from 'next/image';

const AboutUs = () => {
  return (
       <section className="w-full overflow-hidden bg-white">
      <Container size="2xl" className="px-0!">
        <div className="flex flex-col lg:grid lg:grid-cols-[minmax(0,830px)_1fr] min-h-[500px] lg:min-h-[650px] xl:min-h-[700px]">
           {/* Left: Hero Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-auto lg:min-h-[600px]">
            <Image
              src="/images/home2_aboutus/about1.png"
              alt="Team collaboration"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 830px"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutUs