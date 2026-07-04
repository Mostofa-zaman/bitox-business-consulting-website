"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

const NavbarOne = () => {
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const closeTimer = useRef(null);

  // Reset navbar state on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
  }, [pathname]);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Cleanup dropdown timer
  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const handleMouseEnter = useCallback((label) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    setOpenDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimer.current = null;
    }, 120);
  }, []);

  const toggleMobileDropdown = useCallback((label) => {
    setOpenMobileDropdown((prev) =>
      prev === label ? null : label
    );
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <nav>
      <h2>Navbar</h2>
    </nav>
  );
};

export default NavbarOne;