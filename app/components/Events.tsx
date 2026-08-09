"use client";
import React from "react";
import EventListing from "../components/EventListing";

export default function Events() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[43vh] w-screen  bg-[url('/img/bridge-line-crop.jpg')] bg-no-repeat bg-cover bg-center flex items-end justify-end">
        <p className="text-white text-7xl font-Josefin pr-8 pb-2">EVENTS</p>
      </div>

      <div className="max-w-[75%] text-2xl my-10 font-Quattrocento flex flex-col gap-5">
        <EventListing
          date="Saturday, November 21, 2026"
          location="St. Joe County Public Library"
          presenter="Fischoff National Chamber Music Organization"
          link="https://fischoff.org/event/amo-brass-stories-and-music-st-joe-county-public-library/?srsltid=AfmBOopPIjV3qezJ-eZhW-4j8iz7bwkI6mB0ie-ucCRzhcqCWkrrIrW8/"
          image="/img/Redesign of Fischoff SAM I Am 2026 Logo.svg"
        />
        <EventListing
          date="Friday, March 14, 2025"
          location="York County School of the Arts"
          presenter="Virginia Arts Festival"
          link="https://www.vafest.org/education-and-community/"
        />
        <EventListing
          date="Friday, March 14, 2025"
          location="Thurgood Marshall Elementary"
          presenter="Virginia Arts Festival"
          link="https://www.vafest.org/education-and-community/"
        />
        <EventListing
          date="Thursday, March 13, 2025"
          location="Greenwood Elementary School"
          presenter="Virginia Arts Festival"
          link="https://www.vafest.org/education-and-community/"
        />
        <EventListing
          date="Thursday, March 13, 2025"
          location="Sparrow Road Intermediate"
          presenter="Virginia Arts Festival"
          link="https://www.vafest.org/education-and-community/"
        />
        <EventListing
          date="Thursday, March 13, 2025"
          location="Salem High School"
          presenter="Virginia Arts Festival"
          link="https://www.vafest.org/education-and-community/"
        />
        <EventListing
          date="Wednesday, March 12, 2025"
          location="Tanner's Creek Elementary"
          presenter="Virginia Arts Festival"
          link="https://www.vafest.org/education-and-community/"
        />
        <EventListing
          date="Tuesday, March 11, 2025"
          location="First Colonial High School"
          presenter="Virginia Arts Festival"
          link="https://www.vafest.org/education-and-community/"
        />
        <EventListing
          date="Tuesday, March 11, 2025"
          location="Salem High School"
          presenter="Virginia Arts Festival"
          link="https://www.vafest.org/education-and-community/"
        />
        <EventListing
          date="Tuesday, March 11, 2025"
          location="Norfolk Academy"
          presenter="Virginia Arts Festival"
          link="https://www.vafest.org/education-and-community/"
        />
        <EventListing
          date="Monday, March 10, 2025"
          location="Carver Elementary School"
          presenter="Virginia Arts Festival"
          link="https://www.vafest.org/education-and-community/"
        />
        <EventListing
          date="Monday, March 10, 2025"
          location="Blair Middle School"
          presenter="Virginia Arts Festival"
          link="https://www.vafest.org/education-and-community/"
        />
        <EventListing
          date="Sunday, March 9, 2025"
          location="Word Up Community Bookshop"
          presenter="Washington Heights Chamber Orchestra"
          link="https://www.tickettailor.com/events/whco/1447253/"
        />
      </div>
    </div>
  );
}
