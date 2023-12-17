import React from "react";

export default function About() {
    return (
        <div className="flex flex-col items-center">
            <div className="h-[43vh] w-screen  bg-[url('/img/amo-couch-crop.jpg')] bg-no-repeat bg-cover bg-center flex items-end justify-end">
                <p className="text-white text-7xl font-Josefin pr-8 pb-2">ABOUT</p>
            </div>
            <div className="max-w-[75%] text-2xl my-10 font-Quattrocento flex flex-col text-justify">
                <p className="mb-4">
                    Lauded by acclaimed trumpeter Allan Dean as &quot;wonderful people and excellent players,&quot; Amo
                    Brass is a chamber ensemble that blends musical entertainment with artistic excellence. The ensemble
                    formed in 2020 as a group of friends wanting to safely make music outside during a pandemic. Amo has
                    since graduated from those informal meetings to touring the country. Composed of Yale School of Music
                    alumni, the ensemble is based in the New England area and is passionate about education, community
                    engagement, and performance. Together, they have spent summers at the Norfolk Chamber Music Festival
                    and Avaloch Farms Music Institute. In 2022, they were named Gold Medalist winners of the Cambridge
                    International Music Competition and first prize winners in the BTHVN Wien Competition. They also
                    advanced as finalists in the Charleston International Music Competition and Amadeus International
                    Music Competition. Most recently, Amo Brass was a Finalist Prize-winner at the Plowman Chamber Music
                    Competition, and also received the ABQ Prize at the 50th Fischoff Competition, becoming the first
                    brass quintet to advance in over a decade. They recently completed a week-long educational outreach
                    tour for public school students in the California Bay Area, where they visited 5 local schools and
                    organized a side-by-side recital alongside students.
                </p>
                <p className="mb-4">
                    Amo Brass frequently works with local organizations and nonprofits, and firmly believes in balancing
                    world class artistry with community partnership. All members are alumni of the Yale Music in Schools
                    Initiative, which delivers free music education to underserved public school students of the New
                    Haven community. As part of our
                    commitment to accessible education, Amo Brass performances seamlessly navigate diverse landscapes
                    of music with precision and style. From soulful jazz improvisations to the well-known melodies of
                    movie soundtracks and energetically driving rhythms of contemporary classical music, Amo Brass is
                    able to traverse a dynamic spectrum of moods, styles, and genres. With a passion for exploration and
                    a commitment to musical excellence, Amo Brass concerts are known for creating an engaging and
                    captivating experience for audiences.
                </p>
                <p className="mb-8">
                    When not performing or teaching, the members of Amo Brass enjoy going on runs (Olivia is the
                    fastest), spending time outdoors (Connor keeps a weather journal), cooking (Vivi is the chef of the
                    group), playing video games (Josh has the best set up), watching TV (David’s dream is an Amo Brass
                    LOTR marathon), and religiously completing the daily NYT crossword puzzle.
                </p>

                <h1 className="font-bold text-4xl mb-8 self-center text-center">
                    Vision & Mission
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