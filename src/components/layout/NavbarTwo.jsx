import { Phone } from 'lucide-react'
import React from 'react'

const NavbarTwo = () => {
  return (
    <>
    <header className="fixed left-0 right-0 top-0 z-50 hidden lg:flex items-center justify-between px-10 h-[100px] bg-white shadow-md">
  {/* Logo */}
  <a href="/" aria-label="Go to homepage">
    <img
      src="/images/logo/Nav_logo.png"
      alt="Bitox"
      width="106"
      height="32"
    />
  </a>

  {/* Navigation */}
  <nav
    className="flex items-center gap-8"
    aria-label="Main navigation"
  >
    <a
      href="/"
      className="text-2xl font-medium hover:text-secondary transition-colors"
    >
      Home
    </a>

    <a
      href="/about"
      className="text-2xl font-medium hover:text-secondary transition-colors"
    >
      About
    </a>

    <a
      href="/services"
      className="text-2xl font-medium hover:text-secondary transition-colors"
    >
      Services
    </a>

    <a
      href="/projects"
      className="text-2xl font-medium hover:text-secondary transition-colors"
    >
      Projects
    </a>

    <a
      href="/blog"
      className="text-2xl font-medium hover:text-secondary transition-colors"
    >
      Blog
    </a>

    <a
      href="/contact"
      className="text-2xl  font-medium hover:text-secondary transition-colors"
    >
      Contact
    </a>
  </nav>

  {/* Phone */}
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
      <Phone size={18} className="text-white" />
    </div>

    <span className="text-base font-semibold text-primary tracking-wide">
      9 500 212 09 88
    </span>
  </div>
</header>
    </>
  )
}

export default NavbarTwo