

import Image from "next/image";

import React from 'react'

const WhyChooseUs = () => {
  return (
     <section className="pt-10 lg:pt-30 bg-black overflow-hidden">
      {/* ai 2ta container er vitore thakbe */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[935px] mx-auto mb-16">
          <p className="text-white text-base lg:text-[31px] lg:leading-11 underline underline-offset-4">
            Empowering your financial journey with expertise integrity and
            tailored solutions. The Consult Agency team provides continuous
            support to help your business with confidence and success your
            future growth.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative w-70 h-78.75">
            <Image
              src="/images/home2_whychoose/whychoose1.png"
              alt="Why Choose Us Icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs