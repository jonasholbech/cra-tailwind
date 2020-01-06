import React from "react";
//TODO: should this maintain own state?
//TODO: is children as label the cool way?
export default function CheckBox({ children, checked, ...checkboxProps }) {
  return (
    <label className="custom-label flex">
      <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          {...checkboxProps}
        />
        <svg
          className="hidden w-4 h-4 text-green-600 pointer-events-none"
          viewBox="0 0 172 172"
        >
          <g
            fill="none"
            stroke-width="none"
            stroke-miterlimit="10"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <path d="M0 172V0h172v172z" />
            <path
              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
              fill="currentColor"
              stroke-width="1"
            />
          </g>
        </svg>
      </div>
      <span className="select-none">{children}</span>
    </label>
  );
}
