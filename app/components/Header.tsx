"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { scrollToSection } from "../../utils";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed z-50 w-full bg-white/75 backdrop-blur-lg dark:bg-black/75">
      <div className="relative mx-auto flex items-center justify-between gap-2 px-2 py-2 sm:px-4 sm:py-3 md:py-4">
        <Link className="relative flex items-center gap-2" href="">
          <Image
            src="/my_picture.png"
            width={450}
            height={450}
            alt="Youssef Charif Hamidi"
            className="h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
          />
          <h1 className="text-center text-sm font-bold text-gray-900 dark:text-white sm:text-base md:text-lg lg:text-2xl xl:text-3xl">
            Youssef Charif Hamidi
          </h1>
        </Link>
        <nav className="hidden items-center gap-2 sm:gap-3 md:gap-4 lg:flex">
          {[
            "Experience",
            "Education",
            "Projects",
            "Certificates",
            "Skills",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, `#${item.toLowerCase()}`)}
              className="text-xs text-gray-900 transition-colors hover:text-purple-600 dark:text-white dark:hover:text-purple-400 sm:text-sm md:text-base lg:text-lg"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full bg-gray-200 p-1 dark:bg-gray-800 sm:p-2"
            aria-label="Toggle theme"
          >
            {mounted &&
              (theme === "dark" ||
              (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                <Sun className="h-4 w-4 text-yellow-500 sm:h-5 sm:w-5 md:h-7 md:w-7" />
              ) : (
                <Moon className="h-4 w-4 text-gray-900 sm:h-5 sm:w-5 md:h-7 md:w-7" />
              ))}
          </button>
          <button
            className="p-1 sm:p-2 lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5 text-gray-900 dark:text-white sm:h-6 sm:w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-white/10 backdrop-blur-md dark:bg-black/10 lg:hidden">
          {[
            "Experience",
            "Education",
            "Projects",
            "Certificates",
            "Skills",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              onClick={(e) => {
                scrollToSection(e, `#${item.toLowerCase()}`);
                toggleMenu();
              }}
              className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800 sm:text-base"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
