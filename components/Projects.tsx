const projects = [
  {
    name: 'Misto (Customer)',
    type: 'E-commerce App',
    desc: 'Full-stack e-commerce app built with Riverpod & Atomic Design. CMS-driven UI with real-time storefront customization — no app update required.',
    tags: ['Flutter', 'Next.js', 'Riverpod', 'TypeScript'],
    featured: true,
  },
  {
    name: 'Vibes Melody',
    type: 'Social Dating App',
    desc: 'A social dating app enabling users to connect through chat, voice & video calls, with reels video sharing for enhanced discovery.',
    tags: ['Flutter', 'Firebase', 'Agora', 'GetX'],
    playStore: 'https://play.google.com/store/apps/details?id=com.mariox.vibes_melody',
    featured: true,
  },
  {
    name: '3RoodQ8',
    type: 'E-commerce App',
    desc: 'Kuwait-based bilingual (Arabic/English) electronics e-commerce store with seamless shopping experience, live on both stores.',
    tags: ['Flutter', 'Dart', 'REST API', 'GetX'],
    playStore: 'https://play.google.com/store/apps/details?id=com.creativity.threerood',
    appStore: 'https://apps.apple.com/in/app/3roodq8-online-shopping-app/id1443063291',
    featured: true,
  },
  {
    name: 'Hunttr',
    type: 'Dating App',
    desc: 'Connects nearby users for chatting and interaction. 4.5+ star rating within 3 months of launch.',
    tags: ['Flutter', 'Socket.io', 'Firebase', 'GetX'],
    playStore: 'https://play.google.com/store/apps/details?id=com.hunterr',
  },
  {
    name: 'Rishtaywala',
    type: 'Matrimonial App',
    desc: 'Matrimonial app with user connections, Firebase-powered chat, and location-based user discovery.',
    tags: ['Flutter', 'Firebase', 'Google Maps'],
    playStore: 'https://play.google.com/store/apps/details?id=com.matrimonial.rishtaywala',
  },
  {
    name: 'NB Star',
    type: 'Video Editing App',
    desc: 'News editing app that automates animation overlays on media assets using FFmpeg, reducing manual editing effort.',
    tags: ['Flutter', 'FFmpeg', 'Video Player'],
    playStore: 'https://play.google.com/store/apps/details?id=org.ourukd',
  },
  {
    name: 'Iman Ki Baten',
    type: 'Education App',
    desc: 'Islamic studies app with comprehensive video courses across 5+ modules. Efficient navigation using GetX.',
    tags: ['Flutter', 'GetX', 'Video'],
    playStore: 'https://play.google.com/store/apps/details?id=com.mariox.imaan_ki_baatein',
  },
  {
    name: 'store.misto.life',
    type: 'Web Portal',
    desc: 'Seller web portal built independently from scratch with Next.js, TypeScript & Tailwind CSS. First web project, delivered on schedule.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
]

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute left-0 top-1/4 w-72 h-72 rounded-full bg-blue-500/3 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent text-sm font-medium tracking-widest uppercase flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-accent" />My Work
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white">Featured Projects</h2>
        </div>

        {/* Featured */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {featured.map((p, i) => (
            <div key={i} className="card-hover relative bg-[#111] border border-white/7 rounded-xl overflow-hidden group">
              {/* Top accent */}
              <div className="h-0.5 bg-gradient-to-r from-accent to-transparent" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-accent text-xs tracking-widest uppercase font-medium">{p.type}</span>
                    <h3 className="font-display font-bold text-xl text-white mt-1 group-hover:text-accent transition-colors">{p.name}</h3>
                  </div>
                  <div className="flex gap-2">
                    {p.playStore && (
                      <a href={p.playStore} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-accent/20 border border-white/8 flex items-center justify-center transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/60">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                      </a>
                    )}
                    {p.appStore && (
                      <a href={p.appStore} target="_blank" rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-blue-500/20 border border-white/8 flex items-center justify-center transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/60">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.78,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 text-white/40 rounded font-mono">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div>
          <h3 className="font-display font-semibold text-white/50 text-sm tracking-widest uppercase mb-6">Other Notable Apps</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {rest.map((p, i) => (
              <div key={i} className="card-hover bg-[#0e0e0e] border border-white/5 rounded-xl p-5 group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/25 text-xs tracking-wide">{p.type}</span>
                  {p.playStore && (
                    <a href={p.playStore} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-accent transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                    </a>
                  )}
                </div>
                <h4 className="font-display font-semibold text-white text-sm group-hover:text-accent transition-colors mb-2">{p.name}</h4>
                <p className="text-white/30 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional */}
        <div className="mt-10 p-6 bg-[#0e0e0e] border border-white/5 rounded-xl">
          <p className="text-white/30 text-sm mb-3">+ Additional Projects</p>
          <div className="flex flex-wrap gap-2">
            {['QNR (Enquiry App)', 'JustTakeIt (E-commerce)', 'School App', 'Sanx (E-commerce)', 'Docazy User App', 'Docazy Doctor App', 'Guard App'].map(name => (
              <span key={name} className="text-xs px-3 py-1.5 border border-white/8 text-white/30 rounded-full">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
