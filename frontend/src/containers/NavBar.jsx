import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import themeConfig from "../styles/themeStyle";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`${
          theme === "light"
            ? themeConfig.light.primary
            : themeConfig.dark.primary
        } flex items-center justify-around gap-2 h-12`}
      >
        <div
          className={`${
            theme === "light" ? themeConfig.light.text2 : themeConfig.dark.text
          }`}
        >
          UrlShortener
        </div>
        <div
          className={`${
            theme === "light" ? themeConfig.light.text2 : themeConfig.dark.text
          } cursor-pointer`}
          onClick={toggleTheme}
        >
          <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
