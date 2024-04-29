import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import themeConfig from "../styles/themeStyle";

const FooterApp = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`${
          theme === "light"
            ? themeConfig.light.primary
            : themeConfig.dark.primary
        } h-auto flex flex-col items-center  gap-10 py-4`}
      >
        <h1
          className={`${
            theme === "light" ? themeConfig.light.text2 : themeConfig.dark.text
          }`}
        >
          The code is available on{" "}
          <span className="hover:underline cursor-pointer">GitHub</span>
        </h1>
      </div>
    </>
  );
};

export default FooterApp;
