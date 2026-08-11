"use client";

import React from "react";
import Container from "@/components/common/Container";
import Image from "next/image";

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

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center px-5 sm:px-8 lg:px-10 xl:px-12 py-10 md:py-14 lg:py-16 gap-5">
            {/* Eyebrow */}
            <div className="mb-4 lg:mb-7.5">
              <span className="inline-flex items-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase tracking-widest">
                about us
              </span>
            </div>

            <div className="flex flex-col gap-4 lg:gap-5">
              <h2
                className="text-2xl sm:text-3xl md:text-[34px] xl:text-[42px] font-bold underline underline-offset-4 max-w-[770px] text-primary leading-tight"
                style={{ fontFamily: "'Creato Display', sans-serif" }}
              >
                With 16+ years of experience, the team has a leader in digital
                design and innovations
              </h2>

              <p className="text-sm sm:text-base para-lg text-tarnary leading-relaxed max-w-[663px]">
                Enterprise partnerships, built on clarity and craft, are the
                foundation of sustainable growth and long term success. By
                aligning strategic goals &amp; thoughtful executions we can
                create meaningful collaborations that drives innovation &amp;
                measurable value of strong partnerships enable business to
                leverage shared expertise expand market opportunities, and
                respond effectively.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
