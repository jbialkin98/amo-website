'use client'
import { motion } from "framer-motion";
import Hamburger from 'hamburger-react';
import React from "react";
import HorizontalNavHeaders from "./HorizontalNavHeaders";
import VerticalNavHeaders from "./VerticalNavHeaders";



export default function Navbar(props: any) {
    function addUnderline(tabName: string) {
        return tabName === props.underline.toUpperCase() ? true: false;
    }

    const [isOpen, setOpen] = React.useState(false)

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = React.useState({
          width: 0,
          height: 0,
        });
        React.useEffect(() => {
          // Handler to call on window resize
          function handleResize() {
            // Set window width/height to state
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          // Add event listener
          window.addEventListener("resize", handleResize);
          // Call handler right away so state gets updated with initial window size
          handleResize();
          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
      }
      
      const windowSize = useWindowSize();

      if (windowSize.width > 1023 && isOpen == true) {
        setOpen(false);
      }

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
                                    
                                } else {
                                
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
                    className="min-h-min z-50 flex flex-col items-end px-11 pb-5 gap-5 drop-shadow-2xl"
                >
                    <VerticalNavHeaders addUnderline={addUnderline} underline={props.underline}/>
                    <SocialMediaIcons />                    
                </motion.div>}
        </nav>
    )
}