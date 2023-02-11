import React from "react";
import styles from "./Market.module.css";
import Elem from "../../components/Marketitem/Marketitem";
import { useState } from "react";

const button = [
  { name: "Category" },
  { name: "Algorithm" },
  { name: "Platform" },
  { name: "Industry" },
];

export default function Market() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Market}>
      <div className={styles.part1}>
        <div className={styles.linia1}>
          <div className={styles.tytul}>
            <span>Market Coins</span>
          </div>
          <div className={styles.container}>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
          </div>
        </div>
        <div>
          <p>jakis bardzo madry tekst ut bedzie</p>
        </div>
        <div className={styles.przyciski}>
          {button.map((x) => (
            <div></div>
          ))}
        </div>
      </div>

      <div className={styles.part2}>Part2</div>
    </div>
  );
}
