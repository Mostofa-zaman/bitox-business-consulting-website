"use client";
  import { Stack } from "../common/Responsive";



// ─── Contact Form Card
function ContactCard() {
  return (
    <div className="bg-bg-secondaryFore shadow-xl px-[38px] xl:px-[52px] py-[30px] xl:py-[45px] w-full lg:max-w-[390px] xl:max-w-[430px]">
      <Stack gap="md">
        <p className="headingFive font-bold text-primary leading-snug">
          Have questions? Get in touch now!
        </p>
      </Stack>
    </div>
  );
}



// ─── Main Export
export default function FooterTwo() {
  return (
    <div className="relative">
      {/* Mobile: card in normal flow */}
      <div className="lg:hidden flex justify-center  pb-0">
        <ContactCard />
      </div>

   
    
    </div>
  );
}
