import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./CryptoItemPage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Plot from "react-plotly.js";
import DownArrow from "../../assets/icons/DownArrow";
import TrendingDown from "../../assets/icons/TrendingDown";
import TrendingUp from "../../assets/icons/TrendingUp";
import Info from "../../assets/icons/Info";
import UpDown from "../../assets/icons/UpDown";

import Star from "../../assets/icons/Star";
export default function CryptoItemPage() {
  interface CryptoItemType {
    id: string;
    name: string;
    price_change_24h: number;
    symbol: string;

    image?: { small: string };

    market_data: {
      current_price: { usd: number };
      high_24h: { usd: number };
      low_24h: { usd: number };
      market_cap_rank: number;
      price_change_24h: number;
    };
  }

  const { id } = useParams();
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const high = 1000;
  const low = 500;

  const price_change_percentage_24h: number = -1;
  const fav = false;

  const [high_24h, setHigh_24h] = useState(10);
  const [low_24h, setLow_24h] = useState(10);
  const [current_price, SetCurrent_price] = useState(10);
  const [market_cup_rank, setMarket_cap_rank] = useState(10);

  useEffect(() => {
    const fetchHistoricData = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`
      );
      console.log(data);
      setHistoricData(data.prices);
    };
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [data2, setData2] = useState<CryptoItemType | undefined>(undefined);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      if (
        data2?.market_data?.high_24h?.usd &&
        data2?.market_data?.low_24h?.usd &&
        data2?.market_data?.current_price.usd
      ) {
        const lineIndicator =
          (data2?.market_data?.current_price.usd -
            data2?.market_data?.low_24h?.usd) /
          (data2?.market_data?.high_24h?.usd -
            data2?.market_data?.low_24h?.usd);
      }
      console.log(response.data);
      setData2(response.data);
      console.log(data2);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.overall}>
      <div className={styles.container}>
        <div className={styles.cryptoTitleContainer}>
          <div className={styles.widthSet}>
            <div className={styles.marketStats}>Market stats </div>
            <div className={styles.partdivide}>
              <div className={styles.part1}>
                <div className={styles.cryptoName}>
                  <div className={styles.symbolName}>
                    <div>
                      <img src={data2?.image?.small}></img>
                    </div>
                    <div className={styles.querySymbolName}>
                      <div>{data2 && data2.name}</div>
                      <div
                        className={styles.symbol}
                        style={{ color: "color: rgb(54, 54, 153)" }}
                      >
                        {data2?.symbol}
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
                    Rank #{data2?.market_data?.market_cap_rank}
                  </div>
                  <div className={styles.cryptoDetail}>Coin</div>
                  <div className={styles.cryptoDetail}>On 1 watchlists </div>
                </div>
              </div>
              <div className={styles.part2}>
                <div className={styles.priceContainer}>
                  <div className={styles.price}>
                    {data2?.market_data?.current_price.usd}{" "}
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
                    {data2 && data2.name} Price
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
                        width: `${
                          (data2?.market_data?.high_24h?.usd &&
                          data2?.market_data?.low_24h?.usd &&
                          data2?.market_data?.current_price.usd
                            ? (data2?.market_data?.current_price.usd -
                                data2?.market_data?.low_24h?.usd) /
                              (data2?.market_data?.high_24h?.usd -
                                data2?.market_data?.low_24h?.usd)
                            : 40) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <div className={styles.underLinePrices}>
                    <div className={styles.lowPrice} style={{ color: "gray" }}>
                      Low: {data2?.market_data?.low_24h?.usd}
                    </div>
                    <div className={styles.highPrice} style={{ color: "gray" }}>
                      High: {data2?.market_data?.high_24h?.usd}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.components}>Components will be here</div>
          </div>
        </div>
        <div className={styles.graph} style={{ width: "100%" }}>
          <>
            {historicData ? (
              <Plot
                data={[
                  {
                    x: historicData.map((item: any) => {
                      const date = new Date(item[0]);
                      return date;
                    }),
                    y: historicData.map((item: any) => {
                      return item[1];
                    }),
                    type: "scatter",
                    mode: "lines+markers",
                    marker: { color: "red" },
                  },
                ]}
                layout={{
                  width: 1000,
                  height: 1000,
                  title: `A ${data2 && data2.name} chart`,
                }}
              />
            ) : null}
          </>
        </div>
      </div>
    </div>
  );
}
