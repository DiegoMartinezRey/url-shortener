import React, { useState } from "react";
import Button from "../components/Button";

//import.meta.env.VITE_API_URL

const GenerateUrl = ({ getUrlInfo }) => {
  const [urlInput, setUrlInput] = useState("");

  const clickFunction = () => {
    getUrlInfo(urlInput);
  };

  return (
    <>
      <div className="w-6/12 min-w-80 mt-2 flex items-center justify-center gap-2">
        <div className="w-full relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500">https://</span>
          </div>
          <input
            type="text"
            name="url"
            id="url"
            className="block w-full rounded-md border-0 py-3 pl-16 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="www.google.com"
            onChange={(e) => setUrlInput(e.target.value)}
          />
        </div>
        <Button type={"dark"} clickFunction={clickFunction}>
          Generate
        </Button>
      </div>
    </>
  );
};

export default GenerateUrl;
