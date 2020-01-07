// src/components/button.jsx
import React from "react";

export default function Button({
  children,
  type = "heavy",
  disabled,
  ...buttonProps
}) {
  const baseClasses =
    "bg-white tracking-wide font-bold rounded border-b-2 shadow-md py-2 px-6 inline-flex items-center text-center ";

  const types = {
    heavy:
      `text-gray-800 border-blue-500 ` +
      (disabled
        ? "opacity-50 cursor-not-allowed "
        : "hover:text-white hover:border-blue-600 hover:bg-blue-500 active:bg-blue-700"),
    light:
      `text-gray-800 border-red-500 ` +
      (disabled
        ? "opacity-50 cursor-not-allowed "
        : "hover:text-white hover:border-red-600 hover:bg-red-500 active:bg-red-700")
  };
  return (
    <button
      data-component="forms/button"
      className={baseClasses + types[type]}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
