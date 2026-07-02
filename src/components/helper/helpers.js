


export function isActiveLink(href, pathname) {
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export function hasActiveChild(children, pathname) {
  return children?.some((child) => isActiveLink(child.href, pathname));
}

export const NAV_LINKS = [
  {
    label: "Home",
    children: [
      { label: "Business Consultant", href: "/" },
      { label: "Consulting Agency", href: "/consulting-agency" },
    ],
  },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    children: [
      { label: "Services", href: "/services" },
      { label: "Service Details", href: "/services/details" },
    ],
  },
  {
    label: "Projects",
    children: [
      { label: "Projects", href: "/projects" },
      { label: "Project Details", href: "/projects/details" },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "Team", href: "/team" },
      { label: "Blog", href: "/blog" },
      { label: "Blog Details", href: "/blog/details" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "404", href: "/not-found" },
    ],
  },
  { label: "Contact", href: "/contact" },
];


export function DropdownMenu({
  children,
  isOpen,
  onClose,
  pathname,
  style = "rounded",
}) {
  const base = `absolute top-full left-0 w-52 bg-white  py-2 z-50 transition-all duration-200 ${
    isOpen
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-2 pointer-events-none"
  }`;

  const styles = {
    rounded: "mt-[23.5px] rounded-xl shadow-xl border-t border-secondary",
    flat: "mt-0 shadow-xl border-t-2 border-secondary",
  };

  return (
    <div className={`${base} ${styles[style]}`}>
      {children.map((child) => (
        <Link
          key={child.href}
          href={child.href}
          onClick={onClose}
          className={`block px-5 py-2.5 text-[16px] transition-colors  duration-200 ${
            isActiveLink(child.href, pathname)
              ? "text-secondary font-medium bg-secondary/5"
              : "text-primary hover:text-secondary hover:bg-secondary/5"
          }`}
        >
          {child.label}
        </Link>
      ))}
    </div>
  );
}