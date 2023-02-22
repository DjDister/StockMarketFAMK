import React, { useState } from "react";
import styles from "./MarketList2.module.css";

const navbarcrypto = [
  { name: "Top Gainers" },
  { name: "Top Loses" },
  { name: "New in market" },
];
const [color, setColor] = useState(0);

console.log("dziala 123");
export default function MarketList2() {
  return (
    <div style={{ backgroundColor: "red" }} className={styles.container}>
      <div className={styles.navbar}>
        {" "}
        <div className={styles.navbarcrypto}>
          {navbarcrypto.map((y, index) => (
            <div
              className={styles.navbarbutton}
              key={index}
              onClick={() => setColor(index)}
              style={
                color == index
                  ? {
                      color: "rgb(54, 54, 153)",
                      borderBottom: "3px solid rgb(54, 54, 153)",
                    }
                  : { color: "white" }
              }
            >
              {y.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
