import React from "react";
import MemberCard from "./MemberCard";

export default function MembersPage() {
    return (
        <div 
            className=" text-xl m-7 flex flex-wrap gap-7 justify-center font-Quattrocento"
        >
            <MemberCard 
                memberName="connor"
                cardText="Connor Holland, Trumpet"
            />
            <MemberCard 
                memberName="josh"
                cardText="Josh Bialkin, Trumpet"
            />
            <MemberCard 
                memberName="olivia"
                cardText="Olivia Martinez, Horn"
            />
            <MemberCard 
                memberName="david"
                cardText="David Seder, Trombone"
            />
            <MemberCard 
                memberName="vivi"
                cardText="Vivi Kung, Tuba"
            />
        </div>
    )
}