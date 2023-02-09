import React from "react";

export default function Youtube({
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
      <g id="Outline 2=youtube">
        <path
          id="icon"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.0247 18.1282C22.7081 16.9571 23 15.0689 23 11.9972C23 8.93778 22.7108 7.06048 22.0202 5.85803C21.3281 4.60936 20.5073 4.21303 18.8783 4.1179C17.7662 4.04252 15.0023 4 12.0027 4C8.99661 4 6.23145 4.04251 5.111 4.11849C3.49112 4.21326 2.67011 4.61047 1.97193 5.8626C1.29138 7.0609 1 8.94737 1 12.0084C1 15.052 1.29279 16.948 1.97791 18.1424C2.66701 19.3784 3.47493 19.7708 5.1086 19.8855C6.28276 19.9543 9.20442 20 12.0027 20C14.7946 20 17.7149 19.9542 18.8783 19.8863C20.527 19.7708 21.3348 19.3778 22.0247 18.1282ZM18.7524 6.11391C19.7714 6.17346 19.9603 6.26505 20.2833 6.84964C20.7535 7.664 21 9.25771 21 12.0084C21 14.7383 20.7522 16.3408 20.2855 17.141C19.9614 17.7274 19.7738 17.8187 18.7501 17.8904C17.6489 17.9547 14.757 18 12.0027 18C9.24213 18 6.34874 17.9547 5.23703 17.8897C4.22601 17.8186 4.03565 17.7262 3.71873 17.1578C3.24886 16.3385 3 14.727 3 11.9972C3 9.26899 3.24754 7.66639 3.7149 6.84342C4.03675 6.26627 4.22844 6.17353 5.23709 6.11449C6.30508 6.04211 9.04424 6 12.0027 6C14.9547 6 17.6926 6.04212 18.7524 6.11391ZM10 9L15 12L10 15V9Z"
        />
      </g>
    </svg>
  );
}
