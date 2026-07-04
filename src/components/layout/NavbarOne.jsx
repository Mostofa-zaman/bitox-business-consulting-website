"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import {
  NAV_LINKS,
  DesktopNavItem,
} from "@/components/helper/helpers";
import ButtonThree from "../common/ButtonThree";

function useNavbar() {
  const pathname = usePathname();

  const [openDropdown] = useState(null);
  const [scrolled] = useState(false);

  return {
    pathname,
    scrolled,
    openDropdown,
  };
}

const NavbarOne = () => {
  const {
    pathname,
    scrolled,
    openDropdown,
  } = useNavbar();

  return (
    <header
      className={`fixed left-5 right-5 top-5 z-50 hidden lg:flex items-center justify-between px-8 h-[70px] rounded-md transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <Link href="/" aria-label="Go to homepage">
        <Image
          src="/images/logo/Nav_logo.png"
          alt="Bitox"
          width={106}
          height={32}
          priority
        />
      </Link>

      <nav
        className="flex items-center gap-[clamp(1rem,2vw,2rem)]"
        aria-label="Main navigation"
      >
        {NAV_LINKS.map((link) => (
          <DesktopNavItem
            key={link.label}
            link={link}
            openDropdown={openDropdown}
            pathname={pathname}
            dropdownStyle="rounded"
          />
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button
          aria-label="Search"
          className="text-primary hover:text-secondary border border-black/10 rounded-md py-[14px] px-[15px] transition-colors duration-200 cursor-pointer"
        >
          <Search size={20} />
        </button>

        <Link
          href="/contact"
          className="px-6.25 py-3.75 bg-primary text-white text-sm font-medium rounded-md transition-colors duration-300"
        >
          <ButtonThree
            frontText="Let's Talk."
            backText="Get started now"
            backgroundColor="transparent"
            fontSize={14}
            paddingTop={0}
            paddingBottom={0}
            paddingLeft={0}
            paddingRight={0}
          />
        </Link>
      </div>
    </header>
  );
};

export default NavbarOne;