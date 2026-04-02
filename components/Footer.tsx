export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e2e] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-700">
          <span className="gradient-text">MA</span>
          <span className="text-[#6b6b8a]">.</span>
        </div>
        <p className="font-mono text-xs text-[#6b6b8a]">
          © 2025 Mohmmad Asif. All rights reserved.
        </p>
        <p className="font-mono text-xs text-[#6b6b8a]">
          Built with <span className="text-[#7c5cfc]">Flutter ♥</span> &amp; Next.js
        </p>
      </div>
    </footer>
  )
}
