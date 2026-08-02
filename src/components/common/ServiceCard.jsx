import { ArrowUpRight } from "lucide-react";

export default function ServiceCard() {
  return (
    <div
      className={`
        w-full border border-[#0000001a] 
     
        group
      `}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-[35px] lg:py-[25px] border-b border-black/10 relative">
        {/* Hover Arrow (top-right absolute) */}
        <span className="absolute top-0 right-0 p-3 lg:p-[22px] group-hover:bg-secondary group-hover:text-bg-secondaryTwo transition duration-500 ease-in-out hidden lg:block">
          <ArrowUpRight size={50} />
        </span>
      </div>
    </div>
  );
}
