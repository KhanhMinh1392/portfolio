"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function IntroSession() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 from-40% to-blue-400">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Minh Khanh Dao",
                1000,
                "FE Developer",
                1000,
                "ReactJS Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my portfolio, the one is using plenty of technologies such as:
            React, NextJS 14, Tailwind CSS, Shadcn UI, Vercel, Framer Motion.
          </p>
          <Link
            href="/"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full text-white mt-3 hover:bg-blue-100"
          >
            <span className="block bg-gradient-to-r from-indigo-800 from-40% to-blue-400 rounded-full px-5 py-2">
              Download CV
            </span>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <Image
            src="/images/avatar.png"
            alt="avatar image"
            className="rounded-full w-[200px] lg:w-[300px] lg:h-[400px]"
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
