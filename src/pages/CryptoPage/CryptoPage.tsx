import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./CryptoPage.module.css";
import DownArrow from "../../assets/icons/DownArrow";
import Info from "../../assets/icons/Info";
export default function CryptoPage() {
  const high = 1000;
  const low = 500;
  const current_price = 700;
  const lineIndicator = (current_price - low) / (high - low);
  console.log(lineIndicator);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.cryptoTitleContainer}>
          <div className={styles.widthSet}>
            <div className={styles.marketStats}>Market stats 12345</div>
            <div className={styles.cryptoName}>
              <div className={styles.symbolName}>
                <div>B</div>
                <div>
                  <div>Bitcoin</div>
                  <div
                    className={styles.symbol}
                    style={{ backgroundColor: "black", color: "blue" }}
                  >
                    Btc
                  </div>
                </div>
              </div>
              <div>*</div>
            </div>
            <div className={styles.cryptoDetailsContainer}>
              <div className={styles.cryptoDetail}>Rank #1</div>
              <div className={styles.cryptoDetail}>Coin</div>
              <div className={styles.cryptoDetail}>On 1 watchlists </div>
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.price}>12345zl +2% up</div>
              <div className={styles.priceInfo}>
                Bitcoin Price{<Info fill="gray" width="20px" height="20px" />}
              </div>
            </div>
            <div className={styles.highLowContainer}>
              <div className={styles.highLowPrice24h}>
                <div>High/Low Price</div>
                <div className={styles.timeFrame}>
                  24h{<DownArrow fill="white" height="20px" width="20px" />}
                </div>
              </div>
              <div className={styles.line}>
                <div
                  className={styles.blueLine}
                  style={{
                    width: `${lineIndicator * 100}%`,
                  }}
                ></div>
              </div>
              <div className={styles.underLinePrices}>
                <div className={styles.lowPrice}>Low: 123456zl</div>
                <div className={styles.highPrice}>High: 696969zl</div>
              </div>
            </div>
            <div className={styles.components}>Components will be here</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
