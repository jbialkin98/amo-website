'use client'

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Home() {
  function handleClick(link: string) {
    window.open(`${link}`,'_blank');
  }

  return (
    <main className='flex flex-col items-center min-h-screen text-xl'>
        <Navbar handleClick={handleClick} underline="Members" />
        <div
          className='flex flex-col gap-3 items-center p-6 font-Josefin text-2xl'>
          <p>Josh Bialkin</p>
          <img src="../img/josh.jpg" alt="Josh" className='h-[400px] w-[400px] relative'/>
        </div>
        <p
          className='px-6 pb-6 font-Quattrocento'>
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
        <Footer handleClick={handleClick} />
    </main>
  )
}