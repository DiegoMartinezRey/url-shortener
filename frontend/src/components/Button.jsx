import React from "react";

const Button = ({ children, type }) => {
  return (
    <>
      {type === "light" && (
        <button
          // class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          className="bg-pink-500 text-white rounded-lg py-1.5 px-6 shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85]"
        >
          {children}
        </button>
      )}
      {type === "dark" && (
        <button
          // class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          className="bg-black text-white rounded-lg py-1.5 px-6 shadow-md shadow-gray-500 hover:shadow-lg hover:shadow-gray-500 active:opacity-[0.85]"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
