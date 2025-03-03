// components/GlobalImage.jsx
import React from "react";
import BulbPng from "../../../public/bulb.png";

export default function BulbImg() {
  return (
    <div className="absolute rotate-12 mix-blend-color-dodge animate-pulse duration-75 hidden md:block w-50 left-[-5%] bottom-10">
      <img
        src={BulbPng}
        alt="BottomRight"
        width={300}
        height={300}
        className="w-full h-full"
      />
    </div>
  );
}
