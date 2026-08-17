"use client";

import React from "react";
import Container from "../common/Container";
import Link from "next/link";


const BlogInsight = () => {
  return (
    <section className="py-10 lg:py-30 bg-bg-secondaryOne">
      <Container size="lg">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-4">
          <div>
            <span className="inline-block text-primary border border-black/10 text-[14px] font-bold tracking-widest uppercase px-3 py-1 mb-4">
              Blog Insight
            </span>
            <h2 className="max-w-[749px] text-[30px] lg:text-[45px] font-bold underline underline-offset-4 lg:leading-14.5">
              Valuable insights to change your startup idea
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[18px] underline underline-offset-6 font-medium whitespace-nowrap hover:opacity-70 transition-opacity"
          >
            Read all blog posts
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5547 0.16928C0.890146 -0.273757 0 0.202634 0 1.00133V9.2643C0 10.063 0.890145 10.5394 1.5547 10.0963L7.75192 5.96486C8.34566 5.56904 8.34566 4.69658 7.75192 4.30076L1.5547 0.16928Z"
                fill="#02090F"
              />
            </svg>
          </Link>
        </div>

    
      </Container>
    </section>
  );
};

export default BlogInsight;
