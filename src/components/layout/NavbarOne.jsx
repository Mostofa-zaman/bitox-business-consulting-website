"use client";

import { useState , useCallback ,} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import {
  NAV_LINKS,
  DesktopNavItem,
} from "@/components/helper/helpers";
import ButtonThree from "../common/ButtonThree";

function useNavbar() {
  const pathname = usePathname();

  const [openDropdown] = useState(null);
  const [scrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);




   const openSearch = useCallback(() => setSearchOpen(true), []);

  return {
   pathname,
    scrolled,
    mobileOpen,
    openDropdown,
    openSearch, // ← NEW

  };
}

const NavbarOne = () => {
  const {
    pathname,
    scrolled,
    mobileOpen,
    openDropdown,
    toggleMobileMenu,
    openSearch,

  } = useNavbar();

  return (
   <>
   
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

     {/* ── Mobile Navbar */}
      <header
        className={`fixed left-4 right-4 top-4 z-50 flex lg:hidden items-center justify-between px-5 h-[60px] rounded-md transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/images/logo/Nav_logo.png"
            alt="Bitox"
            width={90}
            height={28}
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          {/* ← onClick added */}
          <button
            onClick={openSearch}
            aria-label="Search"
            className="text-primary border border-black/10 rounded-md py-3.25 px-3.25 transition-colors duration-200 cursor-pointer"
          >
            <Search size={18} />
          </button>
          <button
            onClick={toggleMobileMenu}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
   </>
  );
};

export default NavbarOne;