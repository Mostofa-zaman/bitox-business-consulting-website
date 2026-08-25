import React from 'react'
import allImages from '../helper/imageProvider';
import Image from 'next/image';
import { allIcons } from '../helper/iconProvider';

const AboutVideo = () => {
    
  const { aboutUsVideo } = allImages;
    const { play } = allIcons;
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
         <div className="absolute w-full top-0 z-10 left-0 h-full flex items-center justify-center">
          <div className="relative flex items-center justify-center w-[52px] h-[52px]">
            {/* for  under sm */}
            <span
              className="absolute inset-0  z-10 rounded-full bg-blue-500/30 block sm:hidden animate-wave2sm"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="absolute inset-0 z-10 rounded-full bg-sky-500/30 block sm:hidden animate-wave2sm"
              style={{ animationDelay: "0.6s" }}
            />
            <span
              className="absolute inset-0 z-10  rounded-full bg-sky-400/30 block sm:hidden animate-wave2sm"
              style={{ animationDelay: "1.2s" }}
            />
            {/* for sm , md ,lg */}
            <span
              className="absolute inset-0  z-10 hidden sm:block rounded-full bg-blue-500/30  animate-wave2"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="absolute inset-0 z-10  hidden sm:block rounded-full bg-sky-500/30  animate-wave2"
              style={{ animationDelay: "0.6s" }}
            />
            <span
              className="absolute inset-0 z-10  hidden sm:block rounded-full bg-sky-400/30  animate-wave2"
              style={{ animationDelay: "1.2s" }}
            />

            <div className="relative  rounded-full  flex items-center  justify-center shadow-md">
              <span className="absolute inline-block h-[60px] w-[60px] sm:h-[90px] sm:w-[90px]  md:h-[100px] md:w-[100px]  lg:h-[150px] lg:w-[150px]  rounded-full bg-white/5 backdrop-blur-[20px] z-5" />

              <span className="relative !z-20 text-white text-xl">{play}</span>
            </div>
          </div>
        </div>
       
      </div>
      </section>
  )
}

export default AboutVideo