'use client'

import React from "react";
import Navbar from "../components/Navbar";
import Events from "../components/Events";
import Footer from "../components/Footer";

export default function EventsPage() {
    return (
        <main className="h-screen flex flex-col">
            <Navbar underline="Events"/>
            <Events />
            <Footer />
        </main>
    )
}