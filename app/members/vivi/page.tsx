"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutVivi() {
  function handleClick(link: string) {
    window.open(`${link}`, "_blank");
  }

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar underline="Members" />
      <div className="text-xl lg:grid lg:grid-cols-3 lg:items-center lg:min-h-min lg:m-10 ">
        <div className="flex flex-col gap-3 items-center p-6 font-Josefin text-2xl">
          <p>Vivian Kung</p>
          <img
            src="../img/vivi-mirror.jpg"
            alt="Vivi"
            className="h-[400px] w-[400px] relative object-cover object-center mb-6"
          />
          <div className="flex gap-4 items-center">
            <img
              src="../icons/world-globe-line-icon.svg"
              alt="Website Link"
              className="h-7 w-7 hover:scale-110 cursor-pointer"
              onClick={() => {
                handleClick("http://www.viviankung.com/");
              }}
            />
            <img
              src="../icons/alt-instagram-icon.svg"
              alt="Instagram Link"
              className="h-7 w-7 hover:scale-110 cursor-pointer"
              onClick={() => {
                handleClick("https://www.instagram.com/vivikungpaochicken/");
              }}
            />
          </div>
        </div>
        <div className="px-6 pb-6 font-Quattrocento md:col-span-2 text-justify">
          <p className="mb-4">
            Vivian Kung is a Taiwanese American tuba player, music educator, and
            aspiring crazy cat lady. She is an active freelancer in the New
            England area, and can be regularly seen performing with The
            Orchestra Now (TON), Syracuse Orchestra, New Haven Symphony
            Orchestra, Cape Symphony, Hudson Valley Philharmonic, Norwalk
            Symphony, Hartford Symphony Orchestra, Symphony in C, Plymouth
            Philharmonic, and more. Previously, she was acting principal tuba
            with the Iceland Symphony Orchestra and principal tuba with Symphony
            in C. She has also performed with the Philadelphia Orchestra, Boston
            Symphony Orchestra, Boston Pops, Baltimore Symphony Orchestra, and
            New World Symphony.
          </p>
          <p className="mb-4">
            Vivian has been a prize winner in various solo competitions
            including the Susan Slaughter tuba competition at the International
            Women&apos;s Brass Conference and the 37th Pasadena Showcase House
            Instrumental Competition. She received first place in the Music
            Teacher&apos;s National Association brass division, and in the
            Northwestern Tuba and Euphonium conference Young Artist solo
            competition. She has also performed with the Blue Devils Drum and
            Bugle Corps, where she secured a contract at the age of 17 and won a
            world championship at 19.
          </p>
          <p className="mb-4">
            As a chamber musician, Vivi has performed with{" "}
            <a
              href="https://www.seraphbrass.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Seraph Brass
            </a>
            , the{" "}
            <a
              href="https://www.rmpbb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Rodney Marsalis Philadelphia Big Brass
            </a>
            , and is a founding
            member of Fischoff award-winning quintet{" "}
            <a
              href="https://www.amobrass.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Amo Brass
            </a>
            .
          </p>
          <p className="mb-4">
            Vivi is an avid lover of nature, and has had the great fortune to
            spend summers outdoors at the Tanglewood Music Center, Aspen Music
            Festival Quintet Seminar, Norfolk Chamber Music Festival, Brevard
            Low Brass Seminar, and Avaloch Farms Music Institute.
          </p>
          <p className="mb-4">
            Vivian received degrees from UCLA, Yale University, and New England
            Conservatory. Her teachers are Aubrey Foard, Carol Jantsch, and Mike
            Roylance.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
