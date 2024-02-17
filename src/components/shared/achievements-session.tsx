"use client";

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: "6",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
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

export default function AchievementsSession() {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-blue-100 sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between ">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={parseInt(achievement.value)}
                fontStyle={{
                  fontSize: 40,
                }}
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
