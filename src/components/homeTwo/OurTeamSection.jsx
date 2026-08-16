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

        

      </div>
    </section>
  )
}
