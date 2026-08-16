import React from 'react'
import Container from "@/components/common/Container" 


export default function OurExperts() {
  return (
    <section className="bg-bg-secondaryOne py-10 lg:py-30">
      <Container size="lg">
         {/* ── Header Row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-10">
          {/* Left: eyebrow + heading */}
          <div className="max-w-[771px]">
            <p className="inline-flex items-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase tracking-widest mb-2">
              Meet our experts
            </p>
            <h2 className="text-[20px] md:text-[38px] xl:text-[42px] font-bold leading-8 md:leading-11 lg:leading-14.5 underline text-primary underline-offset-4">
              Global business experts on stage worldwide today live
            </h2>
          </div>
          </div>
      </Container>
    </section>
  )
}
