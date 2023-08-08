import React from "react";
import Navbar from "../components/Navbar";
import Events from "../components/Events";
import Footer from "../components/Footer";

export default function EventsPage() {
    return (
        <main className="h-screen">
            <Navbar underline="Events"/>
            <Events />
            <Footer />
        </main>
    )
}