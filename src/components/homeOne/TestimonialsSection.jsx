
import React from "react";
import Container from "../common/Container";
import CountUpStat from "../common/CountUpStat";
import { allIcons } from "../helper/iconProvider";


const TestimonialsSection = () => {
     const { star } = allIcons;
  return (
    <section>
      <Container size="full">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Left Info Panel */}
          <div className="bg-secondary flex flex-col justify-between">

              <div className="p-[20px] sm:p-[25px] lg:p-[30px]">
              {/* ✅ CountUpStat for 4.9 rating */}
              <CountUpStat
                value="4.9"
                className="text-center [&>p:first-child]:headingOne [&>p:first-child]:text-bg-secondaryTwo [&>p:first-child]:font-bold [&>p:first-child]:text-center"
                textClassName="headingOne text-bg-secondaryTwo font-bold text-center"
                hideLabel
              />

              <ul className="flex gap-[2px] justify-center lg:justify-end mt-[10px] lg:mr-[55px]">
                {[...new Array(5)].map((_, index) => (
                  <li key={index} className="text-bg-secondaryTwo text-lg sm:text-xl">
                    {star}
                  </li>
                ))}
              </ul>
              <h3 className="headingFour mt-[20px] lg:mt-[30px] text-center text-bg-secondaryTwo font-bold">
                Real stories. Real impact.
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection