"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutDavid() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar underline="Members" />
      <div className="text-xl lg:grid lg:grid-cols-3 lg:items-center lg:min-h-min lg:m-10">
        <div className="flex flex-col gap-3 items-center p-6 pb-0 font-Josefin text-2xl">
          <p>David Seder</p>
          <img
            src="../img/david.jpg"
            alt="David"
            className="h-[400px] w-[400px] relative object-cover object-top mb-6"
          />
        </div>
        <div className="px-6 pb-6 font-Quattrocento md:col-span-2 text-justify">
          <p className='mb-4'>
            David Seder is a trombonist and music educator currently based in
            Syracuse, NY. David has played professionally with several
            organizations across the country such as the Syracuse Orchestra,
            Cincinnati Symphony Orchestra, Rochester Philharmonic Orchestra,
            Louisville Orchestra, New World Symphony, and the Owensboro Symphony
            Orchestra. In the Syracuse Orchestra, David has been a long-time
            substitute second trombone player since 2021. During his
            undergraduate degree at the University of Kentucky studying with
            Bradley Kerns, David was a winner of the 2018 University of Kentucky
            Symphony Orchestra Concerto Competition, which led to his soloist
            debut playing the Ferdinand David Concertino with that orchestra in
            the same year. Later in 2019, David was chosen to be a New Horizons
            Fellow at the Aspen Music Festival and School. After graduating from
            the University of Kentucky in 2020, David began his master&apos;s degree
            at Yale University studying with Scott Hartman. In that same year
            David was selected as a finalist for the 2021 International Trombone
            Festival Lewis Van Haney Philharmonic Prize Tenor Trombone
            Competition. After finishing his master&apos;s degree at Yale in 2022,
            David taught as the adjunct professor of trombone at Asbury
            University in Wilmore, KY in 2023 and then served on faculty at the
            2023 Varna International Music Academy in Columbia, SC. He then
            returned to Yale for a masters of musical arts degree which he
            completed in the spring of 2024.
          </p>
          <p className='mb-4'>
            Apart from his orchestral activities, David enjoys being the
            trombonist of Amo Brass, a Fischoff prize-winning brass quintet that
            provides concerts and educational experiences to many schools across
            the country. With Amo Brass, David attended the Norfolk Chamber
            Music Festival in 2022 and had a residency at the Avaloch Farm Music
            Institute. As a recording artist, David has released a solo album
            titled Timestamp in 2018 and a quartet album of the entirety of
            Johann Sebastian Bach&apos;s Goldberg Variations in 2024 along with
            Bradley Kerns, Ben Dettelback, and Clint Woltering. Both of the
            albums are available on all streaming platforms.
          </p>
          <p className='mb-4'>
            Away from the trombone, David enjoys reading, visiting his friends
            that live in other countries, and improvising every single meal he
            cooks, regardless of how many cookbooks he may own.
          </p>
          {/* <p className="mb-5">
            Originally from Lexington, KY, David Seder began his musical journey
            at six years old when he took his first piano lesson. While
            attending the School for the Creative and Performing Arts (SCAPA) at
            Lafayette High School, he picked up the trombone. Throughout his
            middle and high school years, David took lessons at the Central
            Music Academy, performed with the Central Kentucky Youth Orchestras,
            participated in All-State Band and the Governor&apos;s School for
            the Arts, and was mentored by piano instructor Greg Partain and
            trombone instructor Anastasi Fafalios. After high school, David
            began his studies in trombone performance at the University of
            Kentucky studying with Professor Bradley Kerns. In his sophomore
            year of college at the University of Kentucky, David was the winner
            of the UK Symphony Orchestra concerto competition and performed the
            David Concertino. He has also been a finalist in the ITF Van Haney
            Orchestral Competition. During the summers, David has participated
            in festivals such as the Sewanee Summer Music Festival, the Prague
            Summer Nights Music Festival, Norfolk Chamber Music Festival, and
            was a New Horizons fellow at the Aspen Music Festival and School
            (2019). He is a substitute musician for the New World Symphony and
            regularly plays with the Symphoria Orchestra and Louisville
            Orchestra. In 2019, David released his debut album Timestamp,
            through New Branch Records on all streaming platforms. After UK,
            David continued on to study with Scott Hartman at Yale University
            and graduated in May of 2022. This fall, he will return to Yale to
            tackle an MMA.
          </p> */}
        </div>
      </div>
      <Footer />
    </main>
  );
}
