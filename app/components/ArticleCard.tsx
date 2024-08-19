"use client";

import React from "react";

export default function ArticleCard(props: any) {
  return (
    <div
      className="flex items-end gap-2 cursor-pointer hover:scale-105 transition duration-75 w-[300px] h-[400px] rounded-lg "
      style={{
        backgroundImage: `url(${props.articleImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => window.open(`${props.articleLink}`, "_blank")}
    >
      <p className="bg-white p-2 font-bold border border-solid border-black rounded-b-lg text-base w-full">
        {props.articleTitle}
      </p>
    </div>
  );
}
