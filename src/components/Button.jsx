// src/components/button.jsx
import React from "react";

export default function Button({ children, type = "heavy", ...buttonProps }) {
  const baseClasses =
    "ml-4 rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 font-semibold leading-tight shadow-md md:text-lg xl:text-base ";
  const types = {
    heavy: `bg-teal-500 hover:bg-teal-600 text-white`,
    light: `bg-white    hover:bg-gray-200 text-gray-800`
  };
  return (
    <button className={types[type] + baseClasses} {...buttonProps}>
      {children}
    </button>
  );
}
