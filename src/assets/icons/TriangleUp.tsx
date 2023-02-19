import React from "react";

export default function TriangleUp({
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
      <g id="Fill=arrow-up">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.2131 16H7.78714C7.11414 16 6.50714 15.598 6.20214 14.951C5.85714 14.218 5.95714 13.351 6.46014 12.741L10.6741 7.64205C11.3461 6.82505 12.6541 6.82505 13.3261 7.64205L17.5391 12.74C18.0431 13.351 18.1441 14.218 17.7981 14.951C17.4931 15.598 16.8861 16 16.2131 16Z"
        />
      </g>
    </svg>
  );
}
