'use client'

import Navbar from '../components/Navbar'
import About from '../components/About';
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <main className='flex flex-col min-h-screen'>
        <Navbar underline="About" />
        <About />
        <Footer />
    </main>
  )
}