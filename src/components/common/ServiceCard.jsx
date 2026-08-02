import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ card }) {
  const {
    icon,
   highlighted,
   title,
   href,


  } = card;
    //   const { plus } = allImages;
  return (
    <div
     className={`
        w-full border border-[#0000001a] 
        ${highlighted ? "bg-color-bg-secondaryTwo" : "bg-color-bg-secondaryTwo"}
        group
      `}
    >
       {/* Top Header Row */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-[35px] lg:py-[25px] border-b border-black/10 relative">
        {/* Hover Arrow (top-right absolute) */}
        <span className="absolute top-0 right-0 p-3 lg:p-[22px] group-hover:bg-secondary group-hover:text-bg-secondaryTwo transition duration-500 ease-in-out hidden lg:block">
          <ArrowUpRight size={50} />
        </span>

        {/* Icon + Title */}
        <div className="w-full relative">
          <div className="flex items-center gap-3 lg:gap-5">
            <Image
              src={icon}
              alt="services-icon"
              width={40}
              height={40}
              className="!w-8 !h-8 lg:w-10 lg:h-10 shrink-0 "
            />
            <h3 className="headingSix font-semibold text-primary ">{title}</h3>
          </div>
        </div>

        {/* Arrow Button Link */}
        <Link
          href={href}
          className="
            flex items-center justify-center shrink-0
            w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11
            bg-color-secondary text-white
            hover:bg-color-primary transition-colors duration-300
            ml-3
          "
          aria-label={`Go to ${title}`}
        >
          <ArrowUpRight size={18} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}
