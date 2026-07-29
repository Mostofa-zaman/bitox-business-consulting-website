"use client";

import React, { useRef } from "react";

const AnimatedProgressBar = ({ label = "Progress" }) => {
  const valRef = useRef(null);

  return (
    <div>
      <div className="flex justify-between items-baseline mb-2.5">
        <span className="text-sm font-medium text-primary">{label}</span>

        <span
          ref={valRef}
          className="text-[13px] text-primary tabular-nums"
        >
          0%
        </span>
      </div>

      <div
        className="relative h-1 rounded-full bg-[#D9D9D9] cursor-pointer"
        style={{ containerType: "inline-size" }}
      >
        {/* Progress bar fill */}
        <div className="h-full w-0 rounded-full bg-primary"></div>
      </div>
    </div>
  );
};

export default AnimatedProgressBar;