'use client'
import { useState, useEffect } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
      // Active section tracking
      const sections = links.map((l) => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const isDark = saved === 'dark'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur transition ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm' : 'bg-transparent'}`}
    >
      <nav className="relative container flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <a href="#" className="font-bold text-lg tracking-tight text-gray-900 dark:text-white">
          SR<span className="text-pink-500">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition font-medium ${
                activeSection === l.href.replace('#', '')
                  ? 'text-pink-500'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode((v) => !v)}
            className="ml-2 inline-flex items-center gap-2 text-sm border rounded-lg px-3 py-1.5 border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block text-sm bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition font-medium"
        >
          Hire me
        </a>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode((v) => !v)}
            className="text-gray-600 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center gap-4 py-6 md:hidden border-t border-gray-200 dark:border-gray-800 shadow-lg">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 transition font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition font-medium"
            >
              Hire me
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
