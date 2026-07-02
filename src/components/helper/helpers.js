


export function isActiveLink(href, pathname) {
  if (href === "/") return pathname === "/";
  return pathname === href;
}

export function hasActiveChild(children, pathname) {
  return children?.some((child) => isActiveLink(child.href, pathname));
}