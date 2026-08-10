import React from 'react'

const OurClients = () => {
  return (
     <section className="bg-bg-secondaryOne px-2 py-20 xl:py-30">
      {/* Header */}

      <div className="relative mb-10 lg:mb-30">
        {/* Badge + Heading — same left alignment */}
        <div className="text-center md:text-left md:pl-40 xl:pl-137.5">
          {/* Badge */}
          <div className="mb-7.5">
            <span className="inline-flex items-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase tracking-widest">
              Our Clients
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-[20px] md:text-[38px] xl:text-[42px] font-bold underline underline-offset-4 max-w-[1005px] text-primary"
            style={{ fontFamily: "'Creato Display', sans-serif" }}
          >
            Enterprise partnerships, built on clarity and craft, driving
            scalable growth and long-term strategic success
          </h2>
        </div>
      </div>
    </section>
  )
}

export default OurClients