import React from 'react'
import Container from "../common/Container";
import Image from "next/image";
import allImages from '../helper/imageProvider';
import ContactFormHO from '../common/ContactFormHO';

const ContactSectionHO = () => {
  const { contactImage } = allImages;
  return (
     <section>
      <Container size={"lg"}>
        <div className="w-full !h-[690px] relative hidden lg:block  rounded-[6px] overflow-hidden">
          <Image
            fill
            src={contactImage}
            className="object-cover "
            alt="contact-page-images"
          />
           <div className="absolute top-1/2 translate-y-[-50%] left-[35px]">
            <ContactFormHO />
          </div>
         
        </div>
      </Container>
    </section>
  )
}

export default ContactSectionHO