import * as React from "react";

export const FloorMap = (props: any) => (
  <svg
    width={38}
    height={28}
    viewBox="0 0 32 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1562_11767)">
      <path
        d="M9.43055 15.165L1 18.3609L15.9861 23.6372L31 18.3609L22.5556 15.165"
        stroke="#3D3D3D"
        strokeMiterlimit={10}
      />
      <path
        d="M16.0916 17.1833C18.9037 17.1833 21.1833 14.9037 21.1833 12.0916C21.1833 9.2796 18.9037 7 16.0916 7C13.2796 7 11 9.2796 11 12.0916C11 14.9037 13.2796 17.1833 16.0916 17.1833Z"
        fill="#FFF06A"
      />
      <path
        d="M9.43055 9.0061L1 12.202L15.9861 17.4783L31 12.202L22.5556 9.0061"
        stroke="#3D3D3D"
        strokeMiterlimit={10}
      />
      <path
        d="M15.9861 0.369629L1 6.04285L15.9861 11.3192L31 6.04285L15.9861 0.369629Z"
        stroke="#3D3D3D"
        strokeMiterlimit={10}
      />
    </g>
    <defs>
      <clipPath id="clip0_1562_11767">
        <rect width={32} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
