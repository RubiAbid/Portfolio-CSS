import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

// Define the prop types
interface TabButtonProps {
  active: boolean; // Explicitly specify the type of `active`
  selectTab: () => void; // A function type for `selectTab`
  children: React.ReactNode; // To accept JSX or string as children
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "tab-button tab-button-active" : "tab-button tab-button-inactive";
  const underlineClass = active ? "tab-button-underline tab-button-underline-active" : "tab-button-underline tab-button-underline-default";

  return (
    <button onClick={selectTab}>
      <p className={`tab-button ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={underlineClass}
      ></motion.div>
    </button>
  );
};

export default TabButton;
