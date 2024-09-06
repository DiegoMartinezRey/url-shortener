import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import themeConfig from "../styles/themeStyle";

const Button = ({ children, type, clickFunction }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        className={`
          ${
            theme === "light"
              ? `${themeConfig.light.primary} shadow-pink-500/20 hover:shadow-pink-500/40`
              : `${themeConfig.dark.primary}`
          }
          ${
            type === "isLoading"
              ? "bg-gray-300 px-4 py-2 cursor-not-allowed opacity-50"
              : "text-white px-6 py-3"
          }
          rounded-lg shadow-md transition-all
          hover:shadow-lg
          active:opacity-85
          focus:opacity-85 focus:shadow-none
          disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
        `}
        disabled={type === "isLoading" ? true : false}
        onClick={() => clickFunction()}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
