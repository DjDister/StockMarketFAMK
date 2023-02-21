import React from "react";

export default function DownArrow({
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
      <g id="Outline 2=arrow-ios-down">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 16C11.772 16 11.545 15.923 11.36 15.768L5.36003 10.768C4.93603 10.415 4.87803 9.78398 5.23203 9.35998C5.58503 8.93598 6.21503 8.87898 6.64003 9.23198L12.011 13.708L17.373 9.39298C17.803 9.04698 18.433 9.11498 18.779 9.54498C19.125 9.97498 19.057 10.604 18.627 10.951L12.627 15.779C12.444 15.926 12.222 16 12 16Z"
          fill="#343C44"
        />
      </g>
    </svg>
  );
}
