'use client'
import { useState, useEffect } from 'react'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/5' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-xl tracking-tight">
          <span className="text-white">MA</span>
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-medium tracking-wide"
            >
              {link}
            </a>
          ))}
          <a
            href="mailto:aasif87917@gmail.com"
            className="text-sm px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 font-medium"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0e0e0e] border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white text-lg font-display"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
