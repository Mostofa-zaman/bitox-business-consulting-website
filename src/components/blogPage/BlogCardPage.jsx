import React from "react";
import Container from "../common/Container";

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
      </Container>
    </section>
  );
};

export default BlogCardPage;
