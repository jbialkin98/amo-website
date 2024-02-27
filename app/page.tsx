'use client'

import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <Navbar underline="Home" />
      <Homepage />
      <Footer />
    </main>
  )
}