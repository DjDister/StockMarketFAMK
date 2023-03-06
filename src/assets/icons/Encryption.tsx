import React from "react";

export default function Encryption({
  width,
  height,
  fill = "#5367fe",
}: {
  width?: string;
  height?: string;
  fill?: string;
}) {
  return (
    <svg
      fill={fill}
      width={width || "50"}
      height={height || "50"}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M456.649,200.649H236.125c-20.379-41.006-62.687-69.189-111.584-69.189C55.758,131.459,0,187.218,0,256 s55.758,124.541,124.541,124.541c48.897,0,91.205-28.184,111.584-69.189h12.956l41.513,41.513l41.513-41.513l41.514,41.513 l41.513-41.513h41.514L512,256L456.649,200.649z M124.541,283.676c-15.26,0-27.676-12.415-27.676-27.676 s12.415-27.676,27.676-27.676S152.216,240.74,152.216,256S139.801,283.676,124.541,283.676z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
