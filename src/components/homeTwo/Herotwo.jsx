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
    </section>
  )
}

export default Herotwo