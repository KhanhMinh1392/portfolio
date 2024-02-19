"use client";

import Image from "next/image";
import React, { ReactNode, useState, useTransition } from "react";
import TabButton from "../button/tab-button";

const TAB_DATA: Array<{ title: string; id: string; content: ReactNode }> = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 columns-2 gap-y-2">
        <li>HTML/CSS</li>
        <li>Javascript (ES5/ES6)</li>
        <li>Typescript</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>Redux Toolkit/ Thunk</li>
        <li>SCSS, Tailwind, MUI, Styled-components</li>
        <li>Jenkins-pipeline, Gitlab-Runner</li>
        <li>Jira, GitScrum, Trello</li>
        <li>GIT, SourceTree</li>
        <li>Micro Front End</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2">
        <li>Ho Chi Minh University Technology: <br /> (Sep 2018 - Dec 2022)
          <ul className="list-disc pl-4">
            <li>Major: Software Engineering</li>
            <li>Degree classification: Good</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>2Q/2023: TMA Star Performance</li>
        <li>4Q/2023: TMA Star Performance</li>
      </ul>
    ),
  },
];

export default function AboutSession() {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    setTab(id);
    startTransition(() => {});
  };

  return (
    <section id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about_1.png"
          alt="about_image"
          width={500}
          height={500}
          priority
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a front-end web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with HTML, CSS, Javascript, Typescript, ReactJS, NextJS,
            Restful Api, Gitlab and so on. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              Achievements
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
