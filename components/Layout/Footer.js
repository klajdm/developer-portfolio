import Link from "next/link";
import React from "react";
import { HiMiniHome } from "react-icons/hi2";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative">
      <div onClick={scrollToTop} className="block">
        <div className=" flex justify-center items-center w-[40px] h-[40px] rounded-full">
          <HiMiniHome size={20} />
        </div>
      </div>
      <div className="relative flex w-full justify-center text-xs py-4 bg-white">
        <p>
          © Copyright 2023. Made by{" "}
          <span className="underline font-bold">
            <Link href="/">Klajdi Murataj</Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
