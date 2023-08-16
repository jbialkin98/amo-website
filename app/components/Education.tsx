import React from "react";

export default function Education() {
    return (
        <div className="flex flex-col items-center">
            <div className="h-[43vh] w-screen  bg-[url('/img/cali.jpg')] bg-no-repeat bg-cover bg-center flex items-end justify-end">
                <p className="text-white text-7xl font-Josefin pr-8 pb-2">EDU</p>
            </div>
            <div className="max-w-[75%] text-2xl my-10 font-Quattrocento flex flex-col">
                <h1 className="font-bold text-4xl mb-8 self-center text-center">
                    Teaching
                </h1>
                <p className="mb-8">
                    Amo Brass strives to deliver accessible, equitable, and relevant teaching to encourage students&apos; individual and group learning through music. 
                    We have extensive experience working in school environments, and have a unique teaching approach that blends artistry, humor, entertainment, and 
                    career building. While we are able to teach a broad range of students, we pride ourselves in focusing on K-12 public schools. Our teaching would 
                    not be a success without collaborations with public school music teachers, who we feel are true heroes!
                </p>

                <h1 className="font-bold text-4xl mb-8 self-center text-center">
                    In-School Mentorship
                </h1>
                <p className="mb-4">
                Our teaching philosophy centers connectivity between people and an accessible, diverse curriculum. We believe that this is best achieved through in-person 
                mentorship, in which students can partake in active music making. While we do embrace a traditional performance based visit and residency and masterclass 
                style coachings, we pride ourselves on playing side-by-side with students. Amo Brass believes that access to collaborative learning, in which we as 
                professionals model great sound and musicianship <strong><em>alongside</em></strong> students is key to understanding and mastery.
                </p>
                <p className="mb-8">
                    Our mission is to connect the cultural fabric of communities by presenting diverse educational programming, musical performances, and community 
                    collaborations to audiences.
                </p>

                <h1 className="font-bold text-4xl mb-8 self-center text-center">
                    Community Concerts
                </h1>
                <p>
                    Amo Brass believes that music is a crucial tool for building community. We offer a side-by-side concert program where, over the course of several 
                    days or a week, we visit multiple schools in a public district and bring students, teachers, and community/family members together for a brass 
                    ensemble concert at the end of the week. We program music by diverse composers, at levels which can cater to both beginning and advanced students. 
                    Custom arrangements are often created just for this purpose, in order to create more equitable learning opportunities! This program has been met 
                    with great reception, offering brass students the opportunity to play alongside others they would not normally meet, and allowing for a great sense 
                    of musical community to thrive. It also opens pathways for future inter-district collaborations, and is a unique brass feature which young students 
                    typically do not experience.
                </p>
            </div>
        </div>
    )
}