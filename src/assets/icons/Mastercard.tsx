import React from "react";

export default function Mastercard({
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
      viewBox="0 -6 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="m33.6 24h-31.2c-1.325 0-2.4-1.075-2.4-2.4v-19.2c0-1.325 1.075-2.4 2.4-2.4h31.2c1.325 0 2.4 1.075 2.4 2.4v19.2c0 1.325-1.075 2.4-2.4 2.4zm-5.116-4.281c-.004 0-.009 0-.014 0-.288 0-.547.123-.728.319l-.001.001c-.189.208-.305.485-.305.789s.116.582.306.79l-.001-.001c.182.197.441.32.729.32h.014-.001c.015.001.034.002.052.002.254 0 .479-.123.619-.312l.001-.002v.266h.453v-2.969h-.453v1.11c-.146-.191-.374-.314-.631-.314-.014 0-.028 0-.042.001zm-4.25 0c-.007 0-.015 0-.023 0-.289 0-.55.12-.735.313-.189.211-.305.49-.305.797s.116.587.306.798l-.001-.001c.186.193.447.313.736.313h.024-.001c.014.001.029.001.045.001.251 0 .473-.123.609-.312l.002-.002v.266h.47v-2.11h-.469v.25c-.143-.191-.369-.314-.623-.314-.012 0-.024 0-.035.001h.002zm-2.048 0c-.013-.001-.027-.001-.042-.001-.613 0-1.11.497-1.11 1.11s.497 1.11 1.11 1.11c.015 0 .03 0 .044-.001h-.002c.012 0 .026.001.041.001.27 0 .517-.094.712-.252l-.002.002-.219-.375c-.139.11-.315.18-.506.188h-.002c-.012.001-.027.001-.041.001-.179 0-.341-.072-.459-.189-.111-.129-.179-.299-.179-.484s.068-.355.18-.485l-.001.001c.112-.116.268-.188.441-.188h.021-.001c.207.001.397.071.549.189l-.002-.002.219-.375c-.198-.157-.451-.251-.726-.251-.008 0-.017 0-.025 0h.001zm-4.08 0c-.008 0-.016 0-.025 0-.286 0-.543.12-.725.313-.184.199-.298.466-.298.76 0 .014 0 .028.001.042v-.002c-.001.014-.001.03-.001.046 0 .295.117.563.306.759.19.189.452.305.741.305.011 0 .023 0 .034-.001h-.002c.012 0 .027.001.041.001.313 0 .599-.113.821-.3l-.002.002-.219-.343c-.162.143-.375.232-.608.234h-.001c-.016.001-.034.002-.052.002-.301 0-.55-.225-.588-.515v-.003h1.578v-.187c.001-.016.001-.034.001-.052 0-.289-.107-.553-.284-.754l.001.001c-.172-.19-.42-.309-.696-.309-.007 0-.015 0-.022 0h.001zm-3.077.063v.422h.437v.954c0 .518.247.781.734.781h.017c.202 0 .389-.06.546-.162l-.004.002-.126-.391c-.117.067-.257.107-.406.11h-.001c-.198 0-.298-.115-.298-.343v-.95h.75v-.422h-.75v-.64h-.469v.64zm-1.967 1.53-.203.36c.247.167.551.266.878.266h.03-.002c.02.001.043.002.066.002.239 0 .462-.071.649-.193l-.005.003c.156-.107.258-.285.258-.487 0-.005 0-.009 0-.014v.001c0-.352-.247-.56-.734-.625l-.218-.032c-.24-.041-.36-.114-.36-.218 0-.156.131-.234.391-.234h.005c.245 0 .475.064.674.176l-.007-.004.188-.375c-.23-.138-.508-.22-.805-.22-.019 0-.039 0-.058.001h.003c-.016-.001-.035-.001-.054-.001-.22 0-.424.071-.589.191l.003-.002c-.143.112-.234.285-.234.48v.021-.001c0 .342.247.547.734.609l.203.032c.249.042.375.115.375.219 0 .176-.16.266-.485.266-.003 0-.006 0-.009 0-.26 0-.501-.082-.698-.222l.004.003zm-1.782-1.594c-.007 0-.016 0-.025 0-.285 0-.543.12-.724.313-.185.212-.298.492-.298.797s.113.585.299.799l-.001-.001c.182.193.439.313.725.313h.026-.001c.012.001.026.001.041.001.257 0 .486-.122.631-.312l.001-.002v.266h.453v-2.11h-.453v.25c-.157-.192-.393-.313-.658-.313-.005 0-.01 0-.016 0h.001zm14.688.063v2.11h.453v-1.187c0-.362.152-.546.453-.546h.01c.099 0 .193.023.276.064l-.004-.002.14-.438c-.088-.04-.19-.063-.298-.063-.011 0-.021 0-.032.001h.002c-.005 0-.011 0-.017 0-.227 0-.425.125-.528.31l-.002.003v-.25zm-6.39 0v2.11h.469v-1.187c0-.362.152-.546.453-.546h.01c.099 0 .193.023.276.064l-.004-.002.141-.438c-.092-.04-.198-.063-.31-.063-.006 0-.012 0-.019 0h.001c-.005 0-.012 0-.018 0-.227 0-.424.125-.527.31l-.002.003v-.25zm-10.688.375c.311 0 .469.189.469.56v1.172h.469v-1.328c0-.01.001-.021.001-.033 0-.22-.087-.419-.228-.566-.159-.149-.374-.24-.609-.24-.003 0-.006 0-.009 0-.015-.001-.033-.002-.051-.002-.286 0-.538.149-.681.374l-.002.003c-.133-.227-.375-.377-.653-.377-.017 0-.035.001-.052.002h.002c-.003 0-.006 0-.009 0-.247 0-.466.123-.599.311l-.002.002v-.25h-.467v2.11h.469v-1.174c0-.373.174-.56.516-.56.311 0 .469.189.469.56v1.172h.453v-1.172c0-.374.174-.56.515-.56zm14.016-18.156c-.01 0-.021 0-.033 0-1.625 0-3.134.496-4.385 1.346l.027-.017c1.296 1.056 2.265 2.469 2.758 4.089l.016.06c.236.745.371 1.601.371 2.49 0 .879-.133 1.726-.379 2.524l.016-.06c-.504 1.678-1.477 3.087-2.766 4.118l-.016.013c1.232.832 2.751 1.328 4.385 1.328 1.12 0 2.185-.233 3.15-.653l-.051.02c1.918-.813 3.414-2.309 4.207-4.175l.019-.051c.4-.91.633-1.971.633-3.086s-.233-2.176-.653-3.136l.02.05c-.813-1.919-2.313-3.415-4.183-4.205l-.051-.019c-.907-.4-1.964-.633-3.075-.633-.004 0-.007 0-.011 0h.001zm-9.812 0c-.003 0-.007 0-.011 0-1.111 0-2.169.233-3.125.652l.05-.02c-1.923.809-3.422 2.306-4.216 4.175l-.019.051c-.4.91-.633 1.971-.633 3.086s.233 2.176.653 3.136l-.02-.05c.813 1.918 2.309 3.414 4.175 4.207l.051.019c.914.4 1.98.633 3.099.633 1.635 0 3.153-.496 4.413-1.346l-.028.018c-1.303-1.051-2.276-2.466-2.766-4.089l-.015-.059c-.229-.736-.361-1.582-.361-2.459 0-2.665 1.218-5.046 3.128-6.616l.015-.012c-1.223-.832-2.732-1.328-4.357-1.328-.012 0-.024 0-.036 0h.002zm4.906 1.703c-1.257.977-2.196 2.307-2.673 3.842l-.015.055c-.228.705-.36 1.517-.36 2.359 0 .834.129 1.637.368 2.392l-.015-.056c.489 1.591 1.432 2.921 2.677 3.879l.018.013c1.263-.971 2.206-2.301 2.681-3.837l.015-.054c.224-.699.353-1.503.353-2.337 0-.843-.132-1.654-.375-2.416l.015.056c-.492-1.59-1.431-2.92-2.67-3.884l-.018-.013zm10.546 17.797c-.005 0-.011 0-.017 0-.175 0-.333-.075-.443-.195-.112-.126-.18-.294-.18-.477s.068-.35.181-.478l-.001.001c.117-.121.28-.196.461-.196s.345.075.461.196c.111.128.179.296.179.48s-.068.352-.18.481l.001-.001c-.112.117-.27.189-.444.189-.006 0-.012 0-.018 0h.001zm-4.265 0c-.007 0-.014 0-.022 0-.17 0-.323-.072-.431-.187-.107-.131-.172-.3-.172-.484s.065-.353.173-.486l-.001.001c.108-.116.261-.188.431-.188h.023-.001.018c.175 0 .333.075.442.195.112.121.18.283.18.461v.02-.001c0 .008.001.018.001.027 0 .176-.065.336-.173.459l.001-.001c-.111.114-.265.184-.436.184-.011 0-.023 0-.034-.001h.002zm-12.938 0c-.009 0-.019.001-.029.001-.173 0-.329-.072-.439-.188-.107-.131-.172-.3-.172-.484s.065-.353.173-.486l-.001.001c.111-.116.267-.188.44-.188.01 0 .021 0 .031.001h-.001.023c.171 0 .325.075.43.195l.001.001c.106.13.171.297.171.48s-.065.35-.172.481l.001-.001c-.108.116-.262.188-.433.188-.007 0-.015 0-.022 0h.001zm7.297-.86h-1.093c.025-.282.26-.502.547-.502s.522.22.547.5v.002z"></path>
      </g>
    </svg>
  );
}