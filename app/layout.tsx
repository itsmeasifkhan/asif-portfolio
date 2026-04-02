import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohmmad Asif — Flutter Developer',
  description: 'Flutter Developer passionate about complex UIs, seamless interactions, and mobile experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#080808] text-white antialiased">{children}</body>
    </html>
  )
}
