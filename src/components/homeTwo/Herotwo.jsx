import React from "react";
import allImages from "../helper/imageProvider";
import Image from "next/image";

const PLUS_POSITIONS = [
  // Top row
  "top-[30px] left-[75px]",
  "top-[30px] left-1/2 -translate-x-1/2",
  "top-[30px] right-[75px]",
  // Bottom row
  "bottom-[30px] left-[75px]",
  "bottom-[30px] left-1/2 -translate-x-1/2",
  "bottom-[30px] right-[75px]",
];

const SERVICES = [
  "Business Consultancy",
  "Financial Planning",
  "Vat & Tax Consultancy",
  "Strategic Business Advisory",
  "Sales & CRM Strategy",
];

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

      {/* Max width container */}
      <div className="relative z-10 max-w-[1770px] mx-auto h-full px-4 sm:px-[75px]">
        {/* Plus icons — hide on mobile */}
        {PLUS_POSITIONS.map((position, index) => (
          <Plus
            key={index}
            size={13}
            strokeWidth={2}
            className={`absolute text-white/80 hidden sm:block ${position}`}
          />
        ))}

        {/* Est. year — top right */}
        <span
          className="
            absolute top-[16px] sm:top-[30px]
            right-[16px] sm:right-[82px]
            text-white leading-none tracking-tight
            text-[18px] sm:text-[22px] md:text-[38px] lg:text-[60px] xl:text-[90px]
          "
        >
          (Est. 2010)
        </span>
        {/* Services list — only md and above */}
        <div className="absolute top-[32%] xl:top-[38%] right-[90px] lg:right-[100px] xl:right-[150px] text-left space-y-[6px]">
          {SERVICES.map((service, i) => (
            <p
              key={i}
              className="text-white text-[clamp(10px,1.1vw,15px)] font-light leading-snug tracking-wide"
            >
              {service}
            </p>
          ))}
        </div>
          {/* CONSULTANT — top left */}
        <h1
          className="
            absolute
            left-4 sm:left-[75px]
            font-bold text-white uppercase leading-none tracking-tighter
          "
          style={{
            fontSize: "clamp(36px, 8.5vw, 200px)",
            top: "clamp(40px, 8vw, 160px)",
          }}
        >
          CONSULTANT
        </h1>

      </div>
    </section>
  );
};

export default Herotwo;
