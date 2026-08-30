"use client"

import React from "react";
import Container from "../common/Container";
import Link from "next/link";
import Image from "next/image";

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

            {/* ── Author Card ── */}
            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-x-3 border border-black/10 bg-white rounded-[90px] pr-5 lg:pr-9.5 pl-1.5 py-1.5">
                {/* Avatar — image thakle image, na thakle letter */}
                <div className="w-15 h-15 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center shrink-0">
                  {blog.authorImage ? (
                    <Image
                      src={blog.authorImage}
                      alt={blog.author}
                      width={36}
                      height={36}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-xs font-bold text-primary">
                      {blog.author?.charAt(0)}
                    </span>
                  )}
                </div>

                <div>
                  <p className="text-xs text-primary/50 leading-tight">
                    Author
                  </p>
                  <p className="text-sm font-semibold text-primary leading-tight">
                    {blog.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        
        {/* ── Hero Image (full-width, outside Container) ── */}
        <div className="relative w-full h-90 sm:h-120 lg:h-150 xl:[800px] mb-15 overflow-hidden">
          <Image
            fill
            src={blog.heroImage}
            alt={blog.title}
            className="object-cover object-top"
          />
        </div>
             {/* ── Main Content (inside Container) ── */}
        <Container size={"lg"}>
          <div className="">
                 {/* ── Intro Paragraph ── */}
            <p className="text-[18px] leading-6.5 text-tarnary mb-10">
              {blog.intro}
            </p>

              {/* ── Sections ── */}
            {blog.sections?.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-[22px] sm:text-[26px] font-bold text-primary underline underline-offset-4 mb-4">
                  {section.heading}
                </h2>
                <p className="text-[18px] leading-6.5 text-tarnary mb-5">
                  {section.content}
                </p>

                {section.bullets?.map((bullet, j) => (
                  <div key={j} className="mb-5 border-primary/20">
                    {bullet.title && (
                      <p className="font-bold text-primary mb-1">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2 inline-block align-middle" />
                        {bullet.title}
                      </p>
                    )}
                    <p className="text-base leading-[1.85] text-primary/70">
                      {bullet.text}
                    </p>
                  </div>
                ))}
              </div>
            ))}


          </div>
           </Container>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
