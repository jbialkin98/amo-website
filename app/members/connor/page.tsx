"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutConnor() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar underline="Members" />
      <div className="text-xl lg:grid lg:grid-cols-3 lg:items-center lg:min-h-min lg:m-10">
        <div className="flex flex-col gap-3 items-center p-6 pb-0 font-Josefin text-2xl">
          <p>Connor Holland</p>
          <img
            src="../img/connor.jpg"
            alt="Connor"
            className="object-cover object-left h-[400px] w-[400px] md:col-span-1"
          />
        </div>
        <div className="px-6 pb-6 font-Quattrocento md:col-span-2 text-justify">
          <p className="mb-4">
            Musician 1st Class Connor Holland hails from northeast Florida. He
            earned a Master of Music, Master of Musical Arts, and served as the
            Morse Fellow for the Music in Schools Initiative while studying at
            Yale University. He received his Bachelor of Music Education from
            Florida State University. His teachers include Kevin Cobb, Hunter
            Eberly, Dr. Eric Millard, Dr. Joe Nibley, and Dr. Christopher Moore.
          </p>
          <p className="mb-4">
            Holland has appeared as a soloist with the Washington Heights
            Chamber Orchestra, LaGrange Symphony Orchestra, and alongside Arturo
            O&apos;Farrill in the BronX BandA. He has performed with ensembles
            such as the Paragon Ragtime Orchestra, Fort Greene Orchestra,
            Allentown Symphony Orchestra, and Exceptet. He has been a member of
            Amo Brass and toured across the country working with young
            audiences, winning awards at the Plowman and Fischoff Chamber Music
            Competitions. As an educator, he has served as faculty for Varna
            International Music Festival, Casita Maria Center for Arts and
            Education, University of Bridgeport, and Kaufman Music Center.
          </p>
          <p className="mb-4">
            In 2025, Holland auditioned and was selected for the U.S. Naval
            Academy Band. Following recruit training at RTC, Great Lakes, he
            reported for duty as trumpet instrumentalist with the brass quintet,
            brass ensemble, marching band, and ceremonial units.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
