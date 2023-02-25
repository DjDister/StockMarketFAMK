import React from "react";

export default function Wallet({
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
      <g id="Outline 2=wallet">
        <mask
          id="mask0_4_2903"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="2"
          y="1"
          width="20"
          height="20"
        >
          <path
            id="icon"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4506 1.40269C16.5126 1.09924 17.6196 1.71423 17.923 2.7763C17.9741 2.95498 18 3.13991 18 3.32574V5.00001H20C21.1046 5.00001 22 5.89544 22 7.00001V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19H2.0267C2.00895 18.8925 2 18.7835 2 18.6743V6.75431C2 5.86135 2.59195 5.07658 3.45056 4.83126L15.4506 1.40269ZM10.1401 19H20V11H18V15.2457C18 16.1387 17.408 16.9234 16.5494 17.1688L10.1401 19ZM18 7.00001H20V9.00001H18V7.00001ZM4 6.75429V18.6743L16 15.2457V3.32571L4 6.75429ZM14 9.00001C14 9.5523 13.5523 10 13 10C12.4477 10 12 9.5523 12 9.00001C12 8.44773 12.4477 8.00001 13 8.00001C13.5523 8.00001 14 8.44773 14 9.00001Z"
            fill="black"
          />
        </mask>
        <g mask="url(#mask0_4_2903)">
          <g id="&#240;&#159;&#142;&#168; Color">
            <rect id="Base" width="24" height="24" fill={fill} />
          </g>
        </g>
      </g>
    </svg>
  );
}
