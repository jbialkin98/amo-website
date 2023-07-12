'use client'

import Image from 'next/image'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Footer from './components/Footer'

export default function Home() {
  function handleClick(link: string) {
    window.open(`${link}`,'_blank');
  }

  return (
    <main className='font-Bodoni'>
      <Navbar handleClick={handleClick} />
      <Homepage />
      <Footer handleClick={handleClick} />
    </main>
  )
}