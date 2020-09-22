import React, { useState } from "react";
import CheckBox from "./forms/CheckBox";
export default function Nav({ available, active, ...remaining }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const filtered = available.filter(item => {
    return String(item)
      .toLowerCase()
      .includes(searchPhrase);
  });
  return (
    <nav className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden mb-8">
      <div className="sm:flex sm:items-center px-2 py-4">
        <div className="flex-grow">
          <h3 className="font-normal px-2 py-3 leading-tight">Components</h3>
          <input
            type="text"
            placeholder="Search components"
            onChange={e => setSearchPhrase(e.target.value)}
            className="my-2 w-full text-sm bg-gray-300 text-gray-800 rounded h-10 p-3 focus:outline-none"
          />
          <div className="w-full">
            {filtered.map(av => {
              return (
                <div className="flex cursor-pointer my-1 hover:bg-blue-200 rounded items-center p-4">
                  <CheckBox value={av} checked={active.has(av)} {...remaining}>
                    {av}
                  </CheckBox>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
