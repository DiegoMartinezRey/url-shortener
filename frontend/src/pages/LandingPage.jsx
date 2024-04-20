import axios from "axios";
import React, { useContext, useState } from "react";
import CopyToClipboard from "../components/CopyToClipboard";
import GenerateUrl from "../containers/GenerateUrl";
import { ThemeContext } from "../contexts/ThemeProvider";
import themeConfig from "../styles/themeStyle";

const LandingPage = () => {
  const [urlInfo, setUrlInfo] = useState({});
  const { theme, toggleTheme } = useContext(ThemeContext);

  const getUrlInfo = async (urlInput) => {
    try {
      const url = await axios.post(`${import.meta.env.VITE_API_URL}`, {
        originalUrl: `https://${urlInput}`,
      });
      setUrlInfo(url.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className={`${
          theme === "light"
            ? themeConfig.light.background
            : themeConfig.dark.background
        } h-screen flex flex-col items-center  gap-10 py-10`}
      >
        <h1
          className={`${
            theme === "light" ? themeConfig.light.text : themeConfig.dark.text
          } h1-default`}
        >
          URL SHORTENER
        </h1>
        <h2
          className={`${
            theme === "light" ? themeConfig.light.text : themeConfig.dark.text
          } h2-default`}
        >
          Info app description
        </h2>
        <GenerateUrl getUrlInfo={getUrlInfo} />
        <CopyToClipboard urlInfo={urlInfo} />
      </div>
    </>
  );
};

export default LandingPage;
