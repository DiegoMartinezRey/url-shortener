import { faCheck, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import themeConfig from "../styles/themeStyle";

const CopyToClipboard = ({ urlInfo }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [urlGetInfo, setUrlGetInfo] = useState({});
  const { theme, toggleTheme } = useContext(ThemeContext);

  let completeShortUrl = `${import.meta.env.VITE_API_URL}/${
    urlGetInfo.shortUrl
  }`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(completeShortUrl);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  useEffect(() => {
    setUrlGetInfo(urlInfo);
  }, [urlInfo]);

  return (
    <>
      <div
        className={`${
          theme === "light" ? themeConfig.light.primary : "bg-gray-700"
        } w-80  rounded-md py-2 px-2 flex justify-between`}
      >
        <p className="text-white">{urlGetInfo.shortUrl && completeShortUrl}</p>
        <button
          className="flex rounded-md cursor-pointer hover:bg-gray-500"
          onClick={() => copyToClipboard()}
          disabled={isCopied}
        >
          <p className="text-black px-1 text-white">
            <FontAwesomeIcon icon={!isCopied ? faClipboard : faCheck} />
          </p>
        </button>
      </div>
    </>
  );
};

export default CopyToClipboard;
