'use client'

import Navbar from '.../components/Navbar'
import Footer from '.../components/Footer'

export default function Home() {
  function handleClick(link: string) {
    window.open(`${link}`,'_blank');
  }

  return (
    <main className='flex flex-col min-h-screen'>
        <Navbar handleClick={handleClick} underline="Members" />
        <div>Test</div>
        <Footer handleClick={handleClick} />
    </main>
  )
}