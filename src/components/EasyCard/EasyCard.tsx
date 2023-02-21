import React from "react";
import styles from "./EasyCard.module.css";

export default function EasyCard({
  icon,
  boldText,
  text,
  onClick,
  fill,
  style,
}: // flexDirection,
{
  icon?: JSX.Element;
  text: string;
  boldText: string;
  fill?: string;
  style?: React.CSSProperties;
  // flexDirection?: string;
  onClick?: () => void;
}) {
  return (
    <div className={styles.easyCard} style={style}>
      <div className={styles.iconBox}>{icon}</div>
      <div className={styles.textBox}>
        <div className={styles.boldText}>{boldText}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
