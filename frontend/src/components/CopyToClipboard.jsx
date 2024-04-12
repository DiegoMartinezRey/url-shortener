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
      <div className="w-96 bg-gray-700 rounded-md py-2 px-4 flex justify-between">
        <p className="text-white">{urlGetInfo.shortUrl && completeShortUrl}</p>
        <button
          className="flex bg-white rounded-md cursor-pointer"
          onClick={() => copyToClipboard()}
          disabled={isCopied}
        >
          <p className="text-black px-1">{!isCopied ? "Copy" : "Copied"}</p>
        </button>
      </div>
    </>
  );
};

export default CopyToClipboard;
