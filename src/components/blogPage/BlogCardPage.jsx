import React from "react";
import Container from "../common/Container";
import BlogCard from "../common/BlogCard";
import Responsive from "../common/Responsive";
import { allBlogData } from "../helper/blogpagehelper";

const BlogCardPage = () => {
  return (
    <section className="py-17.5 lg:py-30 bg-bg-secondaryOne">
      <Container size={"lg"}>
        {/* ── Header (BlogSectionHO same) ── */}
        <div className="flex justify-center">
          <span className="inline-flex items-center justify-center border border-black/10 rounded-sm py-1 px-3.75 text-xs font-bold uppercase mb-3">
            Latest Posts
          </span>
        </div>
        <h2 className="max-w-200 text-center mx-auto font-bold text-primary headingTwo underline underline-offset-4">
          Insights & Updates: Driving Your Success
        </h2>

          {/* ── 6ta Card Grid ── */}
        <div className="py-15">
          <Responsive.Grid cols={{ base: 1, lg: 3 }} gap="lg">
            {allBlogData.map((item) => (
              <BlogCard
                batchName={item.batchName}
                description={item.description}
                dateText={item.dateText}
                image={item.image}
                itmeText={item.itmeText}
                slug={item.slug}
                key={item.id}
              />
            ))}
          </Responsive.Grid>
        </div>
          {/* ── Pagination ── */}
        <div className="flex items-center justify-center gap-x-2.5 bg-white py-5">
        <h1>eifhei</h1>
        
        </div>
      </Container>
    </section>
  );
};

export default BlogCardPage;
