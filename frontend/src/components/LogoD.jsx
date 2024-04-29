import React from "react";

const LogoD = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center group cursor-pointer">
        <div className="w-28 transition-all group-hover:-translate-y-2">
          <img src="/logos/logo_top_light2.png" alt="" />
        </div>
        <div className="w-36 absolute ml-2 mb-1.5 opacity-0 transition-all group-hover:opacity-100">
          <img src="/logos/logo_name_light.png" alt="" />
        </div>
        <div className="w-28 transition-all group-hover:translate-y-2">
          <img src="/logos/logo_button_light2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default LogoD;
