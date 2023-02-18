import React, { useState } from "react";
import styles from "./SwitchButton.module.css";
import Switch from "../Switch/Switch";
import Button from "../Button/Button";
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
  iconSize = "50px",
  type = "switch",
  buttonClass,
  buttonOnColor = "#5367fe",
  buttonOffColor = "#E9EAF0",
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
  iconSize?: string;
  handleToggle?: () => void;
  type?: "switch" | "button";
  buttonClass?: string;
  buttonOnColor?: string;
  buttonOffColor?: string;
}) {
  return (
    <div
      style={{
        ...style,
      }}
      className={`${styles.container} ${
        type === "button" ? styles.containerWithButton : " "
      } ${className}`}
    >
      <div onClick={onClick} className={styles.clickContainer} />
      <div className={styles.flexContainer}>
        {iconBgColor ? (
          <div
            style={{
              height: iconSize,
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
      {type === "switch" ? (
        <Switch
          style={{ zIndex: 2 }}
          id={id}
          isOn={isOn}
          handleToggle={onClick}
        />
      ) : (
        <Button style={style} className={`${styles.button} ${buttonClass}`}>
          {isOn ? "Enabled" : "Disabled"}
        </Button>
      )}
    </div>
  );
}
