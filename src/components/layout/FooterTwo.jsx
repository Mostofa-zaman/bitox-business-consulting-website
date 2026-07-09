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

        <Stack gap="sm">
          {[
            { type: "text", placeholder: "Name" },
            { type: "email", placeholder: "Email" },
          ].map(({ type, placeholder }) => (
            <input
              key={placeholder}
              type={type}
              placeholder={placeholder}
              className="border-b border-primary/10 outline-none py-2.5 text-sm text-primary placeholder:text-tarnary bg-transparent focus:border-secondary transition-colors"
            />
          ))}

          <textarea
            placeholder="Message"
            rows={3}
            className="border-b border-primary/10 outline-none py-2.5 text-sm text-primary placeholder:text-tarnary bg-transparent resize-none focus:border-secondary transition-colors"
          />
        </Stack>
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
