'use client';

import React from "react"; 

export default function MemberCard(props: any) {
    const memberName = props.memberName;
    return (
        <div 
            className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-75" 
            // onClick={() => `window.location.href="/members/${memberName}"`}
            onClick={() => window.open(`../members/${memberName}`,'_self')}
        >
            {/* <div className={`h-[400px] w-[300px] bg-[url("/img/${memberName}.jpg")] bg-no-repeat bg-cover bg-center`}></div> */}
            <img src={`../img/${memberName}.jpg`} alt="Member image" className="h-[400px] w-[300px] object-cover"/>
            <p className="self-center">{props.cardText}</p>
        </div>
    )
}