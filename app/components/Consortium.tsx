"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Consortium(props: any) {
  const consortiumSupporters = [
    "Alana Yee",
    "Anthony Delivanis",
    "Ashe Cooksey",
    "Benjamin Weiss",
    "Brian Kilp",
    "Calliope Brass Music Association",
    "Carson Ross",
    "Chris Combest, Middle Tennessee State University",
    "Darcy Hamlin",
    "David Byrd-Marrow",
    "Dr. Chris Bloom, Colorado State University",
    "Dr. Dakota Corbliss",
    "Dr. James Hampson",
    "Eric Reed",
    "Hannah Morrison",
    "Horsetooth Brass Quintet",
    "Indiana University Horn Department",
    "James Boldin",
    "Jason Bergman, Indiana University",
    "Jeff Lang",
    "John Mangonon",
    "Kate Caliendo",
    "Kate Warren",
    "Katie Johnson-Webb",
    "Lindsay Ross",
    "Magnolia Brass Quintet",
    "Marcus Grant",
    "Matthew Meadows",
    "Michael Simpson",
    "Nicholas A. Kenney",
    "Nick Beltchev",
    "Oklahoma State Brass Faculty",
    "Paul Basler",
    "Potsdam Brass Quintet",
    "Quintasonic Brass",
    "Riverside Brass Quintet",
    "Rusty Holmes",
    "Seraph Brass",
    "Stumptown Brass",
    "Tessa Pettit",
    "The Bourbon & Brass Company",
    "Theresa May",
    "Western Brass Quintet",
    "William Purvis, YSM Brass",
  ];

  const half = Math.ceil(consortiumSupporters.length / 2);
  const firstHalf = consortiumSupporters.slice(0, half);
  const secondHalf = consortiumSupporters.slice(half);

  return (
    <div className="flex flex-col items-center text-justify">
      <div className="h-[27vh] w-screen flex flex-col items-center justify-center mt-2">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-black text-3xl md:text-5xl font-Josefin"
        >
          AMO BRASS
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: [0, 0.51, 0.2, 1.01],
          }}
          className="text-black text-lg md:text-2xl font-Josefin"
        >
          &#x2715;
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-black text-3xl md:text-5xl font-Shrikhand"
        >
          ALIYAH DANIELLE
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 1.5,
            ease: [0, 0.21, 0.2, 1.01],
          }}
          className="text-black text-3xl md:text-5xl font-Josefin"
        >
          CONSORTIUM
        </motion.p>
      </div>

      <div className="flex flex-col items-center gap-5 lg:mb-5 lg:flex-row lg:justify-center lg:gap-2">
        <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative">
          <Image
            src="/img/aliyah.png"
            alt="Aliyah Picture"
            fill
            objectFit="contain"
          />
        </div>
        <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative">
          <Image
            src="/img/amo-consortium.png"
            alt="Amo Brass Image"
            fill
            objectFit="contain"
          />
        </div>
      </div>

      <div className="max-w-[75%] text-lg md:text-xl lg:text-2xl my-10 font-Quattrocento flex flex-col gap-10">
        <div className="flex flex-col items-center gap-3">
          <p className="font-Josefin mb-2">CONSORTIUM IS CLOSED</p>
          <p className="md:max-w-[70%] mb-10">
            Forty-four individuals and groups joined our first commissioning
            consortium! The new 4-5 minute work for brass quintet by composer{" "}
            <a
              className="underline"
              href="https://www.aliyahdanielle.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aliyah Danielle 
            </a>
            {" "}will be sent as a PDF to consortium members on March 1st, 2025.
            Thank you for supporting this endeavor!
          </p>

          <p className="font-Josefin">CONSORTIUM MEMBERS</p>
          <p className=" text-lg mb-2">in alphabetical order</p>

          <div className=" justify-center grid grid-cols-1 md:grid-cols-2 md:gap-10 mb-10 max-w-[75%]">
            <div>
              {firstHalf.map((supporter, index) => (
                <p key={index} className="text-start">
                  {supporter}
                </p>
              ))}
            </div>
            <div>
              {secondHalf.map((supporter, index) => (
                <p key={index} className="text-start">
                  {supporter}
                </p>
              ))}
            </div>
          </div>
        </div>

        <hr className="self-center w-[75%] border-1 border-black mb-12" />

        <div className="flex flex-col md:flex-row md:justify-between md:gap-10 md:align-center">
          <p className="font-Josefin mb-2">WHAT IT IS</p>
          <p className="md:max-w-[70%]">
            Amo Brass is embarking on our first commissioning consortium which will support the creation of a
            4-5 minute new work for brass quintet by composer{" "}
            <a
              className="underline"
              href="https://www.aliyahdanielle.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aliyah Danielle
            </a>
            . The work&apos;s difficulty will be suitable for collegiate
            musicians and professionals alike, as well as enjoyable to play.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-10 md:align-center">
          <p className="font-Josefin mb-2">WHY</p>
          <p className="md:max-w-[70%]">
            Amo Brass&apos; vision is to provide musical experiences which offer
            accessible education, cultural leadership, and public service. We
            believe that commissioning this work will support one aspect of our
            mission, which is to connect the cultural fabric of communities
            through diverse educational programming. Amo Brass is immensely
            excited about this collaboration, as Aliyah is a dynamic artist with
            a unique approach, crafting stories through sound and blending
            genres to create interesting sonic textures.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
          <p className="font-Josefin mb-2">BENEFITS</p>
          <ul className="list-disc pl-5 md:w-[70%] ">
            <li>PDF score and parts</li>
            <li>
              Exclusive performance and recording rights from April 1,
              2025-April 1, 2026
            </li>
            <li>
              Recognition in the score, highlighting your commitment to
              underrepresented voices
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
          <p className="font-Josefin mb-2">PRICING</p>
          <div className="list-disc md:max-w-[70%]">
            <ul className="list-disc mb-3">
              <li className="ml-5">$25 for Students</li>
              <li className="ml-5">$50 for Professionals</li>
              <li className="ml-5">$100 for Chamber Group/Studio</li>
            </ul>
            <p className="mb-1 ml-0">Add-On Options:</p>
            <ul className="list-disc">
              <li className="ml-5">
                $15 for Access to a 1-hour Zoom discussion and listening session
                in the summer of 2025 with Aliyah Danielle and Amo Brass.
                Session will be recorded for those who cannot attend
              </li>
              <li className="ml-5">
                $60 for a Private Coaching/Masterclass conducted over Zoom by
                Aliyah Danielle or a member of Amo Brass
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
          <p className="font-Josefin mb-2">TIMELINE</p>
          <div className="md:w-[70%]">
            <ul>
              <li>Consortium Closes: December 19, 2024</li>
              <li>PDF Delivery Date: March 1, 2025</li>
              <li>Exclusivity Period: April 1, 2025-April 1, 2026</li>
              <li>Discussion/Listening Session: Summer 2025</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
          <p className="font-Josefin mb-2">CONCLUSION</p>
          <p className="md:max-w-[70%]">
            Thank you for considering this opportunity to support diverse, new
            music. To join the consortium, please click on the button below. If
            you have any questions, feel free to{" "}
            <a href="/contact" className="underline">
              contact us
            </a>{" "}
            or email us at{" "}
            <a className="underline" href="mailto:amobrass@gmail.com">
              amobrass@gmail.com
            </a>
            .
          </p>
        </div>

        {/* <button
          className="font-Josefin self-center mt-1 w-32 h-12 rounded-xl text-xl border-solid border-2 hover:scale-105 transition duration-75 bg-black text-white"
          onClick={() =>
            props.handleClick(
              "https://docs.google.com/forms/d/e/1FAIpQLSec3fwouaiFCce5Tw4bHVQbkCXQszRP7jyzBMoqCcjovkRg3Q/viewform?usp=sf_link"
            )
          }
        >
          Sign Up
        </button> */}
      </div>
    </div>
  );
}
