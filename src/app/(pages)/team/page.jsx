import InnerPageHero from '@/components/common/InnerPageHero'
import TeamGrid from '@/components/teamMember/TeamGrid'
import React from 'react'

const Team = () => {
  return (
    <>
       <InnerPageHero
        title="Meet Our Experienced Professionals"
        titleWidth={" !w-[300px] sm:!w-auto lg:!max-w-[650px]"}
      />
      <TeamGrid/>
    
    </>
  )
}

export default Team