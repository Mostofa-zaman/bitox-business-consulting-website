import ThemeInitializer from '@/components/helper/ThemeInitializer'
import AboutUs from '@/components/homeTwo/AboutUs'
import CoreFeatures from '@/components/homeTwo/CoreFeatures'
import Herotwo from '@/components/homeTwo/Herotwo'
import OurClients from '@/components/homeTwo/OurClients'
import Services from '@/components/homeTwo/Services'
import WhyChooseUs from '@/components/homeTwo/WhyChooseUs'
import PricingPlan from "@/components/homeTwo/PricingPlan";
import React from 'react'

const page = () => {
  return (
    <>
      <ThemeInitializer pathName="consulting-agency" />
      <Herotwo/>
      <OurClients/>
      <AboutUs/>
      <CoreFeatures/>
      <Services/>
      <WhyChooseUs/>
      <PricingPlan/>
    
    </>
  )
}

export default page