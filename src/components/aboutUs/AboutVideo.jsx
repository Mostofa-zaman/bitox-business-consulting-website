import React from 'react'
import Image from "next/image";
import allImages from '../helper/imageProvider';

const AboutVideo = () => {
    
  const { aboutUsVideo } = allImages;
  return (
     <section className="relative flex flex-col lg:block overflow-hidden">
      {/* Image — mobile: full width stack, lg+: absolute overlap */}
      <div
        className="
          relative w-full h-[300px] sm:h-[400px]
          lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:z-10
          lg:w-[440px] lg:h-[500px]
          xl:w-[560px] xl:h-[560px]
          2xl:w-[919px] 2xl:h-[656px]
          relative
        "
      >
        <Image
          src={aboutUsVideo}
          fill
          alt="aboutUsVideo"
          className="object-cover"
        />
       
      </div>
      </section>
  )
}

export default AboutVideo