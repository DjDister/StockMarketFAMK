import React from "react";

export default function Filter({
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
      viewBox="0 0 24 24"
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
          d="M17.8258 5H6.17422C5.31987 5 4.85896 6.00212 5.41496 6.65079L9.75926 11.7191C9.91461 11.9004 10 12.1312 10 12.3699V17.382C10 17.7607 10.214 18.107 10.5528 18.2764L12.5528 19.2764C13.2177 19.6088 14 19.1253 14 18.382V12.3699C14 12.1312 14.0854 11.9004 14.2407 11.7191L18.585 6.65079C19.141 6.00212 18.6801 5 17.8258 5Z"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
