import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TbSourceCode } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { urlFor } from "@/config/sanity.config";

export default function Project({ projects }) {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center pb-10">
      <h1 className="relative font-[NunitoMD] custom-h1 text-center w-fit  my-10 dark:text-white">
        Projects
      </h1>
      <motion.div
        initial={{
          y: +150,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="space-y-10 flex flex-col justify-center items-center"
      >
        {projects?.map((project) => (
          <div
            key={project._id}
            className="lg:py-[9rem] flex justify-center items-center"
          >
            <div className="md:w-[70%] lg:w-full flex flex-col justify-center items-center lg:flex-row lg:space-x-10 lg:py-[5rem] bg-white/50 dark:bg-zinc-500/50 rounded-lg p-4 lg:p-10 shadow">
              <div className=" flex items-center ">
                <Link href={project.linkToDeployment} target="_blank">
                  <img
                    src={urlFor(project.image).url()}
                    width={"100%"}
                    height={"100%"}
                    alt="Project Preview Image"
                    className="rounded-lg hover:scale-105 transition-all duration-300"
                  />
                </Link>
              </div>
              <div className="lg:max-w-[40%] space-y-5 mt-5 md:space-y-10">
                <h3 className="text-center text-2xl font-semibold tracking-wide">
                  {project.title}
                </h3>
                <p className="md:text-lg">{project.summary}</p>
                <p className="text-sm md:text-base">
                  <strong>*</strong>
                  {project.note}
                </p>
                <div>
                  <p>
                    <span className="font-semibold">Stack</span>:{" "}
                    {project.technologies.join(", ")}
                  </p>
                </div>
                <div className="flex space-x-10 items-center justify-center">
                  <Link href={project.linkToDeployment} target="_blank">
                    <button className="project-btn">
                      <CgWebsite />
                      <span>See Live</span>
                    </button>
                  </Link>
                  <Link href={project.linkToBuild} target="_blank">
                    <button className="project-btn">
                      <TbSourceCode />
                      <span>Source</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
