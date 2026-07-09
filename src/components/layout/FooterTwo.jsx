"use client";
import ButtonThree from "../common/ButtonThree";
  import { Stack } from "../common/Responsive";
import { ArrowIcon,   BUSINESS_HOURS, } from "../helper/helpers";



// ─── Shared CTA Button
function CTAButton({ frontText, backText, textColor = "#02090F", onClick }) {
  return (
    <div
      className="inline-flex items-center gap-2.5 cursor-pointer group"
      onClick={onClick}
    >
      <ButtonThree
        frontText={frontText}
        backText={backText}
        backgroundColor="transparent"
        textColor={textColor}
        fontSize={14}
        paddingTop={0}
        paddingBottom={0}
        paddingLeft={0}
        paddingRight={0}
      />
       <span className="inline-block transition-transform group-hover:translate-x-1">
        <ArrowIcon color={textColor === "#ffffff" ? "#ffffff" : "#02090F"} />
      </span>
   
    </div>
  );
}


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

        <div className="self-start bg-secondary rounded-[90px] px-6 py-3 hover:bg-secondary/90 transition-colors mt-1">
          <CTAButton
            frontText="Send Message"
            backText="Let's Talk."
            textColor="#ffffff"
            onClick={() => console.log("send message")}
          />
        </div>
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
         <div className="bg-bg-secondaryThree text-white rounded-tl-[15px]">

          <div className="w-full border-b border-white/10">
  <div className="mx-auto max-w-[1265px] flex flex-col sm:flex-row">
    <div className="bg-secondary flex items-center justify-center px-8 py-4 sm:flex-1 lg:ml-[340px] lg:pl-[140px] xl:ml-[300px] xl:pl-[300px]">
      <p className="text-sm text-white font-medium text-center">
        {BUSINESS_HOURS}
      </p>
    </div>
  </div>
</div>
         </div>

   
    
    </div>
  );
}
