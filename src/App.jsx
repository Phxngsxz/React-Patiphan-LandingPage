import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import InfoOne from './components/InfoOne'
import InfoTwo from './components/InfoTwo'
import CTA from './components/CTA'
import Testimonials from './components/Testimonials'
import GetInTouch from './components/GetInTouch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <InfoOne />
      <InfoTwo />
      <CTA />
      <Testimonials />
      <GetInTouch />
    </>
  )
}

export default App
