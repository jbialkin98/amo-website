'use client';

import React from "react";
import { DEFAULT_MIN_VERSION } from "tls";

export default function Contact() {
    const [formSubmitted, setFormSubmitted] = React.useState(false);

    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "67370fb7-9959-4767-a93d-2c7026b15636");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            setFormSubmitted(true);
        }
    }

  return (
    <div className="font-Josefin text-lg md:text-xl">
        <div className="h-[43vh] w-screen  bg-[url('/img/line-crop.jpg')] bg-no-repeat bg-cover bg-center flex items-end justify-end">
            <p className="text-white text-7xl font-Josefin pr-8 pb-2">CONTACT</p>
        </div>
        {!formSubmitted && 
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-4 m-5 md:flex-row md:items-start">
                    <div>
                        <p>Name:</p>
                        <input type="text" name="name" required className="tx-sm border-2 px-1 rounded-md w-60 h-10"/>
                    </div>
                    <div>
                        <p>Email:</p>
                        <input type="email" name="email" required className="border-2 rounded-md w-60 h-10"/>
                    </div>
                </div>
                    <div className="mb-5">
                        <p>Message:</p>
                        <textarea name="message" required className="border-2 rounded-md w-60 h-10 md:w-96 md:h-20"></textarea>
                    </div>
                
                
                <button type="submit" className="font-Josefin border rounded-md w-40 h-10 mb-5">Submit</button>
            </form>
        }
        {formSubmitted && 
            <div className="flex justify-center m-10">
                <p>Thank you for contacting us!</p>
            </div>
        
        }
    </div>
  );
}