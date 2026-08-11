"use client"

import React from 'react'
import { services } from '../helper/helpers';

import Container from "../common/Container";
import { Stack } from "../common/Responsive";



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