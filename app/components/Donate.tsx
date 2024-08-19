import React from "react";

export default function Donate(props: any) {
    return (
        <div className="flex flex-col items-center text-justify">
            <div className="h-[43vh] w-screen bg-[url('/img/woods-small.jpg')] md:bg-[url('/img/woods.jpg')]
                bg-no-repeat bg-cover bg-center md:bg-top flex items-end justify-end">
                <p className="text-white text-7xl font-Josefin pr-8 pb-2">Donate</p>
            </div>
            <button className="mt-5 w-24 h-10 rounded-xl text-xl hover:scale-105 transition duration-75 text-white bg-black"
                onClick={() => props.handleClick('https://app.thefield.org/profile/Amo-Brass/643518')}
            >Donate</button>
            <div className="max-w-[75%] text-2xl my-5 font-Quattrocento">
                <p>
                Amo Brass' vision and mission are made possible by generous donors like you!
                </p>
                <p className="mt-6">
                    Your donations will help cover:
                </p>
                <ul className="list-disc list-outside">
                    <li className="ml-12">Artist fees to support and compensate members of Amo Brass</li>
                    <li className="ml-12">
                        Operational costs associated with administrative work in booking and programming in-school concerts 
                        (marketing, publicity, booking management, etc)
                    </li>
                    <li className="ml-12">Group travel, lodging, and per diem fees</li>
                    <li className="ml-12">Commissioning and consortium fees for new brass quintet music from underrepresented composers</li>
                    <li className="ml-12">Audio visual documentation of performances and rehearsals</li>
                </ul>
                <p className="text-lg mt-6">
                    Amo Brass is a sponsored artist with The Performance Zone Inc (dba The Field), a not-for-profit, tax-exempt, 
                    501(c)(3) organization serving the performing arts community. Contributions to The Field earmarked for Amo Brass 
                    are tax-deductible to the extent allowed by law. For more information about The Field, or for our national charities 
                    registration, contact: The Field, 225 West 34th St. Floor 9 New York, NY 10122, phone: 212-691-6969. A copy of 
                    our latest financial report may be obtained from The Field or from the Office of Attorney General, Charities Bureau, 
                    120 Broadway, New York, NY 10271.
                </p>
            </div>
            <iframe className=" w-[75%] h-[700px] my-5" src="/documents/amo-23-24-annual-report.pdf"></iframe>

        </div>
    )
}