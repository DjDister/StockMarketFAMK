import React from "react";

export default function Windows({
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
      width={`${width ?? "32px"}`}
      height={`${height ?? "32px"}`}
      fill={fill || "#000000"}
      viewBox="-6.5 0 32 32"
      version="1.1"
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
        <title>windows</title>{" "}
        <path d="M17.84 6.28l-17.12 2.36c0 0-0.72 0.080-0.72 0.84v13.040c0 0 0 0.76 0.76 0.88l17.12 2.32c0.96 0.080 0.92-0.8 0.92-0.8v-17.8c0 0 0-0.96-0.96-0.84zM7.44 15.16h-5.76v-4.96l5.76-0.8c-0.040 0-0.040 5.76 0 5.76zM9.080 9.2l8.040-1.080v7.080h-8.040v-6zM1.68 16.84h5.72v5.72l-5.76-0.8c0 0 0-4.92 0.040-4.92zM9.080 16.84h8.040v7.080l-8.040-1.12v-5.96z"></path>{" "}
      </g>
    </svg>
  );
}
