import React from "react";

export default function Upload({
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
      <g id="Outline 2=upload">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 4H19C19.55 4 20 4.45 20 5V7C20 7.55 19.55 8 19 8C18.45 8 18 7.55 18 7V6H6V7C6 7.55 5.55 8 5 8C4.45 8 4 7.55 4 7V5C4 4.45 4.45 4 5 4ZM8.00089 14C7.69589 14 7.39689 13.862 7.19989 13.6C6.86789 13.158 6.95789 12.531 7.39989 12.2L11.3999 9.19999C11.7459 8.93999 12.2219 8.93299 12.5749 9.18199L16.5749 11.996C17.0269 12.314 17.1359 12.938 16.8179 13.389C16.4999 13.84 15.8769 13.95 15.4249 13.632L12.9972 11.9242C12.999 11.9492 13 11.9745 13 12V20C13 20.552 12.553 21 12 21C11.447 21 11 20.552 11 20V12.0001L8.59989 13.8C8.41989 13.935 8.20989 14 8.00089 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
