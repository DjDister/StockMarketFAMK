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
  index?: number;
}

export default function MarketItem({
  index,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
  high_24h,
  low_24h,
  image,
  howManyDetails,
}: CryptoProps) {
  const changeElement = price_change_percentage_24h ? (
    <div
      style={{
        alignItems: "center",
        display: "flex",
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
        <TrendingUp fill={price_change_percentage_24h > 0 ? "green" : "grey"} />
      ) : (
        <TrendingDown fill="red" />
      )}
    </div>
  ) : (
    <></>
  );
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div className={styles.nameContainer} style={{ width: "50%" }}>
        {index && <div style={{ marginRight: 10 }}>{index}</div>}
        <div className={styles.nameWithIcon}>
          <img className={styles.icon} src={image} />
          {name}
        </div>
        <div className={styles.symbolCont}>{symbol.toUpperCase()}</div>
      </div>
      <div
        className={styles.container}
        style={{
          gridTemplateColumns: `repeat(${howManyDetails - 1}, 1fr)`,
        }}
      >
        {current_price && (
          <div className={styles.hideElement}>${current_price}</div>
        )}
        {price_change_percentage_24h && (
          <div className={styles.hideElement}>{changeElement}</div>
        )}
        {current_price && price_change_percentage_24h && (
          <div className={styles.showElem}>
            ${current_price} {changeElement}
          </div>
        )}
        {high_24h && <div className={styles.high24}>{high_24h}</div>}
        {low_24h && <div className={styles.low24}>{low_24h}</div>}
      </div>
    </div>
  );
}
