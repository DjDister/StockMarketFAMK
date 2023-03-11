import React from "react";
import TrendingDown from "../../assets/icons/TrendingDown";
import TrendingUp from "../../assets/icons/TrendingUp";
import ReturnIndicator from "../ReturnIndicator/ReturnIndicator";
import styles from "./DetailsCard.module.css";

export default function DetailsCard({
  customStyle,
  className,
  labelText,
  labelIcon,
  amount,
  returnIndicator,
}: {
  customStyle?: React.CSSProperties;
  className?: string;
  labelText?: string;
  labelIcon?: React.ReactNode;
  amount?: string;
  returnIndicator?: number | string;
}) {
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{ ...customStyle }}
    >
      <div className={styles.title}>
        {labelIcon}
        {labelText}
      </div>

      <div className={styles.amount}>
        {amount}
        {returnIndicator && (
          <ReturnIndicator returnIndicator={returnIndicator} />
        )}
      </div>
    </div>
  );
}
