"use client";

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

export default function AchievementsSession() {
  const achievementsList = [
    {
      metric: "Projects",
      value: "7",
      postfix: "+",
    },
    {
      metric: "Awards",
      value: "2",
    },
    {
      metric: "Years",
      value: "2",
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-blue-100 sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between ">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-4xl font-bold flex flex-row">
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
                animateToNumber={parseInt(achievement.value)}
                fontStyle={{
                  fontSize: 40,
                }}
                locale="en-US"
              />
              {achievement.postfix}
            </h2>
            <p className="text-lg font-semibold">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
