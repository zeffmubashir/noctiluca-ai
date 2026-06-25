'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    function onScroll(): void {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(href: string): void {
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-[#1a1a1a]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <a href="/" className="flex items-center no-underline">
            <span className="text-lg font-semibold tracking-tight text-white">
              noctiluca
            </span>
            <span className="text-lg font-semibold tracking-tight text-[#00d4ff]">
              .ai
            </span>
          </a>
        </motion.div>

        <motion.div
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm tracking-wide text-[#a1a1aa] hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="hidden md:flex items-center"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <button
            onClick={() => handleNavClick('#contact')}
            className="text-[#00d4ff] text-sm font-medium px-5 py-2 rounded-lg border border-[rgba(0,212,255,0.2)] bg-transparent cursor-pointer transition-all duration-300 ease-in-out hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.05)] hover:shadow-[0_0_24px_rgba(0,212,255,0.15)]"
          >
            Book a call
          </button>
        </motion.div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex md:hidden items-center justify-center text-[#a1a1aa] hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[rgba(10,10,10,0.95)] backdrop-blur-xl border-b border-[#1a1a1a]"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.2 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-base text-left text-[#a1a1aa] hover:text-white transition-colors duration-200 py-3 w-full bg-transparent border-none cursor-pointer ${
                    index < navLinks.length - 1
                      ? 'border-b border-[#1a1a1a]'
                      : ''
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              <button
                onClick={() => handleNavClick('#contact')}
                className="mt-4 w-full py-3 text-center text-[#00d4ff] text-sm font-medium rounded-lg border border-[rgba(0,212,255,0.2)] bg-transparent cursor-pointer transition-all duration-300 ease-in-out hover:border-[#00d4ff] hover:bg-[rgba(0,212,255,0.05)] hover:shadow-[0_0_24px_rgba(0,212,255,0.15)]"
              >
                Book a call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
