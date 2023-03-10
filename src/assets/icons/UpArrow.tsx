import React from "react";

export default function UpArrow({
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
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Fill=arrow-ios-up">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.9993 15C17.7733 15 17.5463 14.924 17.3593 14.768L11.9883 10.292L6.62626 14.607C6.19726 14.954 5.56726 14.886 5.22026 14.455C4.87426 14.025 4.94226 13.396 5.37326 13.049L11.3733 8.22104C11.7433 7.92204 12.2743 7.92604 12.6403 8.23204L18.6403 13.232C19.0643 13.585 19.1213 14.216 18.7683 14.64C18.5703 14.877 18.2863 15 17.9993 15Z"
          fill={fill || "#808080"}
        />
      </g>
    </svg>
  );
}
