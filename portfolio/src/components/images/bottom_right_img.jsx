// components/GlobalImage.jsx
import React from "react";
import BottomRightImgPng from "../../../public/circles.png";

export default function BottomRightImg() {
  return (
    <div className="w-[200px] xl:w-[400px] absolute right-0 bottom-0 mix-blend-color-dodge animate-pulse duration-75">
      <img src={BottomRightImgPng} alt="BottomRight" width={400} height={400} />
    </div>
  );
}
