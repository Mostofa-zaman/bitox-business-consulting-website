import React from "react";
import Container from "../common/Container";
import Link from "next/link";

const BlogDetailsPage = ({blog}) => {
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
    </div>
  );
};

export default BlogDetailsPage;
