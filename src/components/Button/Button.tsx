import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactElement;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  rightIconReplaceOnClick?: React.ReactNode;
  onClick?: () => void;
  iconLeftToChild?: React.ReactNode;
  rightIconColor?: string;
  flex?: boolean;
}
export default function Button({
  leftIcon,
  rightIcon,
  rightIconReplaceOnClick,
  children,
  className,
  onClick,
  iconLeftToChild,
  style,
  rightIconColor,
  flex,
  ...rest
}: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`${styles.container} ${className}`}
      style={{
        ...(flex
          ? { display: "flex", alignItems: "center", justifyContent: "center" }
          : {}),
        ...style,
      }}
    >
      {leftIcon}
      <div
        style={{
          marginLeft: 4,
          display: "flex",
          height: "100%",
          alignItems: "center",
          gap: 6,
        }}
      >
        {iconLeftToChild}
        {children}
      </div>
      {rightIcon ? (
        <div className={styles.iconContainer}>
          {React.cloneElement(rightIcon, { fill: rightIconColor || "#676a79" })}
        </div>
      ) : null}
    </div>
  );
}
