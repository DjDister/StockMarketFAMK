import React, { useContext, useEffect } from "react";
import styles from "./MarketPage.module.css";

import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import Crypto from "../../components/Marketitem/Marketitem";
import Input from "../../components/Input/Input";
import Loupe from "../../assets/icons/Loupe";
import Filter from "../../assets/icons/Filter";
import Market1 from "../../assets/icons/Market1";
import Market2 from "../../assets/icons/Market2";
import Market3 from "../../assets/icons/Market3";
import DownArrow from "../../assets/icons/DownArrow";
import TriangleUp from "../../assets/icons/TriangleUp";
const button = [
  { name: "Category" },
  { name: "Algorithm" },
  { name: "Platform" },
  { name: "Industry" },
];

const sortcrypto = [
  { name: "Coin Name " },
  { name: "Chart" },
  { name: "Coin Price" },
];
const sortcryptoweb = [
  { name: "#" },
  { name: "Coin Name " },
  { name: "Coin Price" },
  { name: "24%" },
  { name: "24h High" },
  { name: "24h Low" },
  { name: "Chart" },
];
const navbarcrypto = [
  { name: "Top Gainers" },
  { name: "Top Loses" },
  { name: "New in market" },
];
const i = 1;

type cryptoType = {
  name: string;
  shortname: string;
  price: number;
  counter: string;
};

export default function MarketPage() {
  const cryptolist: cryptoType[] = [
    { name: "Bitcoin", shortname: "BTC", price: 20000, counter: "" },
    { name: "Etherium", shortname: "ETH", price: 1500, counter: "" },
    { name: "Skale", shortname: "SKL", price: 0.05, counter: "" },
    { name: "Atom", shortname: "ATM", price: 14, counter: "" },
  ];
  const [isSortedByName, setIsSortedByName] = useState(false);
  const [isSortedByPrice, setIsSortedByPrice] = useState(false);

  const [sortedArr, setSortedArr] = useState<cryptoType[]>(cryptolist);

  // useEffect(() => {
  //   const socket = new WebSocket("wss://ws.coinapi.io/v1/");
  //   socket.addEventListener("open", (event) => {
  //     console.log("WebSocket connection opened!");
  //     // Send an authentication message to the server after the connection is opened
  //     const authMessage = {
  //       type: "hello",
  //       apikey: API_KEY,
  //       heartbeat: false,
  //       subscribe_data_type: ["trade"],
  //       subscribe_filter_symbol_id: ["BITSTAMP_SPOT_BTC_USD"],
  //     };
  //     socket.send(JSON.stringify(authMessage));
  //   });

  //   socket.addEventListener("message", (event) => {
  //     console.log(event.data);
  //     // Handle incoming messages here
  //   });

  //   socket.addEventListener("error", (event) => {
  //     console.error("WebSocket error:", event);
  //   });

  //   socket.addEventListener("close", (event) => {
  //     console.log("WebSocket connection closed!");
  //   });

  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  return (
    <Layout>
      <div className={styles.Market}>
        <div className={styles.part1}>
          <div className={styles.linia1}>
            <div className={styles.tytul}>
              <span className={styles.title}>Market Coins</span>
            </div>
            <div className={styles.inputdiv}>
              {<Loupe width="24px" fill="gray" />}
              <Input
                className={styles.inputtitle}
                placeholder="Search Coin Name"
                onChange={() => null}
              />
            </div>
            <div className={styles.filter}>
              {<Filter fill="none" width="25px" />}Filter
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
          <div className={styles.overallbuttons}>
            <div className={styles.przyciski}>
              {button.map((x) => (
                <Button
                  flex
                  className={styles.przycisk}
                  onClick={() => <div></div>}
                >
                  {x.name}
                  {<DownArrow />}
                </Button>
              ))}
            </div>
            <div className={styles.przyciski2}>
              <Button className={styles.show20}>
                Show 20 <DownArrow />
              </Button>
              {<Market1 fill="white" height="38px" />}
              {<Market2 fill="white" />}
              {<Market3 fill="white" />}
            </div>
          </div>
          <div className={styles.sortowanie}>
            {sortcrypto.map((y, index) => (
              <div
                className={styles.sortbutton}
                onClick={() => {
                  if (index === 0) {
                    setIsSortedByPrice(false);
                    setIsSortedByName(!isSortedByName);
                    setSortedArr(
                      [...sortedArr].sort((a, b) =>
                        isSortedByName
                          ? b.name.localeCompare(a.name)
                          : a.name.localeCompare(b.name)
                      )
                    );
                  }
                  if (index === 2) {
                    setIsSortedByName(false);
                    setIsSortedByPrice(!isSortedByPrice);
                    setSortedArr(
                      [...sortedArr].sort((a, b) =>
                        isSortedByPrice ? a.price - b.price : b.price - a.price
                      )
                    );
                  }
                }}
              >
                {y.name}
                {<TriangleUp fill="white" height="10px" />}
              </div>
            ))}
          </div>
          <div className={styles.sortowanie2}>
            {sortcryptoweb.map((y) => (
              <div className={styles.sortbutton}>
                {y.name}
                {<TriangleUp fill="white" height="10px" />}
              </div>
            ))}
          </div>

          <div className={styles.cryptocontainer}>
            {sortedArr.map((x, index) => (
              <Crypto
                counter={index + 1}
                name={x.name}
                shortname={x.shortname}
                price={x.price}
              />
            ))}

            <div className={styles.buysellbutton}>
              <Button className={styles.buyselltekst}>Buy & Sell</Button>
            </div>
          </div>
          <div className={styles.last}>
            <div>assets</div>
            <div> 1... 2... 3...4</div>
          </div>
        </div>
        <div className={styles.part2}>
          <div className={styles.navbar}>
            {" "}
            <div className={styles.navbarcrypto}>
              {navbarcrypto.map((y) => (
                <div className={styles.navbarbutton}>{y.name}</div>
              ))}
            </div>
          </div>
          <div className={styles.sortowanie3}>
            {sortcrypto.map((y) => (
              <div className={styles.sortbutton}>
                {y.name}
                {<TriangleUp fill="white" height="10px" />}
              </div>
            ))}
          </div>
          <div className={styles.cryptocontainer}>
            {cryptolist.map((x) => (
              <Crypto name={x.name} shortname={x.shortname} price={x.price} />
            ))}
          </div>
          <div className={styles.last}>
            <div>assets</div>
            <div> 1... 2... 3...4</div>
          </div>

          <div className={styles.watchlist}>Watchlist</div>
          <div className={styles.sortowanie3}>
            {sortcrypto.map((y) => (
              <div className={styles.sortbutton}>
                {y.name}
                {<TriangleUp fill="white" height="10px" />}
              </div>
            ))}
          </div>
          <div className={styles.cryptocontainer}>
            {cryptolist.map((x) => (
              <Crypto name={x.name} shortname={x.shortname} price={x.price} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
