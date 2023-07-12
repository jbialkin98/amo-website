'use client'

import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Footer from './components/Footer'

export default function Home() {
  function handleClick(link: string) {
    window.open(`${link}`,'_blank');
  }

  return (
    <main className='flex flex-col min-h-screen'>
      <Navbar handleClick={handleClick} underline="Home" />
      <Homepage />
      <Footer handleClick={handleClick} />
    </main>
  )
}