import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Divider from '@/components/Divider'

const BASE_URL = 'https://mohmmad-asif-portfolio.vercel.app'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohmmad Asif',
  url: BASE_URL,
  jobTitle: 'Flutter Developer',
  description:
    'Flutter Developer with 4+ years of experience building mobile and web apps. Shipped 10+ apps on Play Store and App Store.',
  email: 'aasif87917@gmail.com',
  telephone: '+918791700125',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Delhi',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/in/mohmmad-asif',
    'https://github.com/itsmeaasifkhan',
    'https://www.instagram.com/itsmeaasifkhan',
    'https://x.com/itsmeaasifkhaan',
  ],
  knowsAbout: ['Flutter', 'Dart', 'Next.js', 'TypeScript', 'React', 'Firebase', 'Mobile Development'],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <Hero />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>
    </>
  )
}