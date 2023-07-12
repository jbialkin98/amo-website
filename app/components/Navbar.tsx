'use client'
import React from "react";


export default function Navbar(props: any) {
    return (
    <div 
        className="bg-white flex items-center justify-between font-Josefin h-20 border-2 py-5 px-10 
        tracking-wider sticky top-0 z-50 w-screen"
    >
        <a className="text-xl text-black hover:scale-110 transition duration-75" href="/">AMO BRASS</a>
        <nav className="flex gap-6 text-slate-400 px-5">
            <a className="underline underline-offset-4 hover:scale-110 transition duration-75" href="/">HOME</a>
            <a href="/about" className="hover:scale-110 transition duration-75">ABOUT</a>
            <a href="members.html" className="hover:scale-110 transition duration-75">MEMBERS</a>
            <a className="hover:scale-110 transition duration-75">MEDIA</a>
            <a className="hover:scale-110 transition duration-75">EVENTS</a>
            <a className="hover:scale-110 transition duration-75">CONTACT</a>
        </nav>
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