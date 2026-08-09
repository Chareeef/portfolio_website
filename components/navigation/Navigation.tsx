"use client";

import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { Menu, X, ArrowDownToLine, ChevronDown } from "lucide-react";
import Image from "next/image";
import { links } from "@/data/portfolio";
import { copy, type Locale } from "@/lib/i18n";

type NavigationItem = { label: string; href: string };
type NavigationGroup = { label: string; items: NavigationItem[] };

export function Navigation({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [openProjectGroup, setOpenProjectGroup] = useState<string | null>(null);
  const [active, setActive] = useState("");
  const content = copy[locale].navigation;
  const items = useMemo<NavigationItem[]>(
    () => content.items.map(([label, href]) => ({ label, href })),
    [content.items],
  );
  const projectGroups = useMemo<NavigationGroup[]>(
    () => [
      {
        label: content.flagshipProjects,
        items: content.flagshipItems.map(([label, href]) => ({ label, href })),
      },
      {
        label: content.otherProjects,
        items: content.otherProjectItems.map(([label, href]) => ({
          label,
          href,
        })),
      },
    ],
    [content],
  );
  const observedItems = useMemo(
    () => [...projectGroups.flatMap((group) => group.items), ...items],
    [items, projectGroups],
  );
  const otherLocale = locale === "en" ? "fr" : "en";
  const languageHref = `/${otherLocale}`;
  const resumeHref = locale === "fr" ? links.resumeFr : links.resume;

  const preserveCurrentSection = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!window.location.hash) return;
    event.preventDefault();
    window.location.assign(`${languageHref}${window.location.hash}`);
  };

  useEffect(() => {
    const sections = observedItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));
    const sectionEntries = new Map<Element, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => sectionEntries.set(entry.target, entry));

        const visible = sections
          .map((section) => sectionEntries.get(section))
          .filter(
            (entry): entry is IntersectionObserverEntry =>
              Boolean(entry?.isIntersecting),
          )
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        setActive(visible ? `#${visible.target.id}` : "");
      },
      { rootMargin: "-30% 0px -62% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [observedItems]);

  useEffect(() => {
    if (!open && !openProjectGroup) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setOpenProjectGroup(null);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (
        open &&
        event.target instanceof Element &&
        !event.target.closest("[data-navigation-menu]")
      ) {
        setOpen(false);
        setOpenProjectGroup(null);
      }

      if (
        openProjectGroup &&
        event.target instanceof Element &&
        !event.target.closest("[data-project-dropdown]")
      ) {
        setOpenProjectGroup(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, openProjectGroup]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label={content.label}
        className="pointer-events-auto mx-auto flex max-w-[82rem] items-center justify-between rounded-full border border-white/10 bg-[#070a17]/75 px-3 py-2 shadow-[0_12px_50px_rgba(0,0,0,.3)] backdrop-blur-xl sm:px-4"
      >
        <a
          href="#top"
          className="flex min-h-11 items-center gap-3 rounded-full px-2"
          aria-label={content.backToTop}
        >
          <Image
            aria-hidden="true"
            src="/my_picture.png"
            alt=""
            width={64}
            height={64}
            className="size-8 rounded-full border border-[#e7c98d]/35 object-cover"
          />
          <span className="hidden whitespace-nowrap text-sm font-semibold tracking-[-0.02em] sm:block min-[1000px]:hidden min-[1180px]:block">
            Youssef Charif Hamidi
          </span>
        </a>

        <div className="hidden items-center gap-1 min-[1000px]:flex">
          {projectGroups.map((group) => {
            const groupIsActive = group.items.some(
              (item) => item.href === active,
            );

            return (
              <details
                key={group.label}
                open={openProjectGroup === group.label}
                data-project-dropdown
                className="group relative"
              >
                <summary
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenProjectGroup((current) =>
                      current === group.label ? null : group.label,
                    );
                  }}
                  className={`flex cursor-pointer list-none items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors [&::-webkit-details-marker]:hidden ${
                    groupIsActive
                      ? "bg-white/[.09] text-white"
                      : "text-[#aeb5ca] hover:text-white"
                  }`}
                >
                  {group.label}
                  <ChevronDown
                    aria-hidden="true"
                    size={14}
                    className="transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="absolute left-0 top-[calc(100%+.65rem)] w-max min-w-48 rounded-2xl border border-white/10 bg-[#080b19]/95 p-2 text-left shadow-2xl backdrop-blur-xl">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenProjectGroup(null)}
                      aria-current={active === item.href ? "location" : undefined}
                      className={`flex min-h-11 items-center whitespace-nowrap rounded-xl px-3 text-sm transition-colors ${
                        active === item.href
                          ? "bg-white/[.09] text-white"
                          : "text-[#aeb5ca] hover:bg-white/[.06] hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </details>
            );
          })}
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
              className={`whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors ${
                active === item.href
                  ? "bg-white/[.09] text-white"
                  : "text-[#aeb5ca] hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={resumeHref}
            download={
              locale === "fr" ? "CV – Youssef Charif Hamidi.pdf" : true
            }
            className="ml-2 inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full border border-white/[.14] px-3 text-sm text-[#f2eee5] transition-colors hover:border-[#e7c98d]/55"
          >
            {content.resume} <ArrowDownToLine aria-hidden="true" size={15} />
          </a>
          <a
            href={languageHref}
            hrefLang={otherLocale}
            lang={otherLocale}
            onClick={preserveCurrentSection}
            aria-label={content.switchLanguage}
            className="ml-1 grid min-h-10 min-w-11 place-items-center rounded-full border border-white/[.14] px-3 font-mono text-xs font-medium tracking-[0.08em] text-[#f2eee5] transition-colors hover:border-[#e7c98d]/55"
          >
            {locale.toUpperCase()}
          </a>
        </div>

        <div className="hidden items-center gap-1 md:flex min-[1000px]:hidden">
          <a
            href={resumeHref}
            download={
              locale === "fr" ? "CV – Youssef Charif Hamidi.pdf" : true
            }
            className="inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full border border-white/[.14] px-3 text-sm text-[#f2eee5] transition-colors hover:border-[#e7c98d]/55"
          >
            {content.resume} <ArrowDownToLine aria-hidden="true" size={15} />
          </a>
          <a
            href={languageHref}
            hrefLang={otherLocale}
            lang={otherLocale}
            onClick={preserveCurrentSection}
            aria-label={content.switchLanguage}
            className="grid min-h-10 min-w-11 place-items-center rounded-full border border-white/[.14] px-3 font-mono text-xs font-medium tracking-[0.08em] text-[#f2eee5] transition-colors hover:border-[#e7c98d]/55"
          >
            {locale.toUpperCase()}
          </a>
          <button
            type="button"
            data-navigation-menu
            className="grid size-11 place-items-center rounded-full text-white transition-colors hover:bg-white/[.07]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? content.close : content.open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <div className="flex items-center md:hidden">
          <a
            href={languageHref}
            hrefLang={otherLocale}
            lang={otherLocale}
            onClick={preserveCurrentSection}
            aria-label={content.switchLanguage}
            className="grid min-h-10 min-w-11 place-items-center rounded-full border border-white/[.12] px-3 font-mono text-xs font-medium tracking-[0.08em] text-[#f2eee5]"
          >
            {locale.toUpperCase()}
          </a>
          <button
            type="button"
            data-navigation-menu
            className="grid size-11 place-items-center rounded-full text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? content.close : content.open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <nav
          id="mobile-menu"
          data-navigation-menu
          aria-label={content.mobileLabel}
          className="pointer-events-auto mx-auto mt-2 max-h-[calc(100dvh-5.75rem)] max-w-[82rem] overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-[#080b19]/95 p-3 text-left shadow-2xl backdrop-blur-xl min-[1000px]:hidden"
        >
          <div className="min-[1000px]:hidden">
            {projectGroups.map((group) => (
              <details
                key={group.label}
                open={openProjectGroup === group.label}
                data-project-dropdown
                className="group py-1"
              >
                <summary
                  onClick={(event) => {
                    event.preventDefault();
                    setOpenProjectGroup((current) =>
                      current === group.label ? null : group.label,
                    );
                  }}
                  className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 whitespace-nowrap rounded-2xl px-4 font-mono text-[0.66rem] uppercase tracking-[0.15em] text-[#8b94ad] transition-colors hover:bg-white/[.07] hover:text-white [&::-webkit-details-marker]:hidden"
                >
                  {group.label}
                  <ChevronDown
                    aria-hidden="true"
                    size={14}
                    className="transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="pb-1 text-left">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setOpen(false);
                        setOpenProjectGroup(null);
                      }}
                      aria-current={active === item.href ? "location" : undefined}
                      className={`flex min-h-11 items-center whitespace-nowrap rounded-2xl px-4 text-sm ${
                        active === item.href
                          ? "bg-white/[.07] text-white"
                          : "text-[#c5cada] hover:bg-white/[.07]"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </details>
            ))}
          </div>
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center whitespace-nowrap rounded-2xl px-4 text-base text-[#d9dbea] hover:bg-white/[.07]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={resumeHref}
            download={
              locale === "fr" ? "CV – Youssef Charif Hamidi.pdf" : true
            }
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-12 items-center justify-between whitespace-nowrap rounded-2xl bg-[#f3efe4] px-4 font-semibold text-[#090b17] md:hidden"
          >
            {content.downloadResume}{" "}
            <ArrowDownToLine aria-hidden="true" size={18} />
          </a>
        </nav>
      ) : null}
    </header>
  );
}
