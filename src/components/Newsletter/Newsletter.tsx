import React from "react";
import Bitcoin2 from "../../assets/icons/Bitcoin2";
import Ethereum from "../../assets/icons/Ethereum";
import styles from "./Newsletter.module.css";

export default function Newsletter({ style }: { style?: React.CSSProperties }) {
  return (
    <div className={styles.Newsletter} style={style}>
      <div className={styles.bitcoinIcon}>
        <Bitcoin2 width="250px" height="250px" />
      </div>
      <div className={styles.ethereumIcon}>
        <Ethereum width="250px" height="250px" />
      </div>

      <div className={styles.miningTextBox}>
        <div className={styles.mining}>Start mining now</div>
        <div className={styles.miningText}>
          Join now to get the latest news and start mining now
        </div>
      </div>

      <div className={styles.secondBox}>
        <input placeholder="Enter your email" className={styles.miningInput} />
        <div className={styles.miningButton}>Subscribe</div>
      </div>
    </div>
  );
}
