import React from "react";

import UserPhoto from "../public/herophoto.png";

export default function Skill() {
  return (
    <div className="group relative flex justify-center items-center flex-grow cursor-pointer">
      <img
        className="rounded-full border border-[#86906F] object-cover w-16 h-16 lg:w-24 lg:h-24 filter group-hover:scale-105 transition duration-300 ease-in-out"
        src={UserPhoto.src}
        alt=""
      />
    </div>
  );
}
