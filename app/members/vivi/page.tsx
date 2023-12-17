'use client'

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function AboutVivi() {
  function handleClick(link: string) {
    window.open(`${link}`,'_blank');
  }

  return (
    <main className='flex flex-col items-center min-h-screen'>
        <Navbar handleClick={handleClick} underline="Members" />
        <div className='text-xl lg:grid lg:grid-cols-3 lg:items-center lg:min-h-min lg:m-10 '>
          <div
            className='flex flex-col gap-3 items-center p-6 font-Josefin text-2xl'>
            <p>Vivian Kung</p>
            <img src="../img/vivi-mirror.jpg" alt="Vivi" className='h-[400px] w-[400px] relative object-cover object-center mb-6'/>
            <div className='flex gap-4 items-center'>
              <img 
                src="../icons/world-globe-line-icon.svg" 
                alt="Website Link" 
                className='h-7 w-7 hover:scale-110 cursor-pointer'
                onClick={() => {handleClick('http://www.viviankung.com/')}}
              />
              <img 
                src="../icons/alt-instagram-icon.svg" 
                alt="Instagram Link" 
                className='h-7 w-7 hover:scale-110 cursor-pointer'
                onClick={() => {handleClick('https://www.instagram.com/vivikungpaochicken/')}}
              />
            </div>
          </div>
          <div className='px-6 pb-6 font-Quattrocento md:col-span-2 text-justify'>
            <p className='mb-5'>
              Vivian Kung is a Taiwanese American tuba player, music educator, and aspiring crazy cat lady. Ms. Kung 
              currently serves as the principal tuba of Symphony in C, and is the first Asian woman to hold the position. 
              She is also the inaugural Yaffe fellow for the Yale Music in Schools Initiative for 2022-2023.
            </p>
            <p className='mb-5'>
              Vivian has been the recipient of various solo competition awards. Ms. Kung is a two time prize winner 
              in the Susan Slaughter tuba competition at the International Women&apos;s Brass Conference. While studying in 
              Los Angeles, she was a winner in the brass division of the 37th Pasadena Showcase House Instrumental competition. 
              In 2019, Ms. Kung received first place in the Music Teacher&apos;s National Association brass division, placing first 
              out of an initial 600 competitors. In 2018, she received first place in the Northwestern Tuba and Euphonium 
              conference Young Artist solo competition. Ms. Kung has been seen on stage with the Los Angeles Philharmonic, 
              Symphony in C, Symphoria Orchestra, American Youth Symphony, Hudson Valley Philharmonic, The Orchestra Now, New 
              Haven Symphony Orchestra, Chromatic Brass Collective and on stage at Warner Bros. Studios. She is a substitute 
              musician for the New World Symphony. Vivian received training at the UCLA Herb Alpert School of Music, where she 
              studied with Aubrey Foard. She graduated with Latin honors and three degrees in music education, tuba performance, 
              and Asian American studies. In 2022, Ms. Kung received her masters from the Yale School of Music, where she studied 
              Carol Jantsch. In her free time, you can find Vivi petting her cats, reading a book with unnatural speed, and watching 
              cooking shows on Netflix.
            </p>
          </div>
        </div>
        <Footer handleClick={handleClick} />
    </main>
  )
}