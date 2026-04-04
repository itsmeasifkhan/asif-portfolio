import type { Metadata } from 'next'
import './globals.css'

const BASE_URL = 'https://mohmmad-asif-portfolio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Mohmmad Asif — Flutter & Next.js Developer',
    template: '%s | Mohmmad Asif',
  },
  description:
    'Flutter Developer with 4+ years of experience building mobile & web apps. Shipped 10+ apps on Play Store & App Store. Now also building with Next.js and TypeScript.',
  keywords: [
    'Flutter Developer',
    'Flutter Developer Delhi',
    'Mobile App Developer India',
    'Next.js Developer',
    'Dart Developer',
    'Android iOS Developer',
    'Mohmmad Asif',
    'asif flutter',
    'hire flutter developer',
    'React Developer India',
  ],
  authors: [{ name: 'Mohmmad Asif', url: BASE_URL }],
  creator: 'Mohmmad Asif',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Mohmmad Asif — Flutter & Next.js Developer',
    description:
      'Flutter Developer with 4+ years of experience. 10+ apps shipped on Play Store & App Store. Now also building with Next.js.',
    siteName: 'Mohmmad Asif Portfolio',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohmmad Asif — Flutter & Next.js Developer',
    description:
      'Flutter Developer with 4+ years of experience. 10+ apps shipped. Now also building with Next.js.',
    creator: '@itsmeaasifkhaan',
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'IVJ8K1gIkoQPHMWGuZbbtBFEP8__y-4UaPgjYFlpoWY',
  },
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#080808] text-white antialiased">{children}</body>
    </html>
  )
}