import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Domains from './components/Domains'
import Internships from './components/Internships'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-white text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Domains />
      <Internships />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
