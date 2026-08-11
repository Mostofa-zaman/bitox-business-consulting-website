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


const ServiceCard = ({ service }) => {
  return (
    <div>
      <h2>{service.title}</h2>

      <p>{service.category}</p>

      <p>{service.description}</p>
    </div>
  );
};

const Services = () => {
  return (
   <section className="w-full">
      <Container size="lg">
        <Stack gap="none">
          {services.map((service, index) => (
          
              <ServiceCard  service={service} index={service.imgId} />
        
          ))}
        </Stack>
      </Container>
    </section>
  );
};
export default Services