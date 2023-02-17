import React from "react";

export default function Loupe({
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
      <g id="Fill=search">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.9999 11C4.9999 7.691 7.6909 5 10.9999 5C14.3089 5 16.9999 7.691 16.9999 11C16.9999 14.309 14.3089 17 10.9999 17C7.6909 17 4.9999 14.309 4.9999 11ZM20.7069 19.293L17.3119 15.897C18.3649 14.543 18.9999 12.846 18.9999 11C18.9999 6.589 15.4109 3 10.9999 3C6.58888 3 2.99988 6.589 2.99988 11C2.99988 15.411 6.58888 19 10.9999 19C12.8459 19 14.5429 18.365 15.8969 17.312L19.2929 20.707C19.4879 20.902 19.7439 21 19.9999 21C20.2559 21 20.5119 20.902 20.7069 20.707C21.0979 20.316 21.0979 19.684 20.7069 19.293Z"
        />
      </g>
    </svg>
  );
}
