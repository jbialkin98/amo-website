'use client'

import React from "react";
import Navbar from "../components/Navbar";
import Education from "../components/Education";
import Footer from "../components/Footer";

export default function EducationPage() {
    return (
        <main className="h-screen flex flex-col">
            <Navbar underline="Education"/>
            <Education />
            <Footer />
        </main>
    )
}