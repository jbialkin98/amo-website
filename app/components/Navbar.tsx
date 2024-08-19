"use client";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import React from "react";
import HorizontalNavHeaders from "./HorizontalNavHeaders";
import VerticalNavHeaders from "./VerticalNavHeaders";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Navbar(props: any) {
  function addUnderline(tabName: string) {
    return tabName === props.underline.toUpperCase() ? true : false;
  }

  function handleClick(link: string) {
    window.open(`${link}`, "_blank");
  }

  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

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

  return (
    <nav>
        <div className="text-center py-1 bg-black text-white font-Josefin">
            <a href="/consortium" className="w-full">Click here to join our consortium!</a>
        </div>
      {/* Navbar for large screens */}
      <div
        className="bg-white flex items-center justify-between font-Josefin h-20 border-2 py-5 px-10 
                tracking-wider sticky top-0 z-50 w-screen max-lg:hidden"
      >
        <a
          className="text-xl text-black hover:scale-110 transition duration-75"
          href="/"
        >
          AMO BRASS
        </a>

        <HorizontalNavHeaders
          addUnderline={addUnderline}
          underline={props.underline}
        />
        {/* <SocialMediaIcons handleClick={handleClick} /> */}
      </div>

      {/* Navbar for small screens */}
      <div
        className={
          !isOpen
            ? "border-b-2 bg-white flex items-center font-Josefin h-20 py-5 px-10 tracking-wider sticky top-0 z-50 w-screen lg:hidden"
            : "bg-white flex items-center font-Josefin h-20 py-5 px-10 tracking-wider sticky top-0 z-50 w-screen lg:hidden"
        }
      >
        <a
          className="text-xl text-black hover:scale-110 transition duration-75"
          href="/"
        >
          AMO BRASS
        </a>

        <div className="ml-auto">
          <div>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={24}
              onToggle={(toggled) => {
                if (toggled) {
                  console.log("Hamburger is toggled");
                } else {
                  console.log("Hamburger is not toggled");
                }
              }}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          className="h-screen border-b-2 flex flex-col items-center px-11 pb-5 gap-5 drop-shadow-2xl overflow-hidden"
        >
          <VerticalNavHeaders
            addUnderline={addUnderline}
            underline={props.underline}
          />
          <SocialMediaIcons handleClick={handleClick} />
        </motion.div>
      )}
    </nav>
  );
}
