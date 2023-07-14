'use client'
import { headers } from "next/dist/client/components/headers";
import React from "react";
import Hamburger from 'hamburger-react'



export default function Navbar(props: any) {
    function addUnderline(tabName: string) {
        return tabName === props.underline.toUpperCase() ? true: false;
    }

    const [isOpen, setOpen] = React.useState(false)

    // const [hamburgerClicked, setHamburgerClicked] = React.useState(false);

    // function handleHamburger() {
    //     setHamburgerClicked(oldHamburgerClicked => !oldHamburgerClicked);
    // }

    const NavHeaders = () => {
        const navArray = ["HOME", "ABOUT", "MEMBERS", "MEDIA", "EVENTS", "CONTACT"];
        const headers = navArray.map(tab => {
            return (
                <a 
                    className={addUnderline(tab) ? "underline underline-offset-4 hover:scale-110 transition duration-75": 
                        "hover:scale-110 transition duration-75"}
                    key={tab}
                    href={tab !== "HOME" ? `/${tab.toLowerCase()}`: "/"}
                >
                    {tab}
                </a>
            )
        })
        return (
            <nav className="flex gap-6 text-slate-400 px-5">
                {headers}
            </nav>
        )

    }

    return (
    <div
        className="bg-white flex items-center justify-between font-Josefin h-20 border-2 py-5 px-10 
        tracking-wider sticky top-0 z-50 w-screen"
    >
        <a className="text-xl text-black hover:scale-110 transition duration-75" href="/">AMO BRASS</a>
        <div className="lg:hidden">
            <Hamburger 
                toggled={isOpen} toggle={setOpen} size={24}
                onToggle={toggled => {
                    if (toggled) {
                    console.log("Toggled!")
                    } else {
                    console.log("Not toggled")
                    }
                }}
            />
        </div>

        {/* <div className="menu-icons">
            <i  onClick={() => handleHamburger} className={hamburgerClicked ? "fas fa-times": "fas fa-bars"}>hello</i>
        </div> */}
        <NavHeaders />
        {/* <nav className="flex gap-6 text-slate-400 px-5">
            {navHeaders};
            <a className="underline underline-offset-4 hover:scale-110 transition duration-75" href="/">HOME</a>
            <a href="/about" className="hover:scale-110 transition duration-75">ABOUT</a>
            <a href="members.html" className="hover:scale-110 transition duration-75">MEMBERS</a>
            <a className="hover:scale-110 transition duration-75">MEDIA</a>
            <a className="hover:scale-110 transition duration-75">EVENTS</a>
            <a className="hover:scale-110 transition duration-75">CONTACT</a>
        </nav> */}
        <div className="flex gap-3">
            <a 
                onClick={() => props.handleClick('https://www.instagram.com/amobrass')}
                className="cursor-pointer h-9 w-9 bg-black rounded-full bg-[url('/icons/instagram.svg')] 
                bg-no-repeat bg-center hover:scale-110 transition duration-75"
            ></a>
            <img 
                className="cursor-pointer hover:scale-110 transition duration-75" 
                onClick={() => props.handleClick('https://www.facebook.com')}
                src="/icons/facebook.svg" 
                alt="Facebook Button" 
            />
            <div 
                onClick={() => props.handleClick('https://www.youtube.com/channel/UCS9XQxSYUoXdTld153_sCBw?app=desktop')}
                className="cursor-pointer h-9 w-9 bg-black rounded-full bg-[url('/icons/youtube.svg')] bg-no-repeat bg-center 
                hover:scale-110 transition duration-75"
            ></div>
        </div>
    </div>
    )
}