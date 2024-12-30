import React from "react";

export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
  href: string,
  offset: number = 0,
) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const headerHeight = 80; // Adjust this value based on header's height
    const elementPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - headerHeight - offset,
      behavior: "smooth",
    });
  }
};
