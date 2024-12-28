"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed z-50 w-full bg-white/10 backdrop-blur-md dark:bg-black/10">
      <div className="container relative mx-auto flex items-center justify-between gap-4 px-2 py-4 md:px-4">
        <Link className="relative flex items-center gap-2" href="">
          <Image
            src="/my_picture.png"
            width={450}
            height={450}
            alt="Youssef Charif Hamidi"
            className="h-12 w-12 rounded-full object-cover md:h-16 md:w-16"
          />
          <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Youssef Charif Hamidi
          </h1>
        </Link>
        <nav className="mx-4 hidden items-center gap-4 md:flex">
          <Link
            href="/#experience"
            className="text-gray-900 transition-colors hover:text-purple-600 dark:text-white dark:hover:text-purple-400"
          >
            Experience
          </Link>
          <Link
            href="/#projects"
            className="text-gray-900 transition-colors hover:text-purple-600 dark:text-white dark:hover:text-purple-400"
          >
            Projects
          </Link>
          <Link
            href="/#certificates"
            className="text-gray-900 transition-colors hover:text-purple-600 dark:text-white dark:hover:text-purple-400"
          >
            Certificates
          </Link>
          <Link
            href="/#skills"
            className="text-gray-900 transition-colors hover:text-purple-600 dark:text-white dark:hover:text-purple-400"
          >
            Skills
          </Link>
          <Link
            href="/#contact"
            className="text-gray-900 transition-colors hover:text-purple-600 dark:text-white dark:hover:text-purple-400"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-4 flex items-center space-x-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full bg-gray-200 p-2 dark:bg-gray-800"
            aria-label="Toggle theme"
          >
            {mounted &&
              (theme === "dark" ||
              (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-900" />
              ))}
          </button>
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-900 dark:text-white"
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
        <div className="bg-white/10 backdrop-blur-md dark:bg-black/10 md:hidden">
          <Link
            href="/#experience"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            href="/#projects"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/#skills"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            href="/#contact"
            className="block px-4 py-2 text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-800"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
