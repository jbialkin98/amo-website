import React from "react";

export default function About() {
    return (
        <div className="flex flex-col items-center">
            <div className="h-[43vh] w-screen max-w-[1400px] bg-[url('/img/amo-couch.jpg')] bg-no-repeat bg-cover bg-center flex items-end justify-end">
                <p className="text-white text-7xl font-Josefin pr-8 pb-2">ABOUT</p>
            </div>
            <div className="max-w-[75%] text-2xl my-10 font-Quattrocento ">
                <p>
                    Lauded by acclaimed trumpeter Allan Dean as "wonderful people and excellent players", Amo Brass is an emerging chamber music ensemble which blends musical entertainment with artistic excellence. Comprised of Yale School of Music 
                    alumni, the ensemble is based in the greater New Haven area and is passionate about education, outreach, and performance. Members have been previous Fischoff winners and Aspen Brass Quintet Seminar residents, and the ensemble 
                    recently completed a 6 week residency as fellows of the Norfolk Chamber Music Festival. In 2022, they were named Gold Medalist winners of the Cambridge International Music Competition and first prize winners in the BTHVN Wien 
                    Competition. They also advanced as finalists in the Charleston International Music Competition, and Amadeus International Music Competition.
                </p>
                <p>
                    This charismatic ensemble is equally at home under the lights of a stage set for an evening of classical chamber music as they are standing and chatting with audience members in a casual summer concert setting. Amo Brass frequently 
                    works with local organizations and non-profits, and firmly believes in balancing world class artistry with community partnership.
                </p>
            </div>
        </div>
    )
}