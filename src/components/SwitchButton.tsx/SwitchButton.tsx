import React, { useState } from "react";
import styles from "./SwitchButton.module.css";
import Switch from "../Switch/Switch";
export default function SwitchButton({
  text,
  id,
  label,
  iconLeft,
  iconBgColor = "#56b2ff",
  onClick,
  style,
  className,
  isOn = false,
  handleToggle,
}: {
  text?: string;
  id: string;
  label: string;
  onClick?: () => void;
  iconLeft?: React.ReactNode;
  iconBgColor?: string;
  style?: React.CSSProperties;
  className?: string;
  isOn?: boolean;
  handleToggle?: () => void;
}) {
  return (
    <div style={style} className={`${styles.container} ${className}`}>
      <div onClick={onClick} className={styles.clickContainer} />
      <div className={styles.flexContainer}>
        {iconBgColor ? (
          <div
            style={{
              height: "100%",
              aspectRatio: "1/1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: iconBgColor,
            }}
          >
            {iconLeft}
          </div>
        ) : (
          iconLeft
        )}
        <div
          className={styles.flexCol}
          style={{ marginLeft: iconLeft ? 12 : 0 }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.text}>{text}</span>
        </div>
      </div>
      <Switch
        style={{ zIndex: 2 }}
        id={id}
        isOn={isOn}
        handleToggle={onClick}
      />
    </div>
  );
}
