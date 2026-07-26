
"use client";
import React from "react";

import Container from "../common/Container";
import RotatingBadge from "../common/RotatingBadge";
import HeroCard from "../common/HeroCard";
import allImages from "../helper/imageProvider";
import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
  
  const { heroBanner } = allImages;
const [currentID] = useState(0);
 const [nextID, setNextID] = useState(null);
  return (
    <section>
      <Container>
        {/* lg, xl, 2xl */}
        <div className="relative hidden lg:block">
          <h1 className="font-heading headingOne uppercase tracking-tight">
            <span className="block font-extrabold">
              <span className="flex items-center">
                Business <RotatingBadge size="lg" />
              </span>
            </span>
            <span className="block font-medium lg:pl-[360px] xl:pl-[470px] 2xl:pl-[520px]">
              Strategy
            </span>
          </h1>
        </div>

        {/* sm devices */}
        <div className="relative lg:hidden md:hidden block">
          <h1 className="font-heading headingOne uppercase tracking-tight flex flex-col items-center gap-y-2">
            <span className="block font-extrabold ">Business</span>
            <RotatingBadge size="sm" />
            <span className="block font-medium">Strategy</span>
          </h1>
          <div className=" mt-12 flex justify-center ">
            <HeroCard />
          </div>
        </div>
        {/* md devices */}
        <div className="relative lg:hidden md:block hidden">
          <h1 className="font-heading headingOne uppercase tracking-tight flex flex-col items-center gap-y-3">
            <span className="block font-extrabold">Business</span>
            <RotatingBadge size="sm" />
            <span className="block font-medium">Strategy</span>
          </h1>
          <div className=" mt-13 flex justify-center ">
            <HeroCard />
          </div>
        </div>
      </Container>
      <div className="mt-[50px] lg:mt-[90px] mb-[20px] px-3 max-w-[1880px] h-[320px] sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[600px] 2xl:h-[650px] relative mx-2">
        <div className="absolute inset-0 z-0">


           <Image
            src={heroBanner[currentID].img}
            alt="herobanner-images"
            className="rounded-[6px] object-cover"
            fill
            priority={currentID === 0}
          />
            {/* Next image - cross fade */}
          {nextID !== null && (
            <div
              className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${
                fading ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={heroBanner[nextID].img}
                alt="herobanner-images"
                className="rounded-[6px] object-cover"
                fill
                priority={false}
              />
            </div>
          )}
            <div className="absolute inset-0 bg-[#02090f30] z-20" />
        </div>
             {/* for lg */}
        <div className="absolute top-[-155px] xl:top-[-176px] left-[6%] translate-x-[-2.5%] hidden lg:block  z-10">
          <HeroCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
