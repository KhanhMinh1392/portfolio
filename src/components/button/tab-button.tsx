import React from "react";
import { motion } from "framer-motion";

interface ITabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: string;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }: ITabButtonProps) => {
  const buttonClasses = active ? "text-blue-900" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-blue-700 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-gradient-to-r from-indigo-800 from-10% to-blue-400 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
