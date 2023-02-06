import React from "react";

export default function Portfolio({
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
      <g id="Outline 2=briefcase">
        <path
          id="Mask"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 18C20 18.551 19.551 19 19 19H17V9H19C19.551 9 20 9.449 20 10V18ZM4 18V10C4 9.449 4.449 9 5 9H7V19H5C4.449 19 4 18.551 4 18ZM10 5.5C10 5.224 10.224 5 10.5 5H13.5C13.776 5 14 5.224 14 5.5V7H10V5.5ZM9 19H15V9H9V19ZM19 7H16V5.5C16 4.122 14.878 3 13.5 3H10.5C9.122 3 8 4.122 8 5.5V7H5C3.346 7 2 8.346 2 10V18C2 19.654 3.346 21 5 21H19C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7Z"
          fill="#808080"
        />
      </g>
    </svg>
  );
}