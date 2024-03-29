import React from "react";

export default function Circle({
  width,
  height,
  style,
  fill,
}: {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  fill?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      style={style}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Fill=radio-button-on">
        <path
          id="Mask"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 6.99991C9.243 6.99991 7 9.24291 7 11.9999C7 14.7569 9.243 16.9999 12 16.9999C14.757 16.9999 17 14.7569 17 11.9999C17 9.24291 14.757 6.99991 12 6.99991ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58891 7.589 3.99991 12 3.99991C16.411 3.99991 20 7.58891 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999ZM12 1.99991C6.486 1.99991 2 6.48591 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48591 17.514 1.99991 12 1.99991Z"
        />
      </g>
    </svg>
  );
}
