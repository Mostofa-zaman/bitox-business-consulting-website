


export default function PricingSection() {
  return (
     <section className="py-12 md:py-20">
      <Container size="lg">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center justify-center border border-black/10 rounded-sm py-1 px-[15px] text-xs font-bold uppercase tracking-widest">
            Pricing Plan
          </span>
        </div>
        <h2 className="text-center text-[20px] md:text-[38px] xl:text-[42px] font-bold underline underline-offset-4 max-w-2xl mx-auto mb-8 md:mb-12 leading-snug">
          Our transparent offer ensures clear, fair, and trusted solutions for
          clients
        </h2>
      </Container>
    </section>
  );
}