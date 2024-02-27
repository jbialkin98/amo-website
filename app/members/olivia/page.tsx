'use client'

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function AboutOlivia() {
  function handleClick(link: string) {
    window.open(`${link}`,'_blank');
  }

  return (
    <main className='flex flex-col items-center min-h-screen'>
        <Navbar underline="Members" />

          <div className='text-xl lg:grid lg:grid-cols-3 lg:items-center lg:min-h-min lg:m-10'>
            <div
              className='flex flex-col gap-3 items-center p-6  font-Josefin text-2xl '>
            <p>Olivia Martinez</p>
            <img src="../img/olivia-crop.jpg" alt="Olivia" className='h-[400px] w-[400px] relative object-cover object-top mb-6'/>
            <div className='flex gap-4 items-center'>
              <img 
                src="../icons/world-globe-line-icon.svg" 
                alt="Website Link" 
                className='h-7 w-7 hover:scale-110 cursor-pointer'
                onClick={() => {handleClick('https://livmart238.wixsite.com/mysite')}}
              />
              <img 
                src="../icons/alt-instagram-icon.svg" 
                alt="Instagram Link" 
                className='h-7 w-7 hover:scale-110 cursor-pointer'
                onClick={() => {handleClick('https://www.instagram.com/oliviamartinez23/')}}
              />
            </div>
          </div>
          <div className='px-6 pb-6 font-Quattrocento md:col-span-2 text-justify'>
            <p className='mb-4'>
              Olivia Martinez is a horn player who displays professionalism in any situation. Whether performing music
              or running a marathon, she enjoys the process of creating something excellent, especially while working
              with others.
            </p>
            <p className='mb-4'>
              Olivia has performed across the world in places such as China, the Musikverein (Vienna), the Estates
              Theater (Prague), Carnegie Hall, and the Kennedy Center. She won the Marie Speziale Orchestra Mock
              Audition and a Conn-Selmer horn at the 2022 International Women’s Brass Conference. She recently won the
              West Point Band 2nd Horn audition and will join the Band in April. Former positions include Principal Horn
              of the Bay Atlantic Symphony, 2nd Horn of Symphony in C, and Substitute positions with the Hawaii,
              Bozeman, Northeastern Pennsylvania Philharmonic, Harrisburg, and New World Symphonies.
            </p>
            <p className='mb-4'>
              Olivia is passionate about teaching. She leads students to think critically and enjoy learning. She is
              also committed to equity. As part of the Chromatic Brass Collective, which seeks to increase the
              visibility of underrepresented people in music, she regularly performs, researches, and commissions pieces
              to advocate for diversity in music.
            </p>
            <p>
              A current Doctoral Candidate at Temple University, Olivia earned her Master&apos;s of Music at Yale University
              and Bachelor&apos;s of Music at the Indiana University Jacobs School of Music. On any given day, you might
              find her practicing, baking bread, or reading a good book.
            </p>
          </div>
          </div>

        <Footer />
    </main>
  )
}