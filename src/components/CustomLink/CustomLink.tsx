import React from "react";
import styles from "./CustomLink.module.css";

export default function CustomLink({
  leftIcon,
  text,
  rightIcon,
  url,
  fill,
  style,
  onClick,
  linkWidth,
}: {
  leftIcon?: JSX.Element;
  text: string;
  rightIcon?: JSX.Element;
  url?: string;
  fill?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  linkWidth?: string;
}) {
  return (
    <div
      className={styles.wholeLink}
      style={style}
      onClick={() => {
        onClick ? onClick() : undefined;
      }}
    >
      <div className={styles.iconAndText}>
        {leftIcon ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            {React.cloneElement(leftIcon, { fill: fill || "#808080" })}
          </div>
        ) : null}
        <div className={styles.text} style={style}>
          {text}
        </div>
      </div>
      {rightIcon ? (
        <div>{React.cloneElement(rightIcon, { fill: fill || "#808080" })}</div>
      ) : null}
    </div>
  );
}
