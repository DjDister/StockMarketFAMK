import React from "react";

export default function HeartBeat({
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
      <g id="Outline 2=activity">
        <path
          id="Mask"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.329 20.0005C14.262 20.0005 14.193 19.9975 14.124 19.9905C13.244 19.9035 12.554 19.2825 12.364 18.4075L9.681 6.01555L6.918 12.3975C6.759 12.7635 6.398 13.0005 6 13.0005H3C2.447 13.0005 2 12.5525 2 12.0005C2 11.4475 2.447 11.0005 3 11.0005H5.344L7.85 5.21155C8.205 4.39555 8.987 3.92055 9.876 4.00955C10.756 4.09655 11.446 4.71755 11.636 5.59255L14.319 17.9845L17.082 11.6025C17.241 11.2365 17.601 11.0005 18 11.0005H21C21.553 11.0005 22 11.4475 22 12.0005C22 12.5525 21.553 13.0005 21 13.0005H18.656L16.15 18.7885C15.823 19.5415 15.122 20.0005 14.329 20.0005Z"
        />
      </g>
    </svg>
  );
}
