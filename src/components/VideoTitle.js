import React from "react";
import { HiPlay } from "react-icons/hi2";
import { PiInfo } from "react-icons/pi";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-md py-6 w-1/4">{overview}</p>
      <div>
        <button className="bg-white mx-2 border border-black rounded-md text-black p-3 px-8 text-xl inline-flex items-center font-bold gap-2 hover:bg-opacity-75">
        <HiPlay/> Play
        </button>
        <button className="mx-2 bg-gray-500 border border-black rounded-md text-white p-3 px-6 text-xl inline-flex items-center font-bold gap-2">
        <PiInfo/> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
