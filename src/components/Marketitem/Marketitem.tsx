import React from "react";
import TrendingDown from "../../assets/icons/TrendingDown";
import TrendingUp from "../../assets/icons/TrendingUp";
import styles from "./MarketItem.module.css";
interface CryptoProps {
  name: string;
  symbol: string;
  current_price?: number;
  price_change_percentage_24h?: number;
  high_24h?: number;
  low_24h?: number;
  image?: string;
  howManyDetails: number;
}

export default function Crypto({
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
  high_24h,
  low_24h,
  image,
  howManyDetails,
}: CryptoProps) {
  return (
    <div
      className={styles.container}
      style={{
        gridTemplateColumns: `repeat(${howManyDetails}, 1fr)`,
      }}
    >
      <div style={{}} className={styles.nameContainer}>
        <div className={styles.nameWithIcon}>
          <img className={styles.icon} src={image} />
          {name}
        </div>
        <div className={styles.symbolCont}>{symbol.toUpperCase()}</div>
      </div>
      {current_price && <div>${current_price}</div>}
      {price_change_percentage_24h && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color:
              price_change_percentage_24h > 0
                ? "#039763"
                : price_change_percentage_24h === 0
                ? "grey"
                : "red",
          }}
        >
          {price_change_percentage_24h}%
          {price_change_percentage_24h >= 0 ? (
            <TrendingUp
              fill={price_change_percentage_24h > 0 ? "green" : "grey"}
            />
          ) : (
            <TrendingDown fill="red" />
          )}
        </div>
      )}
      {high_24h && <div>{high_24h}</div>}
      {low_24h && <div>{low_24h}</div>}
    </div>
  );
}
