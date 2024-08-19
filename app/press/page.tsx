'use client';

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Press from "../components/Press";

export default function PressPage() {
    function handleClick(link: string) {
        window.open(`${link}`,'_blank');
    }

    return (
        <main className="h-screen flex flex-col">
            <Navbar underline="Press"/>
            <Press handleClick={handleClick} />
            <Footer />
        </main>
    )
}