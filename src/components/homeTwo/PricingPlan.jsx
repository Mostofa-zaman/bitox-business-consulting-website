
function PricingCard({ plan }) {
  const isLight = plan.variant === "light";

  return (
    <div
      className={`flex flex-col rounded-md p-5 lg:p-10 ${
        isLight ? "bg-[#f4f0ec] text-black" : "bg-[#e84b1a] text-white"
      }`}
    >
      {/* Plan Label */}
      <p className="mb-3 text-[20px] font-medium leading-[30px]">
        {plan.label}
      </p>

      {/* Price */}
      <div className="mb-1 flex items-baseline gap-1">
        <span className="text-[40px] font-extrabold leading-none md:text-[60px] lg:text-[90px]">
          {plan.price}
        </span>

        {plan.perMonth && (
          <span className="text-sm font-medium opacity-70">/month</span>
        )}
      </div>
    </div>
  );
}

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
        {/* Cards Grid */}
        <Grid cols={{ base: 1, md: 2 }} gap="lg">
          {PLANS.map((plan) => (
           <PricingCard/>
          ))}
        </Grid>
      </Container>
    </section>
  );
}