import React from 'react'
import allImages from "../helper/imageProvider";
import Image from 'next/image';
       

const TestimonialCard = ({ 
  quotes,
  image,
  role
 
}) => {
  const { quote } = allImages;
    
  return (
 <div className="border border-[#0000001a] bg-bg-secondaryTwo">
   <div className="p-[30px]">
        <Image src={quote} width={52} height={42} alt="quote" />
        <p className="pt-[30px] pb-[40px] text-primary font-bold para-xl underline underline-offset-2">
          {quotes}
        </p>
        <div className="flex mb-[128px] items-center gap-[15px]">
          <Image
            src={image}
            height={66}
            width={66}
            alt="testimonial-card"
            className="!h-[66px] !w-[66px]"
          />
          <div>
            <p className="font-medium text-primary para-lg">{name}</p>
            <p className="font-medium text-primary para-base">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard