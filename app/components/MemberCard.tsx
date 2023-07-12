import React from "react"; 

export default function MemberCard(props: any) {
    return (
        <div 
            className="flex flex-col gap-2 cursor-pointer hover:scale-105 transition duration-75" 
            // onClick={"window.location.href = '/members-html/connor.html';"}
        >
            <div className={`h-[400px] w-[300px] bg-[url("/img/${props.memberName}.jpg")] bg-no-repeat bg-cover`}></div>
            <p className="self-center">{props.cardText}</p>
        </div>
    )
}