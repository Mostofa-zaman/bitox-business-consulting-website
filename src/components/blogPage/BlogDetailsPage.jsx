import React from "react";
import Container from "../common/Container";
import Link from "next/link";

const BlogDetailsPage = ({ blog }) => {
  if (!blog) return null;
  return (
    <div className="bg-bg-secondaryOne">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-[#0000001a]">
        <Container size={"lg"}>
          <div className="py-4 flex items-center gap-x-2 text-sm text-primary/60">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>//</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>//</span>
            <span className="text-primary font-medium line-clamp-1">
              {blog.title}
            </span>
          </div>
        </Container>
      </div>

      <section className="py-17.5 lg:py-25">
        {/* ── Title & Author (inside Container) ── */}
        <Container size={"lg"}>
          <div className="max-w-215 mx-auto">
            {/* ── Meta Row (static, always same) ── */}
            <div className="flex items-center justify-center gap-2 flex-wrap mb-7.5">
              {["4 min read", "Creative Agency", "20 September 2025"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2.5 border border-black/10 rounded-full px-4 py-1 text-sm text-primary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {item}
                  </span>
                ),
              )}
            </div>
                {/* ── Title ── */}
            <h1 className="text-center font-bold text-primary headingTwo mb-7.5">
              {blog.title}
            </h1>

          </div>
        </Container>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
