import React from "react";

export default function HorizontalNavHeaders(props: any) {
    const navArray = ["HOME", "ABOUT", "EDUCATION", "MEMBERS", "MEDIA", "DONATE", "EVENTS", "CONTACT"];
        const headers = navArray.map(tab => {
            return (
                <a 
                    className={props.addUnderline(tab) ? "underline underline-offset-4 hover:scale-110 transition duration-75": 
                        "hover:scale-110 transition duration-75"}
                    key={tab}
                    href={tab !== "HOME" ? `/${tab.toLowerCase()}`: "/"}
                >
                    {tab}
                </a>
            )
        })
        return (
            <div className={`flex gap-5 text-slate-400 px-5"`}>
                {headers}
            </div>
        )
}