import { SVGProps } from "react";

export const DownArrow = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width={13}
    height={8}
    viewBox="0 0 13 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 1L6.5 6.5L12 1" stroke="#3D3D3D" />
  </svg>
);
