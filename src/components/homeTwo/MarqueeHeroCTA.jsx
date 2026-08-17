import React from 'react'
import { MARQUEE_REPEAT_COUNT, MARQUEE_TEXT } from '../helper/helpers';






// ─── Marquee Heading
function MarqueeHeading() {
  return (
    <div className="overflow-hidden">
      <div className="animate-marquee py-4">
        <span className="headingOne font-heading font-black text-primary whitespace-nowrap tracking-tight">
          {MARQUEE_TEXT.repeat(MARQUEE_REPEAT_COUNT)}
        </span>
      </div>
    </div>
  );
}
// ─── Main Export
export default function MarqueeHeroCTA() {
  return (
    <>
      <div>
        <MarqueeHeading/>
      </div>
    </>
  );
}