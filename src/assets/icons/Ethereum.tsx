import React from "react";

export default function Bitcoin({
  width,
  height,
  fill = "#5c8cec",
  style,
}: {
  width?: string;
  height?: string;
  fill?: string;
  style?: React.CSSProperties;
}) {
  return (
    // <svg
    //   fill={fill}
    //   width={`${width ?? "50px"}`}
    //   height={`${height ?? "50px"}`}
    //   style={style}
    //   viewBox="0 0 24 24"
    //   role="img"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    //   <g
    //     id="SVGRepo_tracerCarrier"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //   ></g>
    //   <g id="SVGRepo_iconCarrier">
    //     <defs>
    //       <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
    //         <stop offset="0%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    //         <stop
    //           offset="100%"
    //           style="stop-color:rgb(255,255,0);stop-opacity:1"
    //         />
    //       </linearGradient>
    //     </defs>
    //     <title>Ethereum icon</title>
    //     <path
    //       fill="url(#MyGradient)"
    //       //   stroke="black"
    //       d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"
    //     ></path>
    //   </g>
    // </svg>
    <svg
      fill={fill}
      width={width}
      height={height}
      style={style}
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="10%"
              style={{ stopColor: "#5c8cec", stopOpacity: 1 }}
            />
            <stop
              offset="90%"
              style={{ stopColor: "#3874ec", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <title>Ethereum icon</title>
        <path
          fill="url(#grad2)"
          d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"
        ></path>
      </g>
    </svg>
  );
}
