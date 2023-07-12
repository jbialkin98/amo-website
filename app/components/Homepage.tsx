import React from "react";

export default function Homepage() {
    return (
        <div className="text-black">
            <div className="grid grid-cols-3 mb-6 relative w-screen">

            <div className="col-span-1 max-h-[90vh] flex flex-col justify-center items-center text-7xl">
                <p className="relative right-10">Amo</p>
                <p className="relative left-10">Brass</p>
            </div>
            <div className="col-span-2 max-h-[90vh]">
                <img className="w-full max-h-[90vh] object-cover" src="/img/home-image.jpg" alt="Amo Image" />
            </div>
            </div>

            <div 
                className="filter bg-black/50 h-[55vh] w-screen text-center bg-[url('/img/allan.jpg')] relative top-5 bg-no-repeat bg-cover 
                flex flex-col justify-center items-center bg-[left_calc(50%)_top_calc(40%)] text-white text-4xl font-Quattrocento mb-10"
            >
                <p>“Wonderful people and excellent players.”</p>
                <p>-Allan Dean, Trumpeter</p>
            </div>

            <div className="py-5 w-full flex flex-col items-center">
                <p className="max-w-[75%] font-Quattrocento text-2xl text-center">
                Amo Brass is an emerging chamber music ensemble which blends musical entertainment with artistic excellence. 
                Comprised of Yale School of Music alumni, the ensemble is based in the greater New Haven area and is passionate 
                about education, outreach, and performance. Members have been previous Fischoff winners and Aspen Brass Quintet 
                Seminar residents, and the ensemble recently completed a 6 week residency as fellows of the Norfolk Chamber Music 
                Festival. In 2022, they were named Gold Medalist winners of the Cambridge International Music Competition and first 
                prize winners in the BTHVN Wien Competition. They also advanced as finalists in the Charleston International Music 
                Competition, and Amadeus International Music Competition.
                </p>
                <img className="m-8 h-[50vh] w-auto" src="/img/walk.jpg" alt="Amo Walking Victoriously" />
            </div>
        </div>
    )
}