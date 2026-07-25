"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import { links } from "@/data/portfolio";

const items = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -62% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className="pointer-events-auto mx-auto flex max-w-[82rem] items-center justify-between rounded-full border border-white/10 bg-[#070a17]/75 px-3 py-2 shadow-[0_12px_50px_rgba(0,0,0,.3)] backdrop-blur-xl sm:px-4"
      >
        <a
          href="#top"
          className="flex min-h-11 items-center gap-3 rounded-full px-2"
          aria-label="Youssef Charif Hamidi, back to top"
        >
          <Image
            aria-hidden="true"
            src="/my_picture.png"
            alt=""
            width={64}
            height={64}
            className="size-8 rounded-full border border-[#e7c98d]/35 object-cover"
          />
          <span className="hidden text-sm font-semibold tracking-[-0.02em] sm:block">
            Youssef Charif Hamidi
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
              className={`rounded-full px-3 py-2 text-sm transition-colors ${
                active === item.href
                  ? "bg-white/[.09] text-white"
                  : "text-[#aeb5ca] hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.resume}
            download
            className="ml-2 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/[.14] px-3 text-sm text-[#f2eee5] transition-colors hover:border-[#e7c98d]/55"
          >
            Résumé <ArrowDownToLine aria-hidden="true" size={15} />
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="pointer-events-auto mx-auto mt-2 max-w-[82rem] rounded-3xl border border-white/10 bg-[#080b19]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-2xl px-4 text-base text-[#d9dbea] hover:bg-white/[.07]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.resume}
            download
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-12 items-center justify-between rounded-2xl bg-[#f3efe4] px-4 font-semibold text-[#090b17]"
          >
            Download résumé <ArrowDownToLine aria-hidden="true" size={18} />
          </a>
        </nav>
      ) : null}
    </header>
  );
}
