import React from "react";
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
  return (
    <div className="wholeLink">
      <div className="iconAndText">
        {leftIcon} <div className="text">{text}</div>
      </div>
      {rightIcon}
    </div>
  );
}
