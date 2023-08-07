import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    "img/allan.jpg",
    "img/amo-couch.jpg",
    "img/walk.jpg",
  ];

export default function ImageCarousel() {
    return (
            <Carousel useKeyboardArrows={true} swipeable={true} infiniteLoop={true} autoPlay={true}>
                {images.map((URL, index) => (
                    <div className="slide">
                        <img alt="image" src={URL} key={index} />
                    </div>
                ))}
            </Carousel>
    )
}