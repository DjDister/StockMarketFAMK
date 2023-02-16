import React from "react";
import styles from "../../pages/MarketPage/MarketPage.module.css";

interface CryptoProps {
  icon?: JSX.Element;
  name: string;
  shortname: string;
  graph?: JSX.Element;
  price?: number;
  changeprice?: string;
  counter?: number;
}

export default function Crypto({
  icon,
  name,
  shortname,
  graph,
  price,
  changeprice,
  counter,
}: CryptoProps) {
  return (
    <div className={styles.crypto}>
      <div>{counter}</div>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.nazwy}>
        <div className={styles.name}>{name}</div>
        <div className={styles.shortname}>{shortname}</div>
      </div>
      <div className={styles.graph}>{}</div>
      <div className={styles.overallprice}>
        <div className={styles.price}>{price}</div>
        <div className={styles.pricechanges}>{changeprice}</div>
      </div>
    </div>
  );
}
