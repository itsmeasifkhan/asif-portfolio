'use client'
import { useEffect, useState } from 'react'

const roles = ['Flutter Developer', 'Mobile App Engineer', 'UI/UX Enthusiast', 'Dart Expert']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = roles[roleIdx]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[150px] translate-x-1/3 translate-y-1/3" />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="animate-fadeUp-delay-1">
              <span className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-accent inline-block" />
                Available for work
              </span>
            </div>

            <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-tight mb-6 animate-fadeUp-delay-2">
              Mohmmad<br />
              <span className="text-accent">Asif</span>
            </h1>

            <div className="text-2xl md:text-3xl font-display font-semibold text-white/80 mb-2 animate-fadeUp-delay-3 h-10">
              {displayed}<span className="cursor-blink text-accent">|</span>
            </div>

            <p className="text-white/40 text-base md:text-lg leading-relaxed mt-4 mb-8 max-w-md animate-fadeUp-delay-3">
              Passionate about refining complex UIs, turning ideas into Flutter designs, and creating seamless mobile interactions. 3+ years building apps loved by users.
            </p>

            <div className="flex flex-wrap gap-4 animate-fadeUp-delay-4">
              <a
                href="#projects"
                className="px-7 py-3 bg-accent text-white font-display font-semibold text-sm tracking-wide hover:bg-accent-light transition-colors duration-200"
              >
                View Projects →
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-white/10 text-white/70 font-display font-semibold text-sm tracking-wide hover:border-white/30 hover:text-white transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 animate-fadeUp-delay-4">
              {[
                { val: '3+', label: 'Years Experience' },
                { val: '15+', label: 'Apps Shipped' },
                { val: '2', label: 'Companies' },
              ].map(s => (
                <div key={s.label}>
                  <div className="font-display font-extrabold text-3xl text-accent">{s.val}</div>
                  <div className="text-white/35 text-xs tracking-wide mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual card */}
          <div className="relative flex justify-center animate-fadeUp-delay-3">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-accent/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-accent/10" />

              {/* Center card */}
              <div className="absolute inset-8 bg-surface rounded-2xl border border-white/8 flex flex-col items-center justify-center p-4 animate-float">
                {/* Flutter logo approximate */}
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 32L28 8L44 8L24 32L12 32Z" fill="#54C5F8"/>
                  <path d="M24 32L36 32L44 48L32 48L24 32Z" fill="#01579B"/>
                  <path d="M24 32L36 32L32 40L20 40L24 32Z" fill="#29B6F6"/>
                </svg>
                <div className="font-display font-bold text-sm text-white mt-3">Flutter</div>
                <div className="text-white/30 text-xs">Developer</div>
              </div>

              {/* Floating tags */}
              <div className="absolute -top-4 -right-4 bg-[#161616] border border-white/8 rounded-lg px-3 py-1.5 text-xs font-medium text-white/70 shadow-xl">
                Dart 🎯
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#161616] border border-white/8 rounded-lg px-3 py-1.5 text-xs font-medium text-white/70 shadow-xl">
                Firebase 🔥
              </div>
              <div className="absolute top-1/2 -right-10 bg-accent/10 border border-accent/20 rounded-lg px-3 py-1.5 text-xs font-medium text-accent shadow-xl">
                GetX ✓
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}
