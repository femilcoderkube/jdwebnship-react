import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import Slider from "./Slider";

function SingleImage() {
  return (
    <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
      <span className="text-gray-500">Single Image Placeholder</span>
    </div>
  );
}

function Video() {
  return (
    <div className="w-full h-64 bg-black flex items-center justify-center rounded-lg">
      <span className="text-white">Video Placeholder</span>
    </div>
  );
}

export default function Banner() {
  const { theme } = useTheme();
  if (theme.bannerType === "image") return <SingleImage />;
  if (theme.bannerType === "video") return <Video />;
  return <Slider />;
}
