export default function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="text-accent text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2 mb-4">
          <span className="w-8 h-px bg-accent" />Let's Connect<span className="w-8 h-px bg-accent" />
        </span>

        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight">
          Looking to build<br />
          <span className="shimmer-text">something great?</span>
        </h2>

        <p className="text-white/40 text-lg max-w-xl mx-auto mb-12">
          I'm open to Flutter developer roles, Next.js web projects, and full-stack opportunities. Let's build something great.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:aasif87917@gmail.com"
            className="px-8 py-4 bg-accent text-white font-display font-semibold text-base hover:bg-accent-light transition-colors duration-200"
          >
            aasif87917@gmail.com
          </a>
          <a
            href="tel:8791700125"
            className="px-8 py-4 border border-white/10 text-white/70 font-display font-semibold text-base hover:border-white/30 hover:text-white transition-all duration-200"
          >
            +91 8791700125
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a
            href="https://www.linkedin.com/in/aasif-khan-a99482204"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/30 hover:text-accent transition-colors text-sm"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <span className="w-px h-4 bg-white/10" />
          <span className="text-white/20 text-sm">Delhi, India</span>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        <p className="text-white/20 text-sm font-mono">
          © 2026 Mohmmad Asif. All rights reserved.
        </p>
      </div>
    </section>
  )
}
