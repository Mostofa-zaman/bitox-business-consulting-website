import React from 'react'
import Image from "next/image";
import allImages from "../helper/imageProvider";
import ButtonTwo from "../common/ButtonTwo";
import Link from "next/link";


const FeaturesRound = () => {
    
  const { featureRound } = allImages;
  return (
    <section className=" overflow-hidden  mb-[60px] lg:mb-0 lg:py-[120px] ">
      <div className="relative  max-w-[932px]  mx-auto">
         <Image
          src={featureRound[1].img}
          height={230}
          width={230}
          alt="feature-cart"
          className=" hidden laptop:block rounded-[6px]  absolute     top-0 laptop:top-[50%] laptop:translate-y-[-50%] laptop:left-[-110px]
           left-[-260px] rotate-[-20deg] xl:left-[-150px] 2xl:left-[-240px] !h-[130px] !w-[130px] xl:!h-[170px] xl:!w-[170px] 2xl:!h-[220px] 2xl:!w-[220px] "
        />
         <h2 className="headingTwo text-primary font-bold  text-center   ">
          We are a strategic consulting firm focused on delivering measurable
          strategy, growth.
        </h2>
        <div className="mt-[60px] flex justify-center">
          <Link href={"/about"} className="inline-block">
            {" "}
            <ButtonTwo frontText={"Learn about us"} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturesRound