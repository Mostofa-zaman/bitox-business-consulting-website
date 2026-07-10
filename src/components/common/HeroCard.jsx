import React from 'react'

import Link from "next/link";
import Image from "next/image";
import ButtonTwo from "./ButtonTwo";
import allImages from '../helper/imageProvider';


const HeroCard = () => {
     const { heroIocns } = allImages;
  return (
    <div>

       <div className="max-w-[430px] p-[35px] bg-bg-secondaryTwo rounded-[6px] hidden  2xl:block">
        <h4 className="headingFour font-bold ">
          Building the right foundation of your business
        </h4>
        <p className="pt-[30px]  pb-[170px] para-lg text-tarnary">
          We are <span className="font-bold">dedicated to guiding</span> you on
          your financial journey with expertise integrity and a personalized
          approach, always.
        </p>

        <div className="relative w-full">
          <Link href={"/contact"}>
            <ButtonTwo
              frontText={"Get consultation"}
              backText={"Get consultation"}
              className={"!w-full !py-[18px] !justify-start !pr-[60px]"}
            />
          </Link>
          <a
            href="https://youtu.be/l6shgiK9Z-k?si=fMjmxKVUJythzBZ5"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[100%]"
          >
            {/* Wave circle */}
            <div className="absolute top-0 right-[3.5px] h-full flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[52px] h-[52px]">
                <span
                  className="absolute h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0.6s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "1.2s" }}
                />

                <Image
                  src={heroIocns}
                  width={50}
                  height={50}
                  alt="hero-card-images "
                  className="z-0"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
        {/* xl */}
      <div className="max-w-[430px] p-[35px] bg-bg-secondaryTwo rounded-[6px] hidden xl:block  2xl:hidden">
        <h4 className="headingFour font-bold ">
          Building the right foundation of your business
        </h4>
        <p className="pt-[30px]  lg:pb-[100px] para-lg text-tarnary">
          We are <span className="font-bold">dedicated to guiding</span> you on
          your financial journey with expertise integrity and a personalized
          approach, always.
        </p>

        <div className="relative w-full">
          <Link href={"/contact"}>
            <ButtonTwo
              frontText={"Get consultation"}
              backText={"Get consultation"}
              className={"!w-full !py-[18px] !justify-start !pr-[60px]"}
            />
          </Link>
          <a
            href="https://youtu.be/l6shgiK9Z-k?si=fMjmxKVUJythzBZ5"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[100%]"
          >
            {/* Wave circle */}
            <div className="absolute top-0 right-[3.5px] h-full flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[52px] h-[52px]">
                <span
                  className="absolute h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "0.6s" }}
                />
                <span
                  className="absolute  h-[50px] w-[50px] z-10 rounded-full bg-white/30 animate-wave"
                  style={{ animationDelay: "1.2s" }}
                />

                <Image
                  src={heroIocns}
                  width={50}
                  height={50}
                  alt="hero-card-images "
                  className="z-0"
                />
              </div>
            </div>
          </a>
        </div>
      </div>

        
    </div>
  )
}

export default HeroCard