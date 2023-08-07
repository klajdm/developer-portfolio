import Link from "next/link";
import React, { Fragment } from "react";
import { FiExternalLink, FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import ThemeSwitcher from "./ThemeSwitcher";

const links = [
  { key: 1, href: "/", label: "Home" },
  { key: 2, href: "/#about", label: "About" },
  { key: 3, href: "/projects", label: "Projects" },
  { key: 4, href: "/resume", label: "Resume" },
  { key: 5, href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 w-full z-[999]">
      <div className=" flex justify-between items-center px-5 lg:px-10 bg-white/80 shadow backdrop-blur-[3px] dark:bg-zinc-800/80">
        <div className="text-base md:text-2xl font-[Azonix] uppercase">
          <Link href="/">
            <span>{"<"}</span>Klajdi Murataj <span>{"/>"}</span>
          </Link>
        </div>
        <div className="flex items-center h-16 space-x-5">
          <ul className="relative hidden h-full items-center lg:flex space-x-6 text-lg">
            {links.map((link) => (
              <Link className="nav-link" key={link.key} href={link.href}>
                <li>{link.label}</li>
              </Link>
            ))}
            {/* <Link
              href="https://github.com/klajdm"
              target="_blank"
              className="nav-link space-x-1"
            >
              <li>Source</li>
              <FiExternalLink size={13} />
            </Link> */}
          </ul>
          <div>
            <ThemeSwitcher />
          </div>
          <div className="lg:hidden cursor-pointer">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center border px-2 py-2 rounded-md hover:bg-neutral-200 transition-all duration-300">
                <FiMenu size={18} />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-100"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-64 overflow-y-auto dark:bg-zinc-700">
                  <div className="p-1">
                    {links.map((link) => (
                      /* Use the `active` state to conditionally style the active item. */
                      <Menu.Item key={link.href} as={Fragment}>
                        {({ active }) => (
                          <Link
                            href={link.href}
                            className={`group flex w-full justify-center rounded-lg items-center px-4 py-2 text-base ${
                              active
                                ? "bg-[#c3d697] text-gray-900  dark:text-white"
                                : "text-gray-600 dark:text-white"
                            }`}
                          >
                            {link.label}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                    {/* <Menu.Item>
                      <hr></hr>
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href="https://github.com/klajdm"
                          target="_blank"
                          className={`group flex w-full justify-center rounded-lg px-4 py-2 text-base ${
                            active
                              ? "bg-[#c3d697] text-gray-900  "
                              : "text-gray-600"
                          }`}
                        >
                          <hr></hr>
                          Source <FiExternalLink size={13} className="ml-1" />
                        </Link>
                      )}
                    </Menu.Item> */}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
