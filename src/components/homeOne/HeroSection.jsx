import React from 'react'

import Container from "../common/Container";
import RotatingBadge from '../common/RotatingBadge';


const HeroSection = () => {
  return (
    <section>
  <Container>
      {/* lg, xl, 2xl */}
        <div className="relative hidden lg:block">
          <h1 className="font-heading headingOne uppercase tracking-tight">
            <span className="block font-extrabold">
              <span className="flex items-center">
                Business <RotatingBadge size="lg" />
              </span>
            </span>
            <span className="block font-medium lg:pl-[360px] xl:pl-[470px] 2xl:pl-[520px]">
              Strategy
            </span>
          </h1>
        </div>
  </Container>
</section>
  )
}

export default HeroSection