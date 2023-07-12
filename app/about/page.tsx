'use client'

import Navbar from '../components/Navbar'
import About from '../components/About';
import Footer from '../components/Footer'

export default function Home() {
  function handleClick(link: string) {
    window.open(`${link}`,'_blank');
  }

  return (
    <main className='font-Bodoni'>
        <Navbar handleClick={handleClick} />
        <About />
        <Footer handleClick={handleClick} />
    </main>
  )
}