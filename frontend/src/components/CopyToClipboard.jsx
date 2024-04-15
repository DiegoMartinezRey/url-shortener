import { faCheck, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const CopyToClipboard = ({ urlInfo }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [urlGetInfo, setUrlGetInfo] = useState({});

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
      <div className="w-80 bg-gray-700 rounded-md py-2 px-2 flex justify-between">
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
