import React from "react";

export default function Lightning({
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
      <g id="Fill=flash">
        <path
          id="Mask"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.1114 23.0001C10.9974 23.0001 10.8824 22.9801 10.7694 22.9391C10.3374 22.7821 10.0674 22.3501 10.1174 21.8931L10.8854 14.8001H5.00036C4.63136 14.8001 4.29236 14.5971 4.11836 14.2711C3.94436 13.9451 3.96436 13.5511 4.16936 13.2441L12.0574 1.44412C12.3134 1.06112 12.7974 0.902121 13.2304 1.06112C13.6634 1.21812 13.9324 1.65012 13.8824 2.10712L13.1144 9.20012H19.0004C19.3694 9.20012 19.7084 9.40312 19.8824 9.72912C20.0554 10.0551 20.0364 10.4491 19.8314 10.7561L11.9424 22.5561C11.7534 22.8401 11.4374 23.0001 11.1114 23.0001Z"
        />
      </g>
    </svg>
  );
}
