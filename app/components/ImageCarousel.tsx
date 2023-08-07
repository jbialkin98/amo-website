import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    "img/allan.jpg",
    "img/carousel/amo-couch.jpg",
    "img/carousel/amo-walking.jpg",
    "img/carousel/avaloch.jpeg",
    "img/carousel/beach.jpg",
    "img/carousel/blueberry.jpg",
    "img/carousel/bridge-angle.jpg",
    "img/carousel/bridge-line.jpg",
    "img/carousel/champion.jpg",
    "img/carousel/donut.jpg",
    "img/carousel/line.jpg",
    "img/carousel/mary.JPG",
    "img/carousel/news.jpg",
    "img/carousel/notre-dame.jpg",
    "img/carousel/olivia-and-vivi.jpg",
    "img/carousel/redford.jpg",
    "img/carousel/side-bridge.jpg",
  ];

export default function ImageCarousel() {
    return (
            <Carousel useKeyboardArrows={true} swipeable={true} infiniteLoop={true} autoPlay={true}>
                {images.map((URL, index) => (
                    <div className="slide">
                        <img alt="image" src={URL} key={index}/>
                    </div>
                ))}
            </Carousel>
    )
}