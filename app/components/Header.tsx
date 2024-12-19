'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Youssef Charif Hamidi
        </h1>
        <nav className="hidden md:flex space-x-4">
          <Link href="#experience" className="text-white hover:text-purple-400 transition-colors">Experience</Link>
          <Link href="#projects" className="text-white hover:text-purple-400 transition-colors">Projects</Link>
          <Link href="#skills" className="text-white hover:text-purple-400 transition-colors">Skills</Link>
          <Link href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</Link>
        </nav>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full bg-gray-800 dark:bg-gray-200"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-800" />}
        </button>
        <button className="md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <Link href="#experience" className="block py-2 px-4 text-white hover:bg-gray-800" onClick={toggleMenu}>Experience</Link>
          <Link href="#projects" className="block py-2 px-4 text-white hover:bg-gray-800" onClick={toggleMenu}>Projects</Link>
          <Link href="#skills" className="block py-2 px-4 text-white hover:bg-gray-800" onClick={toggleMenu}>Skills</Link>
          <Link href="#contact" className="block py-2 px-4 text-white hover:bg-gray-800" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </header>
  )
}

export default Header

