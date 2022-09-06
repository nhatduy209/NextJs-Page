import * as React from "react";

export const Clock = (props) => (
  <svg
    width={38}
    height={28}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.9966 28.6568C22.5409 28.6568 28.6568 22.5409 28.6568 14.9966C28.6568 7.4523 22.5409 1.33643 14.9966 1.33643C7.4523 1.33643 1.33643 7.4523 1.33643 14.9966C1.33643 22.5409 7.4523 28.6568 14.9966 28.6568Z"
      stroke="black"
      strokeMiterlimit={10}
    />
    <path
      d="M14.9966 5.37402V14.9967L19.0946 20.1849"
      stroke="black"
      strokeMiterlimit={10}
    />
  </svg>
);
