import React from 'react'


export default function OurTeamSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-150">
         {/* Left: Image - full bleed */}
        <div className="relative w-full h-full min-h-105 lg:min-h-150">
          <Image
            src={allImages.home2ourteam}
            alt="Our team collaboration"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Right: Content */}
        <div className="bg-black flex flex-col justify-center px-10 py-10 lg:py-30 lg:px-16 xl:px-20">
          {/* Tag */}
          <span className="inline-block mb-6 text-[13px] font-bold uppercase tracking-widest text-white border border-white/20 px-3 py-1 w-fit">
            Specialization
          </span>

          {/* Heading */}
          <h2
            className="text-white font-bold text-[20px] md:text-[40px] mb-7 lg:mb-13"
          >
            Our team brings more than 16 years of expertise, leading the way
            in digital design
          </h2>

        

      </div>
      </div>
    </section>
  )
}
