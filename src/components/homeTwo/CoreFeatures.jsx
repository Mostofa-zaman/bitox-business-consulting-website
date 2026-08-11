"use client"

import React from 'react'
import Container from "../common/Container";
import { Stack } from "../common/Responsive";

const CoreFeatures = () => {
  return (
    <section className="py-[80px] bg-bg-secondaryOne">
      <Container size="lg">
        {/* ── Top row: badge + heading + button ── */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 mb-10">
          {/* Left: badge and h2 */}
          <Stack
            gap="sm"
            className="max-w-[674px] items-center sm:items-start w-full"
          >
            <span className="inline-flex items-center border border-black/15 rounded-[4px] py-1 px-[14px] text-[11px] font-bold uppercase text-primary w-fit mx-auto sm:mx-0">
              Core Features
            </span>
            <h2
              className="text-[25px] md:text-[38px] xl:text-[42px] font-bold underline underline-offset-[4px] text-primary leading-[1.15] text-center sm:text-left"
              style={{ fontFamily: "'Creato Display', sans-serif" }}
            >
              The core features we make it simple, powerful, and reliable.
            </h2>
          </Stack>
        </div>
      </Container>
    </section>
  )
}

export default CoreFeatures