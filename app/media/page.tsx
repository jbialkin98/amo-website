'use client';

import React from "react";
import Navbar from "../components/Navbar";
import Media from "../components/Media";
import Footer from "../components/Footer";


export default function MediaPage() {
    function handleClick(link: string) {
        window.open(`${link}`,'_blank');
      }

    return (
        <div>
            <Navbar handleClick={handleClick} underline="Media"/>
            <Media />
            <Footer handleClick={handleClick}/>
        </div>
    )
}