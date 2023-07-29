import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "A Frontend focused Web Developer",
      "Full-stack to be",
      "Welcome to my webpage",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative min-h-screen w-full mx-auto">
      <div className="flex absolute justify-center w-full items-center md:top-[25%]">
        <div>
          <div className="flex flex-col-reverse md:flex-row md:space-x-10 items-center">
            <div className="space-y-4 ">
              <div className="space-y-4">
                <h1 className="text-3xl text-center md:text-start lg:text-6xl font-semibold">
                  Hi, I&apos;m Klajdi Murataj
                </h1>
                <div className="flex justify-center md:justify-start">
                  <h3 className="text-base md:text-lg lg:text-2xl bg-white rounded-xl w-fit p-2">
                    <span className="p-4">{text}</span>
                    <Cursor cursorColor="#8a9aa7" />
                  </h3>
                </div>
              </div>
              <div className="lg:max-w-2xl md:max-w-lg text-sm md:text-base">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem a, dicta tempora quidem, eligendi in veritatis
                  sequi, incidunt excepturi cumque id voluptatum. Odit
                  laboriosam fuga eveniet dolorem, deleniti eligendi ipsa.
                </p>
              </div>
            </div>

            <div className="hero-img"></div>
          </div>
          <div className="relative w-fit active:top-1 my-5 md:my-0">
            <Link href="/projects">
              <button className="bg-[#86906F] hover:bg-[#90a06a] text-neutral-100 p-3 text-sm md:text-lg rounded-full shadow-md active:shadow-none tracking-wider">
                My Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[12%] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[40px] rounded-3xl border-2 border-lime-800/60 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 17, 0],
                opacity: [1, 0, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-[6px] h-[6px] rounded-full bg-lime-800/60 mb-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
