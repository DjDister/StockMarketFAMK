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
import db from "../../../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAppSelector } from "../../hooks/reduxHooks";
import Star from "../../assets/icons/Star";
import { async } from "@firebase/util";
import { update } from "plotly.js";
import Portfolio from "../../assets/icons/Portfolio";
import { updateDoc } from "firebase/firestore";
import { arrayUnion } from "firebase/firestore";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import Dollar from "../../assets/icons/Dollar";
import Flag from "../../assets/icons/Flag";
import Lightning from "../../assets/icons/Lightning";
import Circle from "../../assets/icons/Circle";
import EmptyCircle from "../../assets/icons/EmptyCircle";
import Card from "../../assets/icons/Wallet";
import Clock from "../../assets/icons/Clock";
import HeartBeat from "../../assets/icons/HeartBeat";

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
      price_change_percentage_24h: number;
    };
  }

  const { id } = useParams();
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const high = 1000;
  const low = 500;

  const price_change_percentage_24h: number = -1;
  const fav = false;

  const [buySellButton, setBuySellButton] = useState(true);
  const [blue, setBlue] = useState("blue");
  const [data2, setData2] = useState<CryptoItemType | undefined>(undefined);
  const [inputValue, setInputValue] = useState<string>("0");
  const [wallet, setWallet] = useState<{
    totalBalanceDollars: string;
    transactionHistory: {
      amount: string;
      date: string;
      status: string;
      type: string;
    }[];
  } | null>(null);
  const user = useAppSelector((state) => state.profile);

  //console.log(user);
  const handleButtonClick = async () => {
    const inputValueToSave = inputValue;

    if (inputValueToSave !== "") {
      console.log(`Input value "${inputValueToSave}" saved.`);
    }

    if (
      inputValue !== "" &&
      data2?.market_data.current_price?.usd &&
      inputValue
    ) {
      const toDataBase = {
        amount: parseInt(inputValue) / data2?.market_data.current_price?.usd,
        boughtPrice: data2.market_data.current_price.usd,
        name: data2.name,
        symbol: data2.symbol,
      };
      await updateDoc(doc(db, "users", user.userId), {
        portfolio: arrayUnion(toDataBase),
      });
      const walletState =
        parseInt(wallet ? wallet.totalBalanceDollars : "") -
        parseInt(inputValue);
      console.log(walletState);
      await updateDoc(doc(db, "users", user.userId), {
        wallet: {
          totalBalanceDollars: walletState.toString(),
          transactionHistory: [...(wallet ? wallet.transactionHistory : [])],
        },
      });
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const fetchHistoricData = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`
      );
      console.log(data);
      setHistoricData(data.prices);
      const dataFromDb = await getDoc(doc(db, "users", user.userId));
      console.log(dataFromDb.data());
      if (dataFromDb.exists()) {
        setWallet(dataFromDb.data().wallet);
      }
      //console.log(wallet);
    };
    fetchHistoricData();

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
      //console.log(response.data);
      setData2(response.data);
      //console.log(data2);
    }
    fetchData();
  }, []);

  if (Number.isNaN(inputValue)) {
    setInputValue("");
  }

  console.log(buySellButton);
  // console.log(wallet);
  return (
    <Layout>
      <div className={styles.overall}>
        <div className={styles.container}>
          <div className={styles.part1}>
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
                            style={{
                              color: "#5266fe",
                              backgroundColor: "black",
                            }}
                          >
                            {data2?.symbol.toLocaleUpperCase()}
                          </div>
                        </div>
                      </div>
                      <div style={{ height: "30px", backgroundColor: "black" }}>
                        {<Star fill={fav ? "#5266fe" : "gray"} />}
                      </div>
                    </div>
                    <div className={styles.cryptoDetailsContainer}>
                      <div
                        className={styles.cryptoDetail}
                        style={{
                          backgroundColor: "black",
                          borderRadius: "5px",
                        }}
                      >
                        Rank #{data2?.market_data?.market_cap_rank}
                      </div>
                      <div className={styles.cryptoDetail}>Coin</div>
                      <div className={styles.cryptoDetail}>
                        On 1 watchlists{" "}
                      </div>
                    </div>
                  </div>
                  <div className={styles.part2}>
                    <div className={styles.priceContainer}>
                      <div className={styles.price}>
                        {data2?.market_data?.current_price.usd}{" "}
                        {data2?.market_data?.price_change_percentage_24h && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color:
                                data2?.market_data
                                  ?.price_change_percentage_24h > 0
                                  ? "#039763"
                                  : data2?.market_data
                                      ?.price_change_percentage_24h === 0
                                  ? "grey"
                                  : "red",
                            }}
                          >
                            {data2?.market_data?.price_change_percentage_24h}%
                            {data2?.market_data?.price_change_percentage_24h >=
                            0 ? (
                              <TrendingUp
                                fill={
                                  price_change_percentage_24h > 0
                                    ? "green"
                                    : "grey"
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
                        <div
                          className={styles.timeFrame}
                          style={{ color: "gray" }}
                        >
                          24h
                          {
                            <DownArrow
                              fill="white"
                              height="20px"
                              width="20px"
                            />
                          }
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
                        <div
                          className={styles.lowPrice}
                          style={{ color: "gray" }}
                        >
                          Low: {data2?.market_data?.low_24h?.usd}
                        </div>
                        <div
                          className={styles.highPrice}
                          style={{ color: "gray" }}
                        >
                          High: {data2?.market_data?.high_24h?.usd}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.components}>
                  <DetailsCard
                    customStyle={{
                      backgroundColor: "black",
                      borderRadius: "8px",
                      width: "20%",
                    }}
                    labelIcon={<HeartBeat fill="blue" height="16px" />}
                    labelText={"Market Cap"}
                    amount={"$12983221"}
                    returnIndicator={
                      data2?.market_data.price_change_percentage_24h
                    }
                  />{" "}
                  <DetailsCard
                    customStyle={{
                      backgroundColor: "black",
                      borderRadius: "8px",
                      width: "20%",
                    }}
                    labelIcon={<Info fill="blue" height="16px" />}
                    labelText={"Full Diluted"}
                    amount={"$33742049"}
                    returnIndicator={
                      data2?.market_data.price_change_percentage_24h
                    }
                  />{" "}
                  <DetailsCard
                    customStyle={{
                      backgroundColor: "black",
                      borderRadius: "8px",
                      width: "20%",
                    }}
                    labelIcon={<Clock fill="blue" height="16px" />}
                    labelText={"24 Volume"}
                    amount={"$14739129"}
                    returnIndicator={
                      data2?.market_data.price_change_percentage_24h
                    }
                  />{" "}
                  <DetailsCard
                    customStyle={{
                      backgroundColor: "black",
                      borderRadius: "8px",
                      width: "20%",
                    }}
                    labelIcon={<Info fill="blue" height="16px" />}
                    labelText={"Circulating Supply"}
                    amount={"$8463821"}
                    returnIndicator={
                      data2?.market_data.price_change_percentage_24h
                    }
                  />{" "}
                </div>
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
                      width: 500,
                      height: 500,
                      title: `A ${data2 && data2.name} chart`,
                    }}
                  />
                ) : null}
              </>
            </div>
          </div>
          <div className={styles.part3}>
            <div
              className={styles.buyselldiv}
              style={{
                display: "flex",
                alignItems: "center",
                color: "gray",
                borderBottom: "1px solid gray",
              }}
            >
              <div
                style={{
                  fontSize: "1.4rem",
                  display: "flex",
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  color: buySellButton ? "#5266fe" : "gray",
                  borderBottom: "3px solid",
                }}
                onClick={() => setBuySellButton(true)}
              >
                Buy {data2?.symbol.toUpperCase()}
              </div>
              <div
                style={{
                  fontSize: "1.4rem",
                  display: "flex",
                  alignItems: "center",
                  width: "50%",
                  justifyContent: "center",
                  color: buySellButton ? "gray" : "#5266fe",
                  borderBottom: "3px solid",
                }}
                onClick={() => setBuySellButton(false)}
              >
                Sell {data2?.symbol.toUpperCase()}
              </div>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "30px" }}
            >
              <div
                className={styles.marketlimitdiv}
                style={{ border: "1px solid gray" }}
              >
                {" "}
                <EmptyCircle height="25px" fill="gray" />
                <Flag height="25px" fill="gray" />
                Limit
              </div>
              <div
                className={styles.marketlimitdiv}
                style={{ color: "blue", backgroundColor: "black" }}
              >
                <Circle height="25px" fill="blue" />
                <Lightning height="20px" fill="blue" />
                Market
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                gap: "100px",
                marginTop: "15px",
              }}
            >
              <div
                style={{
                  height: "30px",
                  display: "flex",
                  gap: "15px",
                }}
              >
                <Card fill="white" />
                {"$"}
                {data2?.market_data.current_price.usd}
              </div>
              <div
                style={{
                  height: "30px",
                  display: "flex",

                  gap: "15px",
                }}
              >
                <img
                  style={{ marginBottom: "4px" }}
                  src={data2?.image?.small}
                ></img>
                {"$"}
                {data2?.market_data.current_price.usd}
              </div>
            </div>

            <div className={styles.inputbuttondiv}>
              <div className={styles.inputdiv}>
                <div>
                  <div style={{ color: "gray" }}>
                    Quantity of {data2?.symbol.toLocaleUpperCase()}
                  </div>
                  <div style={{ color: "gray" }}>
                    {data2?.market_data.current_price.usd &&
                    !isNaN(parseInt(inputValue))
                      ? parseInt(inputValue) /
                        data2?.market_data.current_price.usd
                      : "|0$"}{" "}
                  </div>
                </div>
                <div
                  style={{
                    height: "40px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <img
                    src={data2?.image?.small}
                    style={{ marginTop: "6px", marginBottom: "1px" }}
                  ></img>
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "2px",
                    }}
                  >
                    {data2?.symbol.toLocaleUpperCase()}
                    {<DownArrow />}
                  </div>
                </div>
              </div>
              <div className={styles.inputdiv}>
                <div>
                  <div style={{ color: "gray" }}>
                    {buySellButton ? "Buy " : "Sell "} For (USD)
                  </div>
                  <div>
                    <input
                      placeholder="| 0$  "
                      className={styles.inputstyle}
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div
                  style={{
                    height: "40px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "2px",
                  }}
                >
                  <Dollar />
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "2px",
                    }}
                  >
                    USD
                    {<DownArrow />}
                  </div>
                </div>
              </div>

              <div
                style={{ color: "gray", display: "flex", alignItems: "center" }}
              >
                Without fee{<Dollar />}
              </div>
              <button
                className={styles.buttondiv}
                placeholder="buy"
                style={{ marginBottom: "20px" }}
                onClick={handleButtonClick}
              >
                {buySellButton
                  ? `Buy ${data2?.symbol.toUpperCase()}`
                  : `Sell ${data2?.symbol.toUpperCase()}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
