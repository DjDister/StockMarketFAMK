import React from "react";

export default function Repeat({
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
      <g id="Outline 2=repeat">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.91419 5.00001H17.9102C19.8892 5.00001 21.5002 6.58301 21.5002 8.52901V11C21.5002 11.553 21.0532 12 20.5002 12C19.9472 12 19.5002 11.553 19.5002 11V8.52901C19.5002 7.68701 18.7872 7.00001 17.9102 7.00001H5.91419L7.20719 8.29301C7.59719 8.68401 7.59719 9.31601 7.20719 9.70701C7.01219 9.90201 6.75619 10 6.50019 10C6.24419 10 5.98819 9.90201 5.79319 9.70701L2.79319 6.70701C2.40219 6.31601 2.40219 5.68401 2.79319 5.29301L5.79319 2.29301C6.18319 1.90201 6.81619 1.90201 7.20719 2.29301C7.59719 2.68401 7.59719 3.31601 7.20719 3.70701L5.91419 5.00001ZM16.793 14.293C17.184 13.902 17.816 13.902 18.207 14.293L21.207 17.293C21.598 17.684 21.598 18.316 21.207 18.707L18.207 21.707C18.012 21.902 17.756 22 17.5 22C17.244 22 16.988 21.902 16.793 21.707C16.402 21.316 16.402 20.684 16.793 20.293L18.086 19H6.08999C4.10999 19 2.49999 17.417 2.49999 15.471V13C2.49999 12.447 2.94799 12 3.49999 12C4.05199 12 4.49999 12.447 4.49999 13V15.471C4.49999 16.314 5.21299 17 6.08999 17H18.086L16.793 15.707C16.402 15.316 16.402 14.684 16.793 14.293Z"
          fill="#343C44"
        />
      </g>
    </svg>
  );
}