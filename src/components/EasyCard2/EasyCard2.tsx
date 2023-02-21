import React from "react";
import styles from "./EasyCard2.module.css";

export default function EasyCard({
  icon,
  boldText,
  text,
  onClick,
  fill,
  style,
}: {
  icon?: JSX.Element;
  text: string;
  boldText: string;
  fill?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  return (
    <div className={styles.easyCard}>
      <div className={styles.iconBox}>
        <div
          // style={{ backgroundColor: "#080808", padding: "5px" }}
          className={styles.iconBackground}
        >
          {icon}
        </div>
      </div>
      <div className={styles.textBox}>
        <div className={styles.boldText}>{boldText}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
