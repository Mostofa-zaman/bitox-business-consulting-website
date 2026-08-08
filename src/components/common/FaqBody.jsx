"use client"

import { categories } from '../helper/faqhelper'
import { useState } from "react";
import AccordionItem from "../common/AccordionItem";


const FaqBody = () => {
  const [activeCategory] = useState("general");

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-0 overflow-hidden bg-[#E0DED7] md:bg-transparent rounded-[20px] md:rounded-[0px]">
          <div className="flex flex-col gap-[10px] md:ml-[15px] relative z-0  md:bg-[#E0DED7] py-5  pl-5  pr-[15px]   md:rounded-bl-[20px] md:rounded-tl-[20px] h-fit ">
          {categories.map((item) => (
            <button
              key={item.key}
              className={`px-[35px] py-[27px] rounded-[15px] text-primary bg-bg-secondaryTwo hover:bg-secondary hover:text-bg-secondaryTwo para-xl text-bold transition duration-500 ease-in-out text-start ${
                activeCategory === item.key
                  ? "bg-secondary !text-bg-secondaryTwo"
                  : ""
              }`}
              onClick={() => handleCategoryChange(item.key)}
            >
              {item.label}
            </button>
          ))}
          <div className=" hidden md:block absolute w-[100%] h-[1000px] bg-bg-secondaryOne z-10 md:rounded-tr-[20px] top-[99%] left-[5.5px] "></div>
        </div>
         <div className="lg:col-span-2 space-y-[10px] md:bg-[#E0DED7] md:rounded-tr-[20px]  md:rounded-br-[20px] md:rounded-bl-[20px]  p-5 ">
          <div className="flex flex-col gap-[10px] md:pl-2">

          {faqItems.map((item, index) => (
             <AccordionItem
                key={index}
                index={index}
                question={item.q}
                answer={item.a}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}

          </div>
          </div>
      </div>
    </div>
  )
}

export default FaqBody