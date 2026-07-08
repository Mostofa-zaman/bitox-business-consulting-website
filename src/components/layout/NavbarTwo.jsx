"use client";

import { Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesktopNavItem, NAV_LINKS } from "../helper/helpers";

// --- Logic ---
function useNavbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);


    useEffect(() => {
    setMobileOpen(false);
  
  }, [pathname]);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = useCallback((label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  }, []);


   const toggleMobileMenu = useCallback(() => setMobileOpen((prev) => !prev), []);

  return {
    pathname,
    scrolled,
    handleMouseEnter,
    handleMouseLeave,
     toggleMobileMenu,
    openDropdown,
      mobileOpen,
  };
}

const NavbarTwo = () => {
  const {
    pathname,
    scrolled,
    handleMouseEnter,
    handleMouseLeave,
    openDropdown,
     toggleMobileMenu,
       mobileOpen,
  } = useNavbar();

  return (
    <>
      {/* ── Desktop Navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 hidden lg:flex items-center justify-between px-10 h-[100px] bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
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

        <nav className="flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <DesktopNavItem
              key={link.label}
              link={link}
              openDropdown={openDropdown}
              onEnter={handleMouseEnter}
              onLeave={handleMouseLeave}
              pathname={pathname}
              dropdownStyle="flat"
              height="full"
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <Phone size={18} className="text-white" />
          </div>

          <span className="text-base font-semibold text-primary tracking-wide">
            9 500 212 09 88
          </span>
        </div>
      </header>

        {/* ── Mobile Navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 flex lg:hidden items-center justify-between px-5 h-[70px] bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
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
        <button
          onClick={toggleMobileMenu}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
    </>
  );
};

export default NavbarTwo;