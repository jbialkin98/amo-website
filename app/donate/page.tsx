'use client';

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Donate from "../components/Donate";

export default function DonatePage() {
    function handleClick(link: string) {
        window.open(`${link}`,'_blank');
    }

    return (
        <main className="h-screen flex flex-col">
            <Navbar underline="Donate"/>
            <Donate handleClick={handleClick} />
            <Footer />
        </main>
    )
}