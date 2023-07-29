import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactItems() {
  return (
    <div>
      <div className="relative flex flex-col space-y-4 ">
        <Link href="https://www.linkedin.com/in/klajdi-murataj-0290a1230">
          <button className="item-btn">
            <FaLinkedinIn className="ico" />
            Klajdi Murataj
          </button>
        </Link>
        <Link href="https://github.com/klajdm">
          <button className="item-btn">
            <FaGithub className="ico" />
            klajdm
          </button>
        </Link>

        <Link href="https://www.instagram.com/klajdmurataj">
          <button className="item-btn">
            <FaInstagram className="ico" />
            @klajdmurataj
          </button>
        </Link>

        <Link href="https://twitter.com/klajdmurataj">
          <button className="item-btn">
            <FaTwitter className="ico" />
            @klajdmurataj
          </button>
        </Link>
      </div>
    </div>
  );
}
