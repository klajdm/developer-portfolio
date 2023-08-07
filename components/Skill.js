import React from "react";
import { urlFor } from "@/sanity.config";

export default function Skill({ skill }) {
  return (
    <div className=" relative flex justify-center items-center flex-grow rounded-full border border-[#86906F] dark:border-[#a1b378] w-16 h-16 lg:w-24 lg:h-24 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
      <img
        className=" w-10 h-auto lg:w-16 lg:h-auto filter object-cover "
        src={urlFor(skill.image).url()}
        alt=""
      />
    </div>
  );
}
