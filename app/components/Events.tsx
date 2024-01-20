"use client";
import React from "react";

export default function Events() {
    return (
        <div className="flex flex-col items-center">
            <div className="h-[43vh] w-screen  bg-[url('/img/bridge-line-crop.jpg')] bg-no-repeat bg-cover bg-center flex items-end justify-end">
                <p className="text-white text-7xl font-Josefin pr-8 pb-2">Events</p>
            </div>
            <div className="max-w-[75%] text-2xl my-10 font-Quattrocento flex flex-col gap-5">
                <div>
                    <h3 className="text-lg">Saturday, January 20, 2024</h3>
                    <h2 className="text-xl font-bold">The Westin New York at Times Square</h2>
                    <h4 className="text-lg">Presenter: Chamber Music America</h4>
                    <button className="text-sm hover:scale-110"
                        onClick={() => {
                            window.open("https://conference.chambermusicamerica.org/", "_blank")
                        }}>More Info</button>
                </div>
                <div>
                    <h3 className="text-lg">Monday, March 11, 2024</h3>
                    <h2 className="text-xl font-bold">Blind Brook High School</h2>
                    <h4 className="text-lg">Presenter: Friends of Music Concerts - Partnership in Education</h4>
                    <button className="text-sm hover:scale-110"
                        onClick={() => {
                            window.open("https://friendsofmusicconcerts.org/", "_blank")
                        }}>More Info</button>
                </div>
                <div>
                    <h3 className="text-lg">Tuesday, March 12, 2024</h3>
                    <h2 className="text-xl font-bold">Pelham Memorial High School</h2>
                    <h4 className="text-lg">Presenter: Friends of Music Concerts</h4>
                    <button className="text-sm hover:scale-110"
                        onClick={() => {
                            window.open("https://friendsofmusicconcerts.org/", "_blank")
                        }}>More Info</button>
                </div>
                <div>
                    <h3 className="text-lg">Monday, April 29, 2024</h3>
                    <h2 className="text-xl font-bold">Hendrick Hudson High School</h2>
                    <h4 className="text-lg">Presenter: Friends of Music Concerts</h4>
                    <button className="text-sm hover:scale-110"
                        onClick={() => {
                            window.open("https://friendsofmusicconcerts.org/", "_blank")
                        }}>More Info</button>
                </div>
                <div>
                    <h3 className="text-lg">Tuesday, April 30, 2024</h3>
                    <h2 className="text-xl font-bold">Sleepy Hollow High School</h2>
                    <h4 className="text-lg">Presenter: Friends of Music Concerts</h4>
                    <button className="text-sm hover:scale-110"
                        onClick={() => {
                            window.open("https://friendsofmusicconcerts.org/", "_blank")
                        }}>More Info</button>
                </div>
            </div>
        </div>
    )
}