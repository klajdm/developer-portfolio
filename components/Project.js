import Image from "next/image";
import React from "react";
import Project1 from "../public/projects/lexova1liber.png";
import Link from "next/link";
import { TbSourceCode } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";

export default function Project() {
  const projects = [1, 2, 3];
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center pb-10">
      <h1 className="relative custom-h1 text-center w-fit  my-10">Projects</h1>
      <div className="space-y-10 flex flex-col justify-center items-center">
        {projects.map((project, i) => (
          <div
            key={i}
            className="md:w-[50%] lg:w-full flex flex-col justify-center items-center lg:flex-row lg:space-x-10 lg:py-[14rem] bg-white rounded-lg p-2 shadow"
          >
            <div className="lg:w-[50%] flex items-center ">
              <Image
                src={Project1}
                width={"100%"}
                height={"100%"}
                alt="Project Preview Image"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="lg:max-w-[50%] space-y-5 mt-5 md:space-y-10">
              <h3 className="text-center text-2xl font-semibold tracking-wide">
                Lexova 1 Liber
              </h3>
              <p className="text-sm md:text-lg">
                &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatibus illum qui consectetur esse
                assumenda doloremque ex reprehenderit labore ipsa praesentium
                eveniet molestiae corporis sint corrupti culpa laboriosam, atque
                quisquam dicta.
              </p>
              <ul className="flex flex-wrap space-x-2">
                <li>Stack:</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
                <li>HTML</li>
              </ul>
              <div className="flex space-x-10 items-center justify-center">
                <Link href="#">
                  <button className="project-btn">
                    <CgWebsite />
                    <span>See Live</span>
                  </button>
                </Link>
                <Link href="#">
                  <button className="project-btn">
                    <TbSourceCode />
                    <span>Source</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
