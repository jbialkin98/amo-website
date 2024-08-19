'use client';

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Consortium from "../components/Consortium";

export default function DonatePage() {
    function handleClick(link: string) {
        window.open(`${link}`,'_blank');
    }

    return (
        <main className="h-screen flex flex-col">
            <Navbar underline=""/>
            <Consortium handleClick={handleClick} />
            <Footer />
        </main>
    )
}