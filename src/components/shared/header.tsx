"use client";
import Image from "next/image";
import NavLink from "../link/nav-link";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 mx-auto bg-white h-20 border-b">
      <div className="flex container items-center justify-between h-full">
        <Image
          src={"/next.svg"}
          alt="logo"
          width={0}
          height={0}
          className="w-[120px] h-full"
          priority
        />
        <nav className="">
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded"
              >
                <AlignJustify className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="hidden md:block md:w-auto">
            <ul className="flex space-x-8">
              <li>
                <NavLink href="#project" title="Project" />
              </li>
              <li>
                <NavLink href="#about" title="About" />
              </li>
              <li>
                <NavLink href="#contact" title="Contact" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {navbarOpen && (
        <ul className="flex flex-col gap-3 py-4 items-center border-b bg-white">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
