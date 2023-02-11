import React from "react";
import styles from "./Market.module.css";

interface CryptoProps {
  icon?: JSX.Element;
  name: string;
  shortname: string;
  graph?: JSX.Element;
  price?: string;
  changeprice?: string;
}

export default function Elem({
  icon,
  name,
  shortname,
  graph,
  price,
  changeprice,
}: CryptoProps) {
  return (
    <div className={styles.crypto}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.nazwy}>
        <div className={styles.name}>{name}</div>
        <div className={styles.shortname}>{shortname}</div>
      </div>
      <div className={styles.graph}>{graph}</div>
      <div className={styles.overallprice}>
        <div className={styles.price}>{price}</div>
        <div className={styles.pricechanges}>{changeprice}</div>
      </div>
    </div>
  );
}
