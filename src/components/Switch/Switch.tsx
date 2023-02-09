import React, { useState } from "react";
import styles from "./Switch.module.css";

interface SwitchProps {
  onColor?: string;
  offColor?: string;
  style?: React.CSSProperties;
  className?: string;
  id: string;
  isOn?: boolean;
  handleToggle?: () => void;
}

export default function Switch({
  onColor,
  offColor,
  style,
  className,
  isOn = false,
  handleToggle,
  id,
}: SwitchProps) {
  return (
    <div className={`${styles.switchContainer} ${className}`} style={style}>
      <input
        type="checkbox"
        id={`switch-${id}`}
        checked={isOn}
        onChange={handleToggle}
        className={styles.switchInput}
      />
      <label htmlFor={`switch-${id}`} className={styles.switchLabel}>
        <span
          className={styles.switchButton}
          style={{
            backgroundColor: isOn
              ? onColor || "#5367fe"
              : offColor || "#ccceda",
          }}
        ></span>
        <span
          className={styles.switchDot}
          style={{
            transition: "all 0.3s ease",
            transform: "translate(-50%,-50%)",
            left: isOn ? "calc(100% - 10px)" : "10px",
          }}
        />
      </label>
    </div>
  );
}
