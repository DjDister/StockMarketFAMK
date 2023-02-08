import React, { useState } from "react";
import styles from "./Switch.module.css";

interface SwitchProps {
  onColor?: string;
  offColor?: string;
  style?: React.CSSProperties;
  className?: string;
  onSwitchChange?: (checked: boolean) => void;
  defaultValue?: boolean;
}

export default function Switch({
  onColor,
  offColor,
  style,
  className,
  onSwitchChange,
  defaultValue = false,
}: SwitchProps) {
  const [isOn, setIsOn] = useState(defaultValue);

  const handleToggle = () => {
    setIsOn(!isOn);
    onSwitchChange && onSwitchChange(!isOn);
  };

  return (
    <div className={`${styles.switchContainer} ${className}`} style={style}>
      <input
        type="checkbox"
        id="switch"
        checked={isOn}
        onChange={handleToggle}
        className={styles.switchInput}
      />
      <label htmlFor="switch" className={styles.switchLabel}>
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
