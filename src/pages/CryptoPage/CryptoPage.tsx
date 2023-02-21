import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./CryptoPage.module.css";
import DownArrow from "../../assets/icons/DownArrow";
import Info from "../../assets/icons/Info";
import UpDown from "../../assets/icons/UpDown";
import TrendingDown from "../../assets/icons/TrendingDown";
import TrendingUp from "../../assets/icons/TrendingUp";
import Star from "../../assets/icons/Star";
export default function CryptoPage() {
  const high = 1000;
  const low = 500;
  const current_price = 700;
  const lineIndicator = (current_price - low) / (high - low);
  const price_change_percentage_24h: number = -1;
  const fav = false;
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.cryptoTitleContainer}>
          <div className={styles.widthSet}>
            <div className={styles.marketStats}>Market stats </div>
            <div className={styles.partdivide}>
              <div className={styles.part1}>
                <div className={styles.cryptoName}>
                  <div className={styles.symbolName}>
                    <div>B</div>
                    <div className={styles.querySymbolName}>
                      <div>Bitcoin</div>
                      <div
                        className={styles.symbol}
                        style={{ color: "color: rgb(54, 54, 153)" }}
                      >
                        BTC
                      </div>
                    </div>
                  </div>
                  <div style={{ height: "30px", backgroundColor: "black" }}>
                    {<Star fill={fav ? "color: rgb(54, 54, 153)" : "gray"} />}
                  </div>
                </div>
                <div className={styles.cryptoDetailsContainer}>
                  <div
                    className={styles.cryptoDetail}
                    style={{ backgroundColor: "black", borderRadius: "5px" }}
                  >
                    Rank #1
                  </div>
                  <div className={styles.cryptoDetail}>Coin</div>
                  <div className={styles.cryptoDetail}>On 1 watchlists </div>
                </div>
              </div>
              <div className={styles.part2}>
                <div className={styles.priceContainer}>
                  <div className={styles.price}>
                    12345zl{" "}
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
                            fill={
                              price_change_percentage_24h > 0 ? "green" : "grey"
                            }
                          />
                        ) : (
                          <TrendingDown fill="red" />
                        )}
                      </div>
                    )}
                  </div>
                  <div className={styles.priceInfo}>
                    Bitcoin Price
                    {<Info fill="gray" width="20px" height="20px" />}
                  </div>
                </div>
                <div className={styles.highLowContainer}>
                  <div className={styles.highLowPrice24h}>
                    <div
                      className={styles.highlowprice}
                      style={{ color: "gray" }}
                    >
                      {<UpDown width="20px" fill="white" />}High/Low Price
                    </div>
                    <div className={styles.timeFrame} style={{ color: "gray" }}>
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
                    <div className={styles.lowPrice} style={{ color: "gray" }}>
                      Low: 123456zl
                    </div>
                    <div className={styles.highPrice} style={{ color: "gray" }}>
                      High: 696969zl
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.components}>Components will be here</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
