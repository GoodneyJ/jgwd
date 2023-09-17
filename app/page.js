


import Hero from './Hero'
import Navigation from './Navigation'
import About from './About'
import QuoteCarousel from './QuoteCarousel'
import Footer from './Footer'
import ImageCarousel from './ImageCarousel'


export default function Home() {
  return (
    <main className=''>
      <Navigation />
      <Hero />
      <About />
      <QuoteCarousel />
      <Footer />
    </main>
  )
}
