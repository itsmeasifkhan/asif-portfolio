const skillGroups = [
  {
    label: 'Core',
    color: '#54C5F8',
    skills: ['Flutter', 'Dart', 'Android', 'iOS', 'OOP']
  },
  {
    label: 'State Mgmt',
    color: '#e63946',
    skills: ['GetX', 'Provider', 'BLoC', 'MVC', 'MVVM', 'MVP']
  },
  {
    label: 'Backend / DB',
    color: '#ffc857',
    skills: ['Firebase', 'REST API', 'Third-party API', 'Socket.io']
  },
  {
    label: 'Payments',
    color: '#2ec4b6',
    skills: ['Razorpay', 'Cashfree', 'PhonePe', 'In-App Purchase']
  },
  {
    label: 'Media & Maps',
    color: '#ff9f1c',
    skills: ['FFmpeg', 'Agora', 'Google Maps', 'Video Player', 'Push Notifications']
  },
  {
    label: 'Tools',
    color: '#a8dadc',
    skills: ['Android Studio', 'VS Code', 'Xcode', 'Postman', 'Figma', 'Git', 'Bitbucket', 'JIRA']
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
            <p className="text-white/25 text-xs mt-1 font-mono">2021 – 2023 · CGPA: 6.58</p>
          </div>
          <div className="bg-[#111] border border-white/7 rounded-xl p-6">
            <span className="text-[#54C5F8] text-xs tracking-widest uppercase font-medium">Education</span>
            <h3 className="font-display font-bold text-lg text-white mt-2">Bachelor of Computer Application</h3>
            <p className="text-white/40 text-sm mt-1">Disha Institute of Technology and Management</p>
            <p className="text-white/25 text-xs mt-1 font-mono">2016 – 2019 · 62%</p>
          </div>
        </div>
      </div>
    </section>
  )
}
