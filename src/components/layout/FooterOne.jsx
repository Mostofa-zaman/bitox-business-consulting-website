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

   
        </div>

      

      

      </div>
    </footer>
  );
}