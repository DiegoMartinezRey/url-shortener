import React from "react";
import GenerateUrl from "../containers/GenerateUrl";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          URL
        </label>
        <GenerateUrl />
      </div>
    </>
  );
};

export default LandingPage;
