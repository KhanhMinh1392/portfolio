import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "../link/nav-link";

export default function Header() {
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
        </nav>
      </div>
    </header>
  );
}
