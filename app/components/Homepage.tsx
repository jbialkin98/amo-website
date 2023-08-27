import React from "react";
import { motion } from "framer-motion"


export default function Homepage() {
    return (
        <div className="font-Bodoni">
            <div className="grid grid-cols-3 mb-6 w-screen relative">

            <div 
                className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 
                    top-1/4 left-1/2 md:-translate-x-0 md:-translate-y-0 md:top-0 md:left-0 
                    md:relative md:col-span-1 max-h-[90vh] md:flex flex-col 
                    justify-center items-center text-6xl sm:text-7xl"
            >
                <motion.p 
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1}}
                    className="md:relative right-10"
                >Amo</motion.p>
                <motion.p 
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2}}
                    className="md:relative left-10"
                >Brass</motion.p>
            </div>
            <div className="col-span-3 md:col-span-2 max-h-[90vh]">
                <img className="w-full z-10 h-[90vh] object-cover" src="/img/home-image.jpg" alt="Amo Image" />
            </div>
            </div>

            <div className="flex flex-col w-screen justify-center lg:flex-row md:items-center">
                <img src="img/allan.jpg" alt="Amo and Allan Dean" className="mb-3" />
                <div className="m-5 text-center font-Quattrocento font-bold text-2xl md:text-3xl lg:text-3xl">
                    <p className="mb-2 md:mb-3 lg:mb-4">&quot;Wonderful people and excellent players.&quot;</p>
                    <p>-Allan Dean, Trumpeter</p>
                </div>
            </div>

            <div className="py-5 w-full flex flex-col items-center gap-7 text-2xl text-center font-Quattrocento">
                <p className="max-w-[75%]">
                Amo Brass is an emerging chamber music ensemble which blends musical entertainment with artistic excellence. 
                Comprised of Yale School of Music alumni, the ensemble is based in the greater New Haven area and is passionate 
                about education, outreach, and performance. Members have been previous Fischoff winners and Aspen Brass Quintet 
                Seminar residents, and the ensemble recently completed a 6 week residency as fellows of the Norfolk Chamber Music 
                Festival. In 2022, they were named Gold Medalist winners of the Cambridge International Music Competition and first 
                prize winners in the BTHVN Wien Competition. They also advanced as finalists in the Charleston International Music 
                Competition, and Amadeus International Music Competition.
                </p>
                <h1 className="text-3xl font-bold">Testimonials</h1>
                <p className="max-w-[75%]">
                    &quot;Amo Brass is building strong connections with audiences and reinvigorating the quintet genre through their 
                    stellar musicianship, artistry, and technique. They bring the highest level of music making to all performance 
                    and education settings, and truly care about furthering the arts in public life.&quot;
                </p>
                <p className="max-w-[75%]">
                    &quot;In addition to being undeniable experts in their field, the musicians in Amo Brass are incredible pedagogues 
                    and strong advocates for lifelong music involvement. In a short masterclass they formed memorable connections 
                    with my students through engaging performances and meaningful discussions.&quot;
                </p>

                <img className="m-8 h-[50vh] w-auto" src="/img/walk.jpg" alt="Amo Walking Victoriously" />
            </div>
        </div>
    )
}