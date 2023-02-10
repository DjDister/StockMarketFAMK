import React from "react";

export default function Monitor({
  width,
  height,
  style,
  fill = "#343C44",
}: {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  fill?: string;
}) {
  return (
    <svg
      width={`${width ?? "24px"}`}
      height={`${height ?? "24px"}`}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Outline 2=monitor">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 14C20 14.551 19.552 15 19 15H12.087H11.913H5C4.448 15 4 14.551 4 14V6C4 5.449 4.448 5 5 5H19C19.552 5 20 5.449 20 6V14ZM19 3H5C3.346 3 2 4.346 2 6V14C2 15.654 3.346 17 5 17H11V19H7C6.45 19 6 19.45 6 20C6 20.55 6.45 21 7 21H17C17.55 21 18 20.55 18 20C18 19.45 17.55 19 17 19H13V17H19C20.654 17 22 15.654 22 14V6C22 4.346 20.654 3 19 3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
