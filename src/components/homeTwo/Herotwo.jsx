import React from 'react'
import allImages from '../helper/imageProvider'
import Image from 'next/image'

const Herotwo = () => {
  return (
     <section className="relative h-[420px] sm:h-[600px] md:h-[750px] xl:h-[950px] w-full overflow-hidden">
            {/* Background Image */}
      <Image
        src={allImages.home2heroBanner}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

       {/* Vertical grid lines */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="max-w-[1770px] mx-auto h-full px-4 sm:px-[75px] relative">
          {/* Left line */}
          <div className="absolute left-4 sm:left-[75px] top-0 bottom-0 w-px bg-white/15" />
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/15" />
          {/* Right line */}
          <div className="absolute right-4 sm:right-[75px] top-0 bottom-0 w-px bg-white/15" />
        </div>
      </div>
    </section>
  )
}

export default Herotwo