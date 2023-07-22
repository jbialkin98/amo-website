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
        <div className='text-xl md: grid md:grid-cols-3 md:items-center md:min-h-min md:m-10'>
          <div
            className='flex flex-col gap-3 items-center p-6 pb-0 font-Josefin text-2xl'>
            <p>Connor Holland</p>
            <img src="../img/connor.jpg" alt="Connor" className='h-[400px] w-[400px] md:col-span-1'/>
          </div>
          <p
            className='p-6 font-Quattrocento md:col-span-2'>
            Connor Holland began playing the trumpet at age 12 while growing up in 
            Jacksonville, FL. Holland attended Douglas Anderson School for the Arts 
            for High School and during that time, as a member of the Jacksonville 
            Symphony Youth Orchestra, he began private trumpet lessons with Mr. Hunter 
            Eberly. Holland attended Florida State University studying music education. 
            During his time there, he was the winner of the Florida MTNA Young Artist 
            Competition, Bryan Goff Trumpet Competition, and the LaGrange Symphony 
            Orchestra Concerto Competition. He has attended Festival Napa Valley Holland 
            currently resides in New Haven, CT serving as the Morse Fellow for Yale Music 
            in Schools Initiative and as the woodwind/brass and piano instructor at The 
            Foote School. He received his MM and MMA from the Yale School of Music in 2021 
            and 2022, respectively. Holland loves listening to the radio and spending time 
            outdoors.
          </p>
        </div>
        <Footer handleClick={handleClick} />
    </main>
  )
}