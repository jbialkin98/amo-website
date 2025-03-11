import React from "react";

export default function EventListing({ date, location, presenter, link }) {
  return (
    <div>
      <h3 className="text-lg">{date}</h3>
      <h2 className="text-xl font-bold">{location}</h2>
      <h4 className="text-lg">{presenter}</h4>
      <button
        className="text-sm hover:scale-110"
        onClick={() => {
          window.open(link, "_blank");
        }}
      >
        More Info
      </button>
    </div>
  );
}
