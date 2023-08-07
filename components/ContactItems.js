import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactItems() {
  return (
    <div>
      <div className="relative flex flex-col space-y-4 ">
        <Link href="https://www.linkedin.com/in/klajdi-murataj-511617285/">
          <button className="item-btn dark:hover:bg-[#a1b378]">
            <FaLinkedinIn className="ico " />
            Klajdi Murataj
          </button>
        </Link>
        <Link href="https://github.com/klajdm">
          <button className="item-btn dark:hover:bg-[#a1b378]">
            <FaGithub className="ico" />
            klajdm
          </button>
        </Link>

        <Link href="https://www.instagram.com/klajdmurataj">
          <button className="item-btn dark:hover:bg-[#a1b378]">
            <FaInstagram className="ico" />
            @klajdmurataj
          </button>
        </Link>

        <Link href="https://twitter.com/klajdmurataj">
          <button className="item-btn dark:hover:bg-[#a1b378]">
            <FaTwitter className="ico" />
            @klajdmurataj
          </button>
        </Link>
      </div>
    </div>
  );
}
