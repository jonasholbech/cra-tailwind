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
}
