"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutOlivia() {
  function handleClick(link: string) {
    window.open(`${link}`, "_blank");
  }

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar underline="Members" />

      <div className="text-xl lg:grid lg:grid-cols-3 lg:items-center lg:min-h-min lg:m-10">
        <div className="flex flex-col gap-3 items-center p-6  font-Josefin text-2xl ">
          <p>Olivia Martinez</p>
          <img
            src="../img/olivia-crop.jpg"
            alt="Olivia"
            className="h-[400px] w-[400px] relative object-cover object-top mb-6"
          />
          <div className="flex gap-4 items-center">
            <img
              src="../icons/world-globe-line-icon.svg"
              alt="Website Link"
              className="h-7 w-7 hover:scale-110 cursor-pointer"
              onClick={() => {
                handleClick("https://livmart238.wixsite.com/mysite");
              }}
            />
            <img
              src="../icons/alt-instagram-icon.svg"
              alt="Instagram Link"
              className="h-7 w-7 hover:scale-110 cursor-pointer"
              onClick={() => {
                handleClick("https://www.instagram.com/oliviamartinez23/");
              }}
            />
          </div>
        </div>
        <div className="px-6 pb-6 font-Quattrocento md:col-span-2 text-justify">
          <p className="mb-4">
            Olivia Martinez joined the West Point Band in 2024. Hailing from
            northwest Indiana, she earned a Bachelor of Music from Indiana
            University in 2019, studying under Richard Seraphinoff, Dale
            Clevenger, and Jeff Nelsen. She earned a Master of Music in 2021
            from the Yale School of Music, studying with William Purvis. Prior
            to joining the band, she was based in Philadelphia, where she served
            as principal horn of the Bay Atlantic Symphony Orchestra while
            pursuing a Doctorate of Music at Temple University under Randy
            Gardner. Olivia has performed with the Albany Symphony, Philly Pops,
            Hawai&apos;i Symphony, Bozeman Symphony, Northeastern Pennsylvania
            Philharmonic, Harrisburg Symphony Orchestra, and the Disneyland
            All-American College Band. A dedicated teacher, she was faculty at
            Varna International Music Festival and taught for Yale&apos;s Music
            in Schools program. She is also a member of the Chromatic Brass
            Collective. In her free time, Olivia loves to run, read, and enjoy
            time with friends and family ­— even her siblings who attended the
            U.S. Naval Academy.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
