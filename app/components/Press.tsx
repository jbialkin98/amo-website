import React from "react";
import ArticleCard from "./ArticleCard";

export default function Press(props: any) {
  return (
    <div className="flex flex-col items-center text-justify">
      <div
        className="h-[43vh] w-screen bg-[url('/img/amo-stairs.jpg')]
                bg-no-repeat bg-cover bg-center md:bg-[center_20%] flex items-end justify-end"
      >
        <p className="text-white text-7xl font-Josefin pr-8 pb-2">PRESS</p>
      </div>

      <div className="max-w-[75%] text-lg md:text-xl lg:text-2xl my-5 font-Quattrocento flex flex-col items-center gap-3">
        <h1 className="text-2xl lg:text-4xl font-bold pt-3 text-center">Testimonials</h1>
        <p className="max-w-[75%]">
          &quot;Amo Brass is building strong connections with audiences and
          reinvigorating the quintet genre through their stellar musicianship,
          artistry, and technique. They bring the highest level of music making
          to all performance and education settings, and truly care about
          furthering the arts in public life.&quot;
        </p>
        <p className="max-w-[75%]">
          &quot;In addition to being undeniable experts in their field, the
          musicians in Amo Brass are incredible pedagogues and strong advocates
          for lifelong music involvement. In a short masterclass they formed
          memorable connections with my students through engaging performances
          and meaningful discussions.&quot;
        </p>
      </div>

      <div className="max-w-[75%] text-lg md:text-xl lg:text-2xl my-5 font-Quattrocento flex flex-col items-center gap-3">
        <h1 className="text-2xl lg:text-4xl font-bold pt-3 text-center">Articles</h1>
        <div className="flex flex-wrap gap-10 justify-center mb-2">
        <ArticleCard
          articleImage="img/hhs.jpg"
          articleLink="https://hhhs.henhudschools.org/post-details/~board/hendrick-hudson-high-school-news/post/hhhs-band-students-get-an-up-close-look-at-the-pros"
          articleTitle="HHHS Band Students Get an Up-Close Look at the Pros"
        />
        <ArticleCard
          articleImage="img/interview.png"
          articleLink="https://wsbt.com/news/local/gold-medal-winners-from-fischoffs-music-competition-offer-free-concert-frenchhorn-brass-trumpet-horn-tuba-musician-performers-notredame"
          articleTitle="Gold Medal winners from Fischoff's music competition to perform in free concert"
        />
        <ArticleCard
          articleImage="img/ramsey.png"
          articleLink="https://www.ramsey.k12.nj.us/article/1350063"
          articleTitle="Amo Brass Visits Ramsey High School"
        />
        </div>
      </div>
    </div>
  );
}
