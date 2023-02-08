import React from "react";

export default function Lock({
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
      <g id="Outline 2=lock">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 16C11.448 16 11 15.552 11 15C11 14.448 11.448 14 12 14C12.552 14 13 14.448 13 15C13 15.552 12.552 16 12 16ZM12 12C10.346 12 9 13.346 9 15C9 16.654 10.346 18 12 18C13.654 18 15 16.654 15 15C15 13.346 13.654 12 12 12ZM18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V11C6 10.448 6.448 10 7 10H8H10H14H16H17C17.552 10 18 10.448 18 11V19ZM10 6.111C10 4.947 10.897 4 12 4C13.103 4 14 4.947 14 6.111V8H10V6.111ZM17 8H16V6.111C16 3.845 14.206 2 12 2C9.794 2 8 3.845 8 6.111V8H7C5.346 8 4 9.346 4 11V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V11C20 9.346 18.654 8 17 8Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
