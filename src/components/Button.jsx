// src/components/button.jsx
import React from "react";

export default function Button({ children, type = "heavy", ...buttonProps }) {
  const types = {
    heavy: `ml-4 rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md`,
    light: `ml-4 rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-white hover:bg-gray-200 md:text-lg xl:text-base text-gray-800 font-semibold leading-tight shadow-md`
  };
  return (
    <button className={types[type]} {...buttonProps}>
      {children}
    </button>
  );
}
