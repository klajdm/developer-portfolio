import Link from "next/link";
import React from "react";
import Skill from "./Skill";

export default function About() {
  return (
    <div className="min-h-screen  relative flex justify-center items-center top-16 mb-16 lg:top-0 lg:mb-0">
      <div className="relative flex flex-col  lg:space-y-36 ">
        <div className=" flex flex-col justify-center items-center space-y-10">
          <h1 className="custom-h1 mt-10 md:mt-16">About Me</h1>
          <p className="max-w-xl text-center text-base">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className=" relative flex flex-col lg:flex-row lg:space-x-28 lg:mx-16">
          <div className="md:mx-auto space-y-7 lg:space-y-14 max-w-lg mt-7 lg:mt-0">
            <h4 className="text-xl">Get to know me!</h4>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                I&apos;m a Frontend Web Developer building the Front-end of
                Websites and Web Applications that leads to the success of the
                overall product. Check out some of my work in the Projects
                section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin where I post useful content related to Web
                Development and Programming.
              </p>{" "}
              <p>
                {" "}
                I&apos;m open to Job opportunities where I can contribute, learn
                and grow. If you have a good opportunity that matches my skills
                and experience then don&apos;t hesitate to contact me.
              </p>
            </div>
            <div className="relative w-fit active:top-1">
              <Link href="/#contact">
                <button className="bg-[#86906F] hover:bg-[#90a06a] text-neutral-100 py-3 px-5 lg:px-8 text-sm md:text-lg rounded-full shadow-md active:shadow-none tracking-wider">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="space-y-7 lg:space-y-14 mt-7 lg:mt-0">
            <h4 className="text-xl">Skills & tools</h4>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-5">
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
