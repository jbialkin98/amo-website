'use client'

import Navbar from '../components/Navbar'
import About from '../components/About';
import Footer from '../components/Footer'

export default function Home() {
  function handleClick(link: string) {
    window.open(`${link}`,'_blank');
  }

  return (
    <main>
        <Navbar handleClick={handleClick} underline="About" />
        <About />
        <Footer handleClick={handleClick} />
    </main>
  )
}