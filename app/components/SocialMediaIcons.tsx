import React from "react";

export default function SocialMediaIcons(props: any) {
    return (
        <div className="flex gap-3">
        <a 
            onClick={() => props.handleClick('https://www.instagram.com/amobrass')}
            className="cursor-pointer h-9 w-9 bg-black rounded-full bg-[url('/icons/instagram.svg')] 
            bg-no-repeat bg-center hover:scale-110 transition duration-75"
        ></a>
        <img 
            className="cursor-pointer h-10 w-10 relative top-[-2px] hover:scale-110 transition duration-75" 
            onClick={() => props.handleClick('https://www.facebook.com')}
            src="/icons/107175_circle_facebook_icon.svg" 
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