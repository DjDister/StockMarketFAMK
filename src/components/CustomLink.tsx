import React from "react";
import { useLocation } from "react-router-dom";
import "./CustomLink.css";

export default function CustomLink({
  leftIcon,
  text,
  rightIcon,
  onClick,
}: {
  leftIcon: JSX.Element;
  text: string;
  rightIcon: JSX.Element;
  onClick?: () => void;
}) {
  const changeColor = useLocation();
  if (changeColor.pathname === text.toLocaleLowerCase()) {
    console.log("xD");
  }
  return (
    <div className="wholeLink">
      <div className="iconAndText">
        {leftIcon} <div className="text">{text}</div>
      </div>
      {rightIcon}
    </div>
  );
}
