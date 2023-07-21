'use client'

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Home() {
  function handleClick(link: string) {
    window.open(`${link}`,'_blank');
  }

  return (
    <main className='flex flex-col items-center min-h-screen'>
        <Navbar handleClick={handleClick} underline="Members" />
        <div className='text-xl md: grid md:grid-cols-3 md:items-center md:h-[60vh] md:m-10'>
          <div
            className='flex flex-col gap-3 items-center p-6 pb-0 font-Josefin text-2xl'>
          <p>Josh Bialkin</p>
          <img src="../img/josh.jpg" alt="Josh" className='h-[400px] w-[400px] relative object-cover object-top mb-6'/>
        </div>
        <div className='px-6 pb-6 font-Quattrocento md:col-span-2'>
          <p className='mb-4'>
            Josh Bialkin is a trumpet player from the fabled land of New Jersey. He received a Bachelor of Music in 
            2020 from the Mannes School of Music where he studied with Vince Penzarella, Thomas Smith, and Mark Gould. 
            In 2022, he completed his Master of Music at Yale University under the tutelage of Kevin Cobb. This spring, 
            he will graduate with a Master of Musical Arts. He attended Eastern Music Festival in 2019. Josh has performed 
            with a variety of ensembles including the New Haven Symphony Orchestra, Yale Philharmonia, and the Varna 
            International Music Academy, Josh enjoys many activities outside of music, including walking, cooking anything 
            as ambitious as boiling water, and sleeping.
          </p>
        </div>
        </div>
        <Footer handleClick={handleClick} />
    </main>
  )
}