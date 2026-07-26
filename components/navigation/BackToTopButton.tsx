"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTopButton({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#top"
      className={`fixed bottom-4 right-4 z-50 inline-flex size-12 items-center justify-center rounded-full border border-white/15 bg-[#090c19]/90 text-[#b9c3d8] shadow-[0_0.75rem_2.5rem_rgba(0,0,0,0.38)] backdrop-blur-xl transition-[opacity,border-color,background-color,color] duration-200 hover:border-[#a9eaf4]/40 hover:bg-[#10162a] hover:text-white md:bottom-6 md:right-6 ${
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      title={label}
    >
      <ArrowUp aria-hidden="true" size={18} strokeWidth={1.7} />
    </a>
  );
}
