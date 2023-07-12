'use client'
import React from "react";

export default function Footer(props: any) {
    return (
        <footer className="bg-white flex flex-col gap-3 items-center justify-center font-Josefin h-28 border-2 py-5 px-10 tracking-wider mt-auto w-screen z-50">
        <h1 className="text-xl">AMO BRASS</h1>
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
                className="cursor-pointer h-9 w-9 bg-black rounded-full bg-[url('/icons/youtube.svg')] 
                bg-no-repeat bg-center hover:scale-110 transition duration-75"
            ></div>
        </div>
    </footer>
    )
}