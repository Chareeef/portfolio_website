'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed w-full z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center md:items-start">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Youssef Charif Hamidi
        </h1>
        <nav className="hidden md:flex space-x-4">
          <Link href="/#experience" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Experience</Link>
          <Link href="/#projects" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</Link>
          <Link href="/#skills" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Skills</Link>
          <Link href="/#contact" className="text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            aria-label="Toggle theme"
          >
            {mounted && (
              theme === 'dark' ? 
                <Sun className="h-5 w-5 text-yellow-500" /> : 
                <Moon className="h-5 w-5 text-gray-900" />
            )}
          </button>
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/10 dark:bg-black/10 backdrop-blur-md">
          <Link href="/#experience" className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800" onClick={toggleMenu}>Experience</Link>
          <Link href="/#projects" className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800" onClick={toggleMenu}>Projects</Link>
          <Link href="/#skills" className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800" onClick={toggleMenu}>Skills</Link>
          <Link href="/#contact" className="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </header>
  )
}

export default Header

