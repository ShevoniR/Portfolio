
"use client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur transition \${scrolled ? "bg-white/70 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800" : "bg-transparent"}`}>
      <nav className="relative container flex justify-center items-center h-16">
        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
              {l.label}
            </a>
          ))}
          <button onClick={() => setDarkMode(v=>!v)} className="ml-2 inline-flex items-center gap-2 text-sm border rounded-lg px-3 py-1.5 border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition" aria-label="Toggle theme">
            {darkMode ? <FiSun /> : <FiMoon />}{darkMode ? "Light" : "Dark"}
          </button>
        </div>
        <a href="#contact" className="hidden md:inline-block absolute right-4 text-sm bg-brand hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">Hire me</a>
    <div className="md:hidden absolute right-4">
      <button
        onClick={() => setMobileMenuOpen(v => !v)}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none">
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>

    {mobileMenuOpen && (
      <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center gap-4 py-4 md:hidden border-t border-gray-200 dark:border-gray-800">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
            {l.label}
          </a>
        ))}
        <button 
          onClick={() => setDarkMode(v => !v)} 
          className="inline-flex items-center gap-2 text-sm border rounded-lg px-3 py-1.5 border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? <FiSun /> : <FiMoon />}{darkMode ? "Light" : "Dark"}
        </button>
        <a href="#contact" className="text-sm bg-brand hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
          Hire me
        </a>
      </div>
    )}

      </nav>
    </header>
  );
}
