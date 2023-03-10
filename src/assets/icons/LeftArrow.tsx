import React from "react";

export default function LeftArrow({
  width,
  height,
  fill = "#808080",
}: {
  width?: string;
  height?: string;
  fill?: string;
}) {
  return (
    <svg
      width={width || "30"}
      height={height || "30"}
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Outline 2=arrow-ios-left">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8286 19C13.5366 19 13.2466 18.873 13.0486 18.627L8.2206 12.627C7.9226 12.256 7.9266 11.726 8.2316 11.36L13.2316 5.35998C13.5846 4.93598 14.2156 4.87898 14.6406 5.23198C15.0646 5.58498 15.1216 6.21598 14.7676 6.63998L10.2926 12.011L14.6076 17.373C14.9536 17.803 14.8856 18.433 14.4546 18.779C14.2706 18.928 14.0486 19 13.8286 19Z"
        />
      </g>
    </svg>
  );
}
