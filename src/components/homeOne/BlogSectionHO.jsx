import React from 'react'
import Container from "../common/Container"
import Responsive from "../common/Responsive"
import { allBlogData } from '../helper/blogpagehelper'



const BlogSectionHO = () => {
  return (
     <section className=" py-[70px] lg:py-[120px]">
      <Container size={"lg"}>
        <h2 className="max-w-[800px] text-center mx-auto font-bold text-primary headingTwo">
          Insights & Updates: Driving Your Success
        </h2>
          
       
      </Container>
    </section>
  )
}

export default BlogSectionHO