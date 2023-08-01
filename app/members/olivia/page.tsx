'use client'

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function AboutOlivia() {
  function handleClick(link: string) {
    window.open(`${link}`,'_blank');
  }

  return (
    <main className='flex flex-col items-center min-h-screen'>
        <Navbar handleClick={handleClick} underline="Members" />
        <div className='text-xl md: grid md:grid-cols-3 md:items-center md:min-h-min md:m-10'>
          <div
            className='flex flex-col gap-3 items-center p-6 pb-0 font-Josefin text-2xl'>
          <p>Olivia Martinez</p>
          <img src="../img/olivia-crop.jpg" alt="Olivia" className='h-[400px] w-[400px] relative object-cover object-top mb-6'/>
        </div>
        <div className='px-6 pb-6 font-Quattrocento md:col-span-2'>
          <p className='mb-4'>
            Olivia Martinez is a horn player from Indiana. She has had the great fortune to perform 
            across the world in places such as China, Carnegie Hall, the Kennedy Center, Disneyland, 
            Vienna, and Prague. This summer, she performed at the International Women's Brass 
            Conference with the Chromatic Brass Collective, which seeks to increase the visibility 
            of underrepresented people in music. Olivia is Principal Horn of Bay Atlantic Symphony 
            and freelances and teaches around Philadelphia.
          </p>
          <p className='mb-4'>
            Olivia often performs in jazz, new, and early music groups. She studied at Indiana 
            University with Richard Seraphinoff, Dale Clevenger, and Jeff Nelsen and studied with 
            William Purvis for her Master's at Yale University. She is in the second year of her 
            Doctorate at Temple University studying with Randy Gardner.
          </p>
          <p>
            Aside from inhaling good books and food, Olivia likes to run. She ran her first 
            marathon recently in Pittsburgh. On any given day, you might find her dog sitting or 
            playing trivia with friends.
          </p>
        </div>
        </div>
        <Footer handleClick={handleClick} />
    </main>
  )
}