"use client";
import Image from "next/image";

import React from 'react'
import allImages from "../helper/imageProvider";

const InnerPageHero = ({
  title = "Empowering Growth & Success",
    titleWidth
}) => {

    const { commonHeroImages } = allImages;
  return (
       <section >
      {/* 
        Height breakdown:
        320px  → h-[320px]
        480px  → h-[400px]
        640px  → h-[500px]
        768px+ → h-[580px]
        1024px+→ h-[662px]
      */}
      
      <div className="relative !w-full h-[320px] xs:h-[400px] sm:h-[500px] md:h-[580px] lg:h-[662px]">

          <Image
          src={commonHeroImages}
          fill
          alt="commonHeroImages"
          className="object-cover z-0"
          priority
        />

         <div className="absolute z-[20] inset-0">
          {/* Title */}
          {/*
            320px  → top-[60px],  left-1/2, translate-x-[-50%],  max-w-[280px], text-center
            480px  → top-[80px],  left-1/2, translate-x-[-60%],  max-w-[340px]
            640px  → top-[100px], left-1/2, translate-x-[-70%],  max-w-[420px]
            768px  → top-[120px], left-1/2, translate-x-[-75%],  max-w-[500px]
            1024px → top-[150px], left-1/2, translate-x-[-80%],  max-w-[600px]
          */}
          <h2
            className={`
              
               headingTwo font-bold text-bg-secondaryTwo
              absolute
              top-[60px]   left-1/2 -translate-x-1/2 max-w-[280px]  
              xs:top-[80px]  xs:max-w-[340px]
              sm:top-[100px] sm:-translate-x-[60%]  sm:max-w-[420px] sm:text-left
              md:top-[120px] md:-translate-x-[70%]  md:max-w-[500px]
              lg:top-[150px] lg:-translate-x-[80%]  lg:max-w-[600px]

              ${titleWidth}

              `}
          >
            {title}
          </h2>





      </div>
      </div>
    </section>
  )
}

export default InnerPageHero