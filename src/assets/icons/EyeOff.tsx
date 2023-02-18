import React from "react";

export default function EyeOff({
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
      <g id="Outline 2=eye-off">
        <path
          id="Mask"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 13.5C11.173 13.5 10.5 12.827 10.5 12C10.5 11.9869 10.503 11.9741 10.506 11.9613L10.506 11.9613C10.5088 11.9496 10.5115 11.9379 10.512 11.926L12.074 13.488C12.0621 13.4885 12.0504 13.4912 12.0387 13.494C12.0259 13.497 12.0131 13.5 12 13.5ZM4.70699 3.29301C4.31599 2.90201 3.68399 2.90201 3.29299 3.29301C2.90199 3.68401 2.90199 4.31601 3.29299 4.70701L8.92299 10.337C8.64699 10.846 8.49999 11.411 8.49999 12C8.49999 13.93 10.07 15.5 12 15.5C12.589 15.5 13.154 15.353 13.663 15.077L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293L4.70699 3.29301ZM12.2197 16.9976C7.91469 17.0976 5.10469 13.4146 4.17269 11.9956C4.62969 11.2816 5.39569 10.2356 6.45569 9.28461L5.04469 7.87261C3.52269 9.26161 2.54669 10.7796 2.13269 11.5026C1.95569 11.8106 1.95569 12.1896 2.13269 12.4976C2.76169 13.5946 6.16169 18.9996 12.0247 18.9996C12.1067 18.9996 12.1887 18.9986 12.2707 18.9966C13.4547 18.9666 14.5267 18.7106 15.4977 18.3266L13.9177 16.7466C13.3827 16.8886 12.8197 16.9826 12.2197 16.9976ZM11.7297 5.00341C17.7047 4.81641 21.2297 10.3904 21.8677 11.5024C22.0437 11.8104 22.0437 12.1894 21.8677 12.4974C21.4527 13.2204 20.4767 14.7384 18.9547 16.1274L17.5437 14.7154C18.6037 13.7644 19.3707 12.7184 19.8267 12.0044C18.8947 10.5854 16.0717 6.89441 11.7807 7.00241C11.1807 7.01741 10.6177 7.11141 10.0817 7.25341L8.50169 5.67341C9.47369 5.28941 10.5447 5.03341 11.7297 5.00341Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
