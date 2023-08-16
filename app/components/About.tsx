import React from "react";

export default function About() {
    return (
        <div className="flex flex-col items-center">
            <div className="h-[43vh] w-screen  bg-[url('/img/amo-couch-crop.jpg')] bg-no-repeat bg-cover bg-center flex items-end justify-end">
                <p className="text-white text-7xl font-Josefin pr-8 pb-2">ABOUT</p>
            </div>
            <div className="max-w-[75%] text-2xl my-10 font-Quattrocento flex flex-col">
                <p className="mb-8">
                    Lauded by acclaimed trumpeter Allan Dean as &quot;wonderful people and excellent players&quot;, Amo Brass is an emerging chamber 
                    music ensemble which blends musical entertainment with artistic excellence. Comprised of Yale School of Music alumni, the ensemble 
                    is based in the greater New Haven area and is passionate about education, outreach, and performance. Members have been previous Fischoff 
                    winners and Aspen Brass Quintet Seminar residents, and the ensemble recently completed a 6 week residency as fellows of the Norfolk 
                    Chamber Music Festival. In 2022, they were named Gold Medalist winners of the Cambridge International Music Competition and first prize 
                    winners in the BTHVN Wien Competition. They also advanced as finalists in the Charleston International Music Competition, Amadeus 
                    International Music Competition, and Plowman Chamber Music Competition. This spring, Amo Brass received the ABQ prize at the 50th Fischoff 
                    Chamber Music Competition. They recently completed a week-long educational outreach tour for public school students in the California Bay 
                    Area, where they visited 5 local schools and organized a side-by-side recital alongside students. Amo Brass frequently works with local 
                    organizations and non-profits, and firmly believes in balancing world class artistry with community partnership.
                </p>

                <h1 className="font-bold text-4xl mb-8 self-center text-center">
                    Mission & Vision
                </h1>
                <p className="mb-4">
                    Amo Brass&apos; vision for their ensemble is to provide a musical experience which offers a commitment to accessible education, cultural leadership, 
                    and service to society through the arts.
                </p>
                <p className="mb-8">
                    Our mission is to connect the cultural fabric of communities by presenting diverse educational programming, musical performances, and community 
                    collaborations to audiences.
                </p>

                <h1 className="font-bold text-4xl mb-8 self-center text-center">
                    Equity Statement
                </h1>
                <p>
                    Amo Brass is committed to standing up against racism, sexism, and systemic inequalities which plague the field of classical music. All members are 
                    alumni of the Yale Music in Schools Initiative, which delivers free music education to underserved public school students of the New Haven community. 
                    Members Olivia Martinez and Vivian Kung are also active members of the Chromatic Brass Collective, a group which celebrates, performs, mentors and 
                    educates in an effort to increase the visibility of racially and ethnically underrepresented women and gender non-conforming people throughout the 
                    brass world.
                </p>
            </div>
        </div>
    )
}