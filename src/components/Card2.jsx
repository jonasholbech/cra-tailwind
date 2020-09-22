// src/components/card2.jsx
import React from "react";

export default function Card2({
  followers,
  profilePic = "http://alpha.backer.id/assets/images/bg/kucingmalas.jpeg",
  name = "Jonas",
  info = "Here comes some info",
  avatar = "http://alpha.backer.id/assets/images/bg/avatar-default2.jpg"
}) {
  return (
    <div className="md:w-1/2 lg:w-1/3 py-4 px-4">
      <a href="/donee/donee-2">
        <div className="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg">
          <div className="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500">
            {followers} Follower{followers > 0 ? "s" : ""}
          </div>
          <img
            src={profilePic}
            className="h-32 rounded-lg w-full object-cover"
            alt={`Profile of ${name}`}
          />
          <div className="flex justify-center">
            <img
              src={avatar}
              className="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16"
              alt=""
            />
          </div>
          <div className="py-2 px-2">
            <h2 className=" font-bold font-title text-center">{name}</h2>

            <p className="text-sm font-light text-center my-2">{info}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
