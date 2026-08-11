"use client"

import React from 'react'
import { services } from '../helper/helpers';

const Services = () => {
  return (
    <section>
      {services.map((service, index) => (
        <div key={index}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
};
export default Services