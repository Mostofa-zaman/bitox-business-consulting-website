import React from 'react'
import Container from "../common/Container"
import Responsive from "../common/Responsive"
import { allBlogData } from '../helper/blogpagehelper'
import BlogCard from '../common/BlogCard'



const BlogSectionHO = () => {
  return (
     <section className=" py-[70px] lg:py-[120px]">
      <Container size={"lg"}>
        <h2 className="max-w-[800px] text-center mx-auto font-bold text-primary headingTwo">
          Insights & Updates: Driving Your Success
        </h2>
           <div className="py-[60px]">
          <Responsive.Grid cols={{ base: 1, lg: 3 }} gap="lg">
            {allBlogData.slice(0, 3).map((item) => {
              return (
              <BlogCard
                  batchName={item.batchName}
                  description={item.description}
                  dateText={item.dateText}
                  image={item.image}
                  itmeText={item.itmeText}
                  slug={item.slug}
                  key={item.id}
                />
              );
            })}
          </Responsive.Grid>
        </div>
       
      </Container>
    </section>
  )
}

export default BlogSectionHO