import React from "react";
import RightArrow from "../../assets/icons/RightArrow";
import styles from "./TradingArrow.module.css";

export default function EasyCard({
  text,
  onClick,
  fill = "#5367fe",
  style,
}: {
  text: string;
  fill?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  return (
    // <div style={{ display: "flex", justifyContent: "left", width: "100%" }}>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "50%",
        maxWidth: "140px",
        maxHeight: "50px",
        // justifyContent: "center",
        justifyContent: "space-between",
        alignItems: "center",
        // gap: "10px",
        whiteSpace: "nowrap",
      }}
    >
      <div className={styles.startTrading}>{text}</div>
      <div className={styles.circleArrow}>
        <RightArrow fill={fill || "#5367fe"} />
      </div>
    </div>
    // </div>
  );
}
