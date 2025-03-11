import React from "react";
import { motion } from "framer-motion";

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
            transition={{ duration: 0.5 }}
            className="md:relative right-10"
          >
            Amo
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="md:relative left-10"
          >
            Brass
          </motion.p>
        </div>
        <div className="col-span-3 md:col-span-2 max-h-[90vh]">
          <img
            className="w-full z-10 h-[90vh] object-cover"
            src="/img/home-image.jpg"
            alt="Amo Image"
          />
        </div>
      </div>

      <div className="py-5 w-full flex flex-col items-center gap-7 text-lg md:text-xl lg:text-2xl font-Quattrocento text-justify">
        <p className="max-w-[60%] md:w-[40%] md:max-w-lg pb-3 my-3">
          Amo Brass is a chamber music ensemble which blends musical
          entertainment with artistic excellence. Composed of Yale School of
          Music alumni, the ensemble is based in the Tri-state area and is
          passionate about education, outreach, and performance. Amo Brass
          frequently works with local organizations and non-profits, and firmly
          believes in balancing world class artistry with community partnership.
        </p>

        <p className="max-w-[60%] md:w-[40%] md:max-w-lg pb-3 my-3">
          In 2023, Amo Brass was a Finalist Prize-winner at the Plowman Chamber
          Music Competition, and received the ABQ Prize at the 50th Fischoff
          Competition. The ensemble has completed residencies at Avaloch Farms
          Music Institute and Norfolk Chamber Music Festival. Amo Brass
          regularly embarks on educational outreach tours, continuing their
          commitment to accessible education, cultural leadership, and public
          service. In 2024, Amo Brass commissioned a new work for brass quintet
          by composer and multi-instrumentalist Chanell Crichlow. Amo Brass also
          spearheaded a consortium to fund a new work for brass quintet by
          dynamic artist Aliyah Danielle, bringing together over forty
          individuals and ensembles to commission this piece.
        </p>

        <div className="flex flex-col w-screen justify-center lg:flex-row items-center mt-3 px-3">
          <img
            src="img/allan.jpg"
            alt="Amo and Allan Dean"
            className="mb-3 max-w-full"
          />
          <div className="m-5 text-center font-Quattrocento font-bold text-xl md:text-2xl">
            <p className="mb-2 md:mb-3 lg:mb-4">
              &quot;Wonderful people and excellent players.&quot;
            </p>
            <p>-Allan Dean, Trumpeter</p>
          </div>
        </div>

        {/* <img className="m-8 h-[50vh] w-auto" src="/img/walk.jpg" alt="Amo Walking Victoriously" /> */}
      </div>
    </div>
  );
}
