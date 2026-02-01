import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './Sections/hero-section'
import Whychoose from './Sections/Whychoose'
import AboutSection from './Sections/About-us-section'
import HowItWorks from './Sections/How-it-works-section'
import CTA from './Sections/CTA'
import Footer from './Sections/Footer'
import ContactSection from './Sections/Contact-section'
import FAQ from './Sections/FAQ'

const App:React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Whychoose />
      <AboutSection />
      <HowItWorks />
      <ContactSection />
      <CTA />
      <FAQ />
      <Footer />
    </>
  )
}

export default App