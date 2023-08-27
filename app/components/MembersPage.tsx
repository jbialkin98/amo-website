import React from "react";
import MemberCard from "./MemberCard";

export default function MembersPage() {
    return (
        <div 
            className=" text-xl m-7 flex flex-wrap gap-7 justify-center font-Quattrocento"
        >
            <MemberCard 
                memberName="connor"
                cardText="Connor Holland, trumpet"
            />
            <MemberCard 
                memberName="josh"
                cardText="Josh Bialkin, trumpet"
            />
            <MemberCard 
                memberName="olivia"
                cardText="Olivia Martinez, horn"
            />
            <MemberCard 
                memberName="david"
                cardText="David Seder, trombone"
            />
            <MemberCard 
                memberName="vivi"
                cardText="Vivi Kung, tuba"
            />
        </div>
    )
}