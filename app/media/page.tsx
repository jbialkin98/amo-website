'use client';

import React from "react";
import Navbar from "../components/Navbar";
import Media from "../components/Media";
import Footer from "../components/Footer";


export default function MediaPage() {
    return (
        <div>
            <Navbar underline="Media"/>
            <Media />
            <Footer />
        </div>
    )
}