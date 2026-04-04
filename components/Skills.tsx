const skillGroups = [
  {
    label: 'Mobile',
    color: '#54C5F8',
    skills: ['Flutter', 'Dart', 'Android', 'iOS', 'OOP']
  },
  {
    label: 'Web',
    color: '#e63946',
    skills: ['Next.js (v15/16)', 'TypeScript', 'Tailwind CSS', 'React']
  },
  {
    label: 'State Management',
    color: '#a78bfa',
    skills: ['Riverpod', 'GetX', 'Provider', 'MVC', 'MVVM', 'MVP', 'Atomic Design']
  },
  {
    label: 'Backend & APIs',
    color: '#ffc857',
    skills: ['Firebase', 'REST API', 'Socket.io', 'Third-Party APIs']
  },
  {
    label: 'Payments',
    color: '#2ec4b6',
    skills: ['Razorpay', 'Cashfree', 'PhonePe', 'In-App Purchase']
  },
  {
    label: 'Media & Comms',
    color: '#ff9f1c',
    skills: ['FFmpeg', 'Agora (Voice/Video)', 'OneSignal', 'Video Player', 'Google Maps']
  },
  {
    label: 'Tools',
    color: '#a8dadc',
    skills: ['Git', 'Bitbucket', 'JIRA', 'Postman', 'Xcode', 'Android Studio', 'VS Code', 'Figma']
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(230,57,70,0.8) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-16">
          <span className="text-accent text-sm font-medium tracking-widest uppercase flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-accent" />Tech Stack
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <div key={gi} className="bg-[#111] border border-white/7 rounded-xl p-6 card-hover group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} />
                <span className="font-display font-semibold text-sm tracking-wide" style={{ color: group.color }}>
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-md border text-white/60 hover:text-white transition-colors"
                    style={{ backgroundColor: `${group.color}08`, borderColor: `${group.color}20` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-[#111] border border-white/7 rounded-xl p-6">
            <span className="text-accent text-xs tracking-widest uppercase font-medium">Education</span>
            <h3 className="font-display font-bold text-lg text-white mt-2">Master of Computer Application</h3>
            <p className="text-white/40 text-sm mt-1">Maharshi Dayanand University</p>
            <p className="text-white/25 text-xs mt-1 font-mono">2023 · CGPA: 6.58</p>
          </div>
          <div className="bg-[#111] border border-white/7 rounded-xl p-6">
            <span className="text-[#54C5F8] text-xs tracking-widest uppercase font-medium">Education</span>
            <h3 className="font-display font-bold text-lg text-white mt-2">Bachelor of Computer Application</h3>
            <p className="text-white/40 text-sm mt-1">Disha Institute of Science & Technology</p>
            <p className="text-white/25 text-xs mt-1 font-mono">2019 · 62%</p>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-6 bg-[#111] border border-white/7 rounded-xl p-6">
          <span className="text-white/40 text-xs tracking-widest uppercase font-medium">Languages</span>
          <div className="flex gap-6 mt-3">
            <div>
              <span className="text-white font-medium text-sm">Hindi</span>
              <span className="text-white/30 text-xs ml-2">Native</span>
            </div>
            <div>
              <span className="text-white font-medium text-sm">English</span>
              <span className="text-white/30 text-xs ml-2">Moderate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
