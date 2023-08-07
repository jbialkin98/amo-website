import React from "react";
import YouTube from "react-youtube";
import ImageCarousel from "./ImageCarousel";

export default function Media() {
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
    const windowSizeWidth = windowSize.width;
    let opts = {};

    if (windowSizeWidth > 700) {
        opts = {
            height: '300',
            width: '492',
        }
    } else {
        opts = {
            height: '200',
            width: '328',
        }
    }

    return (
        <div >
            <div className="flex justify-center">
                <div className="h-[40vh] w-screen bg-[url('/img/amo-fischoff.jpg')] bg-no-repeat bg-cover bg-top flex items-end justify-end">
                    <p className="text-white text-7xl font-Josefin pr-8 pb-2">MEDIA</p>
                </div>
            </div>
            <div className="flex flex-col gap-5 items-center m-5 md:grid md:grid-cols-[repeat(auto-fill,492px)] md:justify-center md:auto-cols-max ">
                <YouTube videoId="W0SCNNUysjA" opts={opts}/>
                <YouTube videoId="vq1BQqn9bBE" opts={opts}/>
                <YouTube videoId="QfcOW6ZbVfw" opts={opts}/>
                <YouTube videoId="bEp_cF3K23I" opts={opts}/>
            </div>   
                <div className="m-10 max-w-[600px]">
                    <ImageCarousel />
                </div>
        </div>
    )
}