


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
