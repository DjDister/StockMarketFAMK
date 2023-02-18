import React from "react";

export default function Clipboard({
  width,
  height,
  style,
  fill = "#7c7e8d",
}: {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  fill?: string;
}) {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Outline 2=clipboard">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 19C19 19.552 18.551 20 18 20H6C5.449 20 5 19.552 5 19V8C5 7.448 5.449 7 6 7V8C6 9.103 6.897 10 8 10H16C17.103 10 18 9.103 18 8V7C18.551 7 19 7.448 19 8V19ZM8 4L16 4.003V5V8H8V5V4ZM18 5V4C18 2.897 17.103 2 16 2H8C6.897 2 6 2.897 6 4V5C4.346 5 3 6.346 3 8V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V8C21 6.346 19.654 5 18 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
