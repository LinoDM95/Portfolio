// components/GlobalImage.jsx
import React from "react";
import TopLeftImgPng from "../../../public/top-left-img.png"

export default function TopLeftImg() {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge opacity-50 w-[200px] sm:w-[300px] lg:w-[400px]">
      <img src={TopLeftImgPng} alt="TopLeft" width={400} height={400} />
    </div>
  );
}
