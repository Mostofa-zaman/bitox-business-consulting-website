"use client";

import Image from "next/image";
import { FOOTER_ONE_DATA } from "@/components/helper/helpers";
import allImages from "../helper/imageProvider";


// ─── Main Footer
export default function FooterOne() {
  return (
    <footer className="w-full text-white bg-primary">

      {/* ── Centered Container */}
      <div className="max-w-[1770px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 3xl:px-0">

        {/* ── Top Section */}
        <div className="pt-10 sm:pt-14 md:pt-16 lg:pt-18 3xl:pt-22.5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">

          {/* Logo */}
          <div className="shrink-0 w-[160px] sm:w-[220px] md:w-[300px] lg:w-[380px] xl:w-[460px] 2xl:w-[540px] 3xl:w-auto">
            <Image
              src={allImages.footerLogo}
              alt="Bitox"
              width={1056}
              height={318}
              className="w-full h-auto"
            />
          </div>

            {/* Contact Info */}
              <div className="flex flex-col gap-3 w-full lg:w-[420px] xl:w-[500px] 2xl:w-[580px] 3xl:w-[654px] lg:mt-10 xl:mt-12 3xl:mt-16">

                   {/* Email + Phone */}
            <div className="flex flex-col gap-3 sm:flex-row">
              
              <a  href={`mailto:${FOOTER_ONE_DATA.email}`}
                className="flex-1 border border-[rgba(255,255,255,0.1)] rounded-md
                  text-sm md:text-base lg:text-lg 3xl:text-xl
                  text-white text-center transition-all duration-200 hover:bg-white/10 leading-7.5
                  py-3 px-4 sm:py-4 sm:px-5 md:py-5 md:px-6 3xl:py-[25px] 3xl:px-[60px]"
              >
                {FOOTER_ONE_DATA.email}
              </a>
              
              <a  href={`tel:${FOOTER_ONE_DATA.phone}`}
                className="flex-1 border border-[rgba(255,255,255,0.1)] rounded-md
                  text-sm md:text-base lg:text-lg 3xl:text-xl
                  text-white text-center transition-all duration-200 hover:bg-white/10 leading-7.5
                  py-3 px-4 sm:py-4 sm:px-5 md:py-5 md:px-6 3xl:py-[25px] 3xl:px-[60px]"
              >
                {FOOTER_ONE_DATA.phone}
              </a>
            </div>
            
            {/* Address */}
            <div
              className="border border-[rgba(255,255,255,0.1)] rounded-md
                text-sm md:text-base lg:text-lg 3xl:text-xl
                text-white text-center leading-7.5
                py-5 px-6 sm:py-7 sm:px-8 md:py-8 md:px-10 3xl:py-[47px] 3xl:px-[120px]"
            >
              {FOOTER_ONE_DATA.address}
            </div>


              </div>

   
        </div>
  {/* ── Social Links */}
        <div className="py-10 sm:py-14 md:py-16 lg:py-18 3xl:py-22.5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 3xl:gap-5 border-b border-[rgba(255,255,255,0.1)]">
          {FOOTER_ONE_DATA.socials.map((social) => (
            
             <a key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 rounded-full text-center
                text-sm md:text-[15px] 3xl:text-[16px]
                py-2 px-5 sm:py-2.5 sm:px-7 3xl:py-2.5
                w-full sm:w-auto sm:min-w-[160px] md:min-w-[200px] lg:min-w-[220px] 3xl:w-[278px]
                text-white hover:text-white hover:border-white/50 hover:bg-secondary hover:border-none  transition-all duration-200 leading-7"
            >
              {social.label}
            </a>
          ))}
        </div>
      

      

      </div>
    </footer>
  );
}