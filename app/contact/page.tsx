'use client'

import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar underline="Contact"/>
            <Contact />
            <Footer />
        </main>
    )
}