import React from "react";
import TrendingDown from "../../assets/icons/TrendingDown";
import TrendingUp from "../../assets/icons/TrendingUp";
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
          <div
            style={{
              display: "flex",

              color:
                returnIndicator > 0
                  ? "green"
                  : returnIndicator == 0
                  ? "grey"
                  : "red",
            }}
          >
            {returnIndicator}%
            {returnIndicator >= 0 ? (
              <TrendingUp fill={returnIndicator > 0 ? "green" : "grey"} />
            ) : (
              <TrendingDown fill="red" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
