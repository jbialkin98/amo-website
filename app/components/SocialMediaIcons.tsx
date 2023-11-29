import React from "react";

export default function SocialMediaIcons(props: any) {
    return (
        <div className="flex gap-3 ">
        <a 
            onClick={() => props.handleClick('https://www.instagram.com/amobrass')}
            className="cursor-pointer h-9 w-9 bg-black rounded-full bg-[url('/icons/instagram.svg')] 
            bg-no-repeat bg-center hover:scale-110 transition duration-75"
        ></a>
        <img 
            className="cursor-pointer h-10 w-10 relative top-[-2px] hover:scale-110 transition duration-75" 
            onClick={() => props.handleClick('https://www.facebook.com/profile.php?id=100095469076976')}
            src="/icons/facebook.svg" 
            alt="Facebook Button" 
        />
        <div 
            onClick={() => props.handleClick('https://www.youtube.com/channel/UCS9XQxSYUoXdTld153_sCBw?app=desktop')}
            className="cursor-pointer h-9 w-9 bg-black rounded-full bg-[url('/icons/youtube.svg')] bg-no-repeat bg-center 
            hover:scale-110 transition duration-75"
        ></div>
        <a href="/donate" className="self-center relative top-[-2px] hover:scale-110 transition duration-75 text-lg text-center align-middle">
            <button className="bg-black text-white rounded-lg w-20 h-9">
                Donate
            </button>
        </a>
    </div>
    )
}