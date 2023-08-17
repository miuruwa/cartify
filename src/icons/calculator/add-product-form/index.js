import CloseIcon from "@mui/icons-material/Close"
import React from "react";

function AddIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        stroke="#fff"
        strokeWidth="2"
        d="M21 11c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10z"
      ></path>
      <path fill="#fff" d="M7 10h8v2H7v-2z"></path>
      <path
        fill="#fff"
        d="M10 15V7h2v8h-2zM8 11a1 1 0 11-2 0 1 1 0 012 0z"
      ></path>
      <path
        fill="#fff"
        d="M12 7a1 1 0 11-2 0 1 1 0 012 0zM16 11a1 1 0 11-2 0 1 1 0 012 0zM12 15a1 1 0 11-2 0 1 1 0 012 0z"
      ></path>
    </svg>
  );
}


export {
    AddIcon, 
    CloseIcon
}