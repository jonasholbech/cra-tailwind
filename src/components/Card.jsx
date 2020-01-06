// src/components/button.jsx
import React from "react";

export default function Card({
  children,
  category = "Please pass in a category",
  header = "Please pass in a header",
  text = "Please pass in a text",
  image = "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80",
  altText = "Please pass in an alt text"
}) {
  return (
    <div className="md:flex shadow p-2 hover:shadow-lg py-4 px-4 m-4">
      <div className="md:flex-shrink-0">
        <img className="rounded-lg md:w-56" src={image} alt={altText} />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          {category}
        </div>
        <a
          href="/fake"
          className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
        >
          {header}
        </a>
        <p className="mt-2 text-gray-600">{text}</p>
      </div>
    </div>
  );
  /*
  const types = {
    heavy: `ml-4 rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md`,
    light: `ml-4 rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-white hover:bg-gray-200 md:text-lg xl:text-base text-gray-800 font-semibold leading-tight shadow-md`
  };
  return (
    <button className={types[type]} {...buttonProps}>
      {children}
    </button>
  );*/
}
