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
           {/* Left double dashed border */}
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "6px",
                height: "100%",
                pointerEvents: "none",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                stroke="#02090F"
                strokeOpacity="0.2"
                strokeDasharray="2 2"
              />
              <line
                x1="5"
                y1="0"
                x2="5"
                y2="100%"
                stroke="#02090F"
                strokeOpacity="0.2"
                strokeDasharray="2 2"
              />
            </svg>
               {/* Bottom double dashed border */}
            <svg
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "6px",
                pointerEvents: "none",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="#02090F"
                strokeOpacity="0.2"
                strokeDasharray="2 2"
              />
              <line
                x1="0"
                y1="5"
                x2="100%"
                y2="5"
                stroke="#02090F"
                strokeOpacity="0.2"
                strokeDasharray="2 2"
              />
            </svg>
          </div>
      </Container>
    </section>
  )
}
