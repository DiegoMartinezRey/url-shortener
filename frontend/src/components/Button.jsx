import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import themeConfig from "../styles/themeStyle";

const Button = ({ children, type, clickFunction }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        // class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        className={`${
          theme === "light"
            ? `${themeConfig.light.primary} shadow-pink-500/20 hover:shadow-pink-500/40`
            : `${themeConfig.dark.primary}`
        } text-white rounded-lg py-1.5 px-6 shadow-md  hover:shadow-lg  active:opacity-[0.85]`}
        onClick={() => clickFunction()}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
