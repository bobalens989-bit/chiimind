import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductPreview from '@/components/ProductPreview'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <Hero />
      <ProductPreview />
      <CallToAction />
      <Footer />
    </main>
  )
}
