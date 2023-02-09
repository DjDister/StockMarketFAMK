import React from "react";

export default function Twitter({
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
      <g id="Fill=twitter">
        <path
          id="Mask"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.07693 20.0003C15.3229 20.0003 19.5149 14.3743 19.5149 9.03528C19.5149 8.88828 20.5449 8.00428 20.9859 6.16128C21.0759 5.78728 20.7119 5.49228 20.3689 5.64928C19.4889 6.05328 18.5959 5.73328 18.2079 5.27328C16.7159 3.64628 14.2209 3.56828 12.6339 5.09828C11.6109 6.08528 11.1769 7.55528 11.4939 8.95828C8.14293 9.19728 5.84193 7.60928 3.94993 5.43228C3.70593 5.14928 3.25293 5.29828 3.20193 5.67228C2.92193 7.75428 2.83393 12.8163 7.84993 15.7233C6.97893 16.9753 5.27393 17.7143 3.37593 18.0313C2.95593 18.1023 2.85593 18.6843 3.23993 18.8723C4.74393 19.6123 6.39693 19.9993 8.07693 19.9973"
        />
      </g>
    </svg>
  );
}
