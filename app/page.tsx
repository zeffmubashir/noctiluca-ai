import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import HowItWorks from '@/components/HowItWorks'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  )
}
