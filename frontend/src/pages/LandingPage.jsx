import axios from "axios";
import React, { useState } from "react";
import CopyToClipboard from "../components/CopyToClipboard";
import GenerateUrl from "../containers/GenerateUrl";

const LandingPage = () => {
  const [urlInfo, setUrlInfo] = useState({});

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
      <div className="flex flex-col items-center justify-center gap-10">
        <h1></h1>
        <GenerateUrl getUrlInfo={getUrlInfo} />
        <CopyToClipboard urlInfo={urlInfo} />
      </div>
    </>
  );
};

export default LandingPage;
