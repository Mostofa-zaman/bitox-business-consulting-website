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


              </div>

   
        </div>

      

      

      </div>
    </footer>
  );
}