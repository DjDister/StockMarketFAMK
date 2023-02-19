import React from "react";

export default function Card({
  width,
  height,
  fill,
}: {
  width?: string;
  height?: string;
  fill?: string;
}) {
  return (
    <svg
      fill={fill || "#000000"}
      width={`${width ?? "32px"}`}
      height={`${height ?? "32px"}`}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          stroke="#535358"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 7h22c1 0 2 1 2 2v14c0 1-1 2-2 2H5c-1 0-2-1-2-2V9c0-1 1-2 2-2z"
        ></path>{" "}
        <path
          stroke="#535358"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 20h8M3 13h26M23 20h2"
        ></path>{" "}
      </g>
    </svg>
  );
}
