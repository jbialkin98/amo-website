"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Consortium(props: any) {
  return (
    <div className="flex flex-col items-center text-justify">
      <div className="h-[27vh] w-screen flex flex-col items-center justify-center">
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
          className="text-black text-3xl md:text-5xl font-Josefin"
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

      <div className="max-w-[75%] text-2xl my-10 font-Quattrocento flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-10 md:align-center">
          <p className="font-Josefin mb-2">WHAT IT IS</p>
          <p className="md:max-w-[70%]">
            Amo Brass is embarking on our first commissioning consortium and
            invite you to join us! The consortium will support the creation of a
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
            through diverse educational programming. We are immensely excited
            about Aliyah&apos;s new piece and believe that she is not only a
            compelling and creative composer but also an adept and knowledgeable
            brass player.
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
                $15 for Access to a 1-hour zoom discussion and listening session
                in the summer of 2025 with Aliyah Danielle and Amo Brass.
                Session will be recorded for those who cannot attend
              </li>
              <li className="ml-5">
                $60 for a Private Coaching/Masterclass conducted over zoom by
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

        <button
          className="font-Josefin self-center mt-1 w-32 h-12 rounded-xl text-xl border-solid border-2 hover:scale-105 transition duration-75 bg-black text-white"
          onClick={() =>
            props.handleClick(
              "https://app.thefield.org/home/donation/crowd/view/278/Amo-Brass-Holiday-Giving-Campaign"
            )
          }
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
