'use client'
import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer(props: any) {
    return (
        <footer className="bg-white z-10 flex flex-col gap-3 items-center justify-center font-Josefin h-28 border-t-2 py-5 px-10 tracking-wider w-screen mt-auto mb-0 bottom-0">
        <h1 className="text-xl">AMO BRASS</h1>
        <SocialMediaIcons handleClick={props.handleClick} />
    </footer>
    )
}