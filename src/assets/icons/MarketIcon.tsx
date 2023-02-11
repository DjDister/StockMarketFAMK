import React from "react";

export default function MarketIcon({
  width,
  height,
  fill = "#808080",
}: {
  width?: string;
  height?: string;
  fill?: string;
}) {
  return (
    <svg
      width={width || "30"}
      height={height || "30"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Outline 2=flash">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.8711 12.7998H12.0001C12.2841 12.7998 12.5551 12.9208 12.7441 13.1318C12.9331 13.3428 13.0241 13.6248 12.9941 13.9068L12.5451 18.0568L17.1291 11.1998H12.0001C11.7161 11.1998 11.4451 11.0788 11.2561 10.8678C11.0661 10.6568 10.9751 10.3748 11.0061 10.0928L11.4551 5.9438L6.8711 12.7998ZM11.1111 22.9998C10.9971 22.9998 10.8821 22.9808 10.7691 22.9398C10.3371 22.7818 10.0671 22.3498 10.1171 21.8928L10.8861 14.7998H5.0001C4.6311 14.7998 4.2921 14.5968 4.1181 14.2718C3.9441 13.9458 3.9641 13.5508 4.1691 13.2438L12.0581 1.4448C12.3131 1.0608 12.7971 0.902798 13.2301 1.0608C13.6631 1.2178 13.9331 1.6508 13.8831 2.1078L13.1141 9.1998H19.0001C19.3691 9.1998 19.7081 9.4038 19.8821 9.7288C20.0561 10.0548 20.0361 10.4488 19.8311 10.7558L11.9421 22.5558C11.7531 22.8398 11.4371 22.9998 11.1111 22.9998Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
