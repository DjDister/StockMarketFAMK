import React from "react";

export default function MenuOpen({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Outline 2=text-align-right">
        <path
          id="icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 7C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H21ZM21 9C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H9C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9H21ZM21 15C21.5523 15 22 14.5523 22 14C22 13.4477 21.5523 13 21 13H3C2.44772 13 2 13.4477 2 14C2 14.5523 2.44772 15 3 15H21ZM21 19C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H9C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19H21Z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}
