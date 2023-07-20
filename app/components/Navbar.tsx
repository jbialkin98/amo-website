'use client'
import { headers } from "next/dist/client/components/headers";
import React from "react";
import HorizontalNavHeaders from "./HorizontalNavHeaders";
import VerticalNavHeaders from "./VerticalNavHeaders";
import Hamburger from 'hamburger-react'
import { motion, AnimatePresence } from "framer-motion"



export default function Navbar(props: any) {
    function addUnderline(tabName: string) {
        return tabName === props.underline.toUpperCase() ? true: false;
    }

    const [isOpen, setOpen] = React.useState(false)

    const SocialMediaIcons = () => {
        return (
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
        )
    }

    return (
        <nav>
            {/* Navbar for large screens */}
            <div
                className="bg-white flex items-center justify-between font-Josefin h-20 border-2 py-5 px-10 
                tracking-wider sticky top-0 z-50 w-screen max-lg:hidden"
            >
                <a className="text-xl text-black hover:scale-110 transition duration-75" href="/">AMO BRASS</a>

                <HorizontalNavHeaders addUnderline={addUnderline} underline={props.underline}/>
                <SocialMediaIcons />
            </div>
                
            {/* Navbar for small screens */}
            <div
                className={!isOpen ? "border-b-2 bg-white flex items-center font-Josefin h-20  py-5 px-10 tracking-wider sticky top-0 z-50 w-screen lg:hidden": 
                "bg-white flex items-center font-Josefin h-20  py-5 px-10 tracking-wider sticky top-0 z-50 w-screen lg:hidden"}
            >
                <a className="text-xl text-black hover:scale-110 transition duration-75" href="/">AMO BRASS</a>
                
                <div className="ml-auto">
                    <div>
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
                    
                </div>
            </div>
            {isOpen && 
                <motion.div 
                    initial={{ y: -250}}
                    animate={{ y: 0 }} 
                    className="h-screen border-b-2 flex flex-col items-center px-11 pb-5 gap-5 drop-shadow-2xl"
                >
                    <VerticalNavHeaders addUnderline={addUnderline} underline={props.underline}/>
                    <SocialMediaIcons />                    
                </motion.div>}
        </nav>
    )
}