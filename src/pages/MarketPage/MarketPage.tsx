import React, { useEffect, useState, ChangeEvent } from "react";
import styles from "./MarketPage.module.css";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import Loupe from "../../assets/icons/Loupe";
import Filter from "../../assets/icons/Filter";
import Market1 from "../../assets/icons/Market1";
import Market2 from "../../assets/icons/Market2";
import Market3 from "../../assets/icons/Market3";
import DownArrow from "../../assets/icons/DownArrow";
import axios from "axios";
import MarketList from "../../components/MarketList/MarketList";
import MarketItem from "../../components/Marketitem/Marketitem";
import MoreVertical from "../../assets/icons/MoreVertical";

interface CryptoItemType {
  id: string;
  name: string;
  price_change_24h: number;
  symbol: string;
  current_price: number;
  image?: string;
}

const button = [
  { name: "Category" },
  { name: "Algorithm" },
  { name: "Platform" },
  { name: "Industry" },
];

export default function MarketPage() {
  const [data, setData] = useState<CryptoItemType[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );

      setData(response.data);
    }
    fetchData();
  }, []);

  const [filterValue, setFilterValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  const TitleElement = (
    <div className={styles.setborder} style={{ width: "100%" }}>
      <div className={styles.linia1}>
        <div className={styles.tytul}>
          <span className={styles.title}>Market Coins</span>
          <p>Check price of crypto coins</p>
        </div>
        <div className={styles.inputdiv}>
          {<Loupe width="24px" fill="gray" />}
          <input
            className={styles.inputtitle}
            placeholder="Search Coin Name"
            onChange={onChange}
            type="text"
            value={filterValue}
          />
        </div>
        <div className={styles.filter}>
          <Button>{<Filter fill="none" width="25px" />}Filter</Button>
        </div>

        <div className={styles.container}>
          <MoreVertical fill="grey" />
        </div>
      </div>
      <div className={styles.overallbuttons}>
        <div className={styles.przyciski}>
          {button.map((x, index) => (
            <Button
              key={index}
              flex
              style={{
                color: "grey",
                background: "black",
              }}
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
    </div>
  );

  const SortElement = [
    { name: "Coin Name" },
    { name: "Coin Price" },
    { name: "24%" },
    { name: "24h High" },
    { name: "24h Low" },
  ];

  return (
    <Layout>
      <div className={styles.Market}>
        <div className={styles.leftContainer}>
          <MarketList
            howManyToShowPerPage={10}
            className={styles.MarketList}
            cryptoCoins={data
              .filter((elem) =>
                elem.name.toLowerCase().includes(filterValue.toLowerCase())
              )
              .map((item, index) => {
                return {
                  index: index + 1,
                  ...item,
                };
              })}
            howManyDetails={5}
            ElementToRenderInList={MarketItem}
            showPagination
            columnsTitleElements={SortElement}
            titleElement={TitleElement}
          ></MarketList>
        </div>
      </div>
    </Layout>
  );
}
