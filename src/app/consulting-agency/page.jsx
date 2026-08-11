import ThemeInitializer from '@/components/helper/ThemeInitializer'
import Herotwo from '@/components/homeTwo/Herotwo'
import OurClients from '@/components/homeTwo/OurClients'
import React from 'react'

const page = () => {
  return (
    <>
      <ThemeInitializer pathName="consulting-agency" />
      <Herotwo/>
      <OurClients/>
    
    </>
  )
}

export default page