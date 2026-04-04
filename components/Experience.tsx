export default function Experience() {
  const jobs = [
    {
      company: 'Haabtek Labs Pvt. Ltd.',
      role: 'Flutter Developer',
      period: 'Dec 2024 – Present',
      color: '#e63946',
      projects: [
        { name: 'Misto (Customer)', type: 'E-commerce App', desc: 'Full-stack Flutter app with Riverpod & Atomic Design — scalable, modular, and production-ready.' },
        { name: 'Misto Business', type: 'Seller App', desc: 'Seller-facing e-commerce app with CMS-driven UI and real-time storefront customization.' },
        { name: 'store.misto.life', type: 'Seller Web Portal', desc: 'Built independently from scratch using Next.js, TypeScript, and Tailwind CSS — first web project, delivered on schedule.' },
        { name: 'Server-Driven Theming', type: 'CMS System', desc: 'Runtime theming system enabling sellers to customize website design via app with real-time updates — no redeployment needed.' },
      ]
    },
    {
      company: 'Mariox Software',
      role: 'Flutter Developer',
      period: 'Feb 2024 – Aug 2024',
      color: '#a78bfa',
      projects: [
        { name: 'Vibes Melody', type: 'Social Dating App', desc: 'Real-time chat, voice & video calls via Agora SDK, and reels integration.' },
        { name: 'NB Star', type: 'Video Editing App', desc: 'FFmpeg-powered news editing with animated overlays on media assets.' },
        { name: 'Iman Ki Baten', type: 'Education App', desc: 'Islamic video courses with GetX state management across 5+ modules.' },
        { name: 'Uttarakhand Kranti Dal', type: 'Politics News', desc: 'Blogs, videos, and political news delivery app with an intuitive UI.' },
      ]
    },
    {
      company: 'Xcrino Business Solutions',
      role: 'Flutter Developer',
      period: 'Mar 2022 – Feb 2024',
      color: '#54C5F8',
      projects: [
        { name: 'Hunttr', type: 'Dating App', desc: 'Nearby user discovery, real-time chat via Socket.io & Firebase. 4.5+ star rating within 3 months.' },
        { name: 'Rishtaywala', type: 'Matrimonial App', desc: 'User connections, Firebase chat, location-based discovery. Live on Play Store & App Store.' },
        { name: '3RoodQ8', type: 'E-commerce App', desc: 'Bilingual (Arabic/English) electronics store for Kuwait market, live on both stores.' },
        { name: 'Healthcare & More', type: '6+ Projects', desc: 'Docazy (User & Doctor), JustTakeIt, Sanx, School App, Guard App, QNR across 4 domains.' },
      ]
    }
  ]

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute right-0 top-1/3 w-64 h-64 rounded-full bg-accent/3 blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent text-sm font-medium tracking-widest uppercase flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-accent" />Work History
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white">Experience</h2>
        </div>

        <div className="space-y-16">
          {jobs.map((job, ji) => (
            <div key={ji} className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12">
              {/* Left: company info */}
              <div>
                <div className="sticky top-24">
                  <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase mb-3"
                    style={{ color: job.color, backgroundColor: `${job.color}15`, border: `1px solid ${job.color}30` }}>
                    {ji === 0 ? 'Current' : ji === 1 ? 'Previous' : 'Earlier'}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-1">{job.company}</h3>
                  <p className="text-white/40 text-sm">{job.role}</p>
                  <p className="text-white/25 text-xs mt-1 font-mono">{job.period}</p>
                  <div className="w-8 h-0.5 mt-4" style={{ backgroundColor: job.color }} />
                </div>
              </div>

              {/* Right: projects */}
              <div className="grid sm:grid-cols-2 gap-4">
                {job.projects.map((p, pi) => (
                  <div
                    key={pi}
                    className="card-hover bg-[#111] border border-white/7 rounded-xl p-5 group cursor-default"
                  >
                    <div className="text-xs font-medium tracking-wide mb-2" style={{ color: job.color }}>
                      {p.type}
                    </div>
                    <h4 className="font-display font-semibold text-white text-base mb-2 group-hover:text-accent transition-colors">
                      {p.name}
                    </h4>
                    <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
