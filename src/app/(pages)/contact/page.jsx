import InnerPageHero from '@/components/common/InnerPageHero'
import ContactForm from '@/components/contactUs/ContactForm'
import React from 'react'

const Contact = () => {
  return (
    <>
    
     <InnerPageHero
        title="Partner Ours Contact 
        Today"
        subtitle="A reputed consultant agency we've spent 13+ year's"
        hasOffset={true}
      />
      <ContactForm/>
    </>
  )
}

export default Contact