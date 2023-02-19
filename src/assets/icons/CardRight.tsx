import React from "react";

export default function CardRight({
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
      <g id="Outline 2=creditcard-income">
        <path
          id="icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.81818 3H21.1818C22.186 3 23 3.89543 23 5V17C23 18.1046 22.186 19 21.1818 19H11V17H21V10H3V12H1V5C1 3.89543 1.81403 3 2.81818 3ZM21 5V8H3V5H21ZM1 17H5.58579L4.29289 18.2929L5.70711 19.7071L9.41421 16L5.70711 12.2929L4.29289 13.7071L5.58579 15H1V17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
