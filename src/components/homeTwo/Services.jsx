"use client"

import React from 'react'
import { services } from '../helper/helpers';
import Container from "../common/Container";
import { Stack } from "../common/Responsive";
import allImages from "../helper/imageProvider";
import Image from "next/image";


// Image alda export
export const ServiceCardImage = ({ service, index }) => {

  console.log(index);
  
  return (
    <div className="w-full md:w-1/2 shrink-0">
      <Image
        src={allImages.home2Section[index]?.img}
        alt={service.title}
        className="w-full h-65 sm:h-85 md:h-[465px] object-cover md:rounded-tl-md md:rounded-bl-md transition-transform duration-300 transform-gpu"
      />
    </div>
  );
};

// Combined ServiceCard
export const ServiceCard = ({ service, index }) => (
  <div className="flex flex-col md:flex-row w-full">
    <ServiceCardImage service={service} index={index} />
  </div>
);

const Services = () => {
  return (
   <section className="w-full">
      <Container size="lg">
        <Stack gap="none">
           {services.slice(targetValue, lastValue).map((service, index) => (
            <Link key={index} href={`/services/${service?.slug}`}>
              {" "}
              <ServiceCard  service={service} index={service.imgId} />
            </Link>
          ))}
        </Stack>
      </Container>
    </section>
  );
};
export default Services