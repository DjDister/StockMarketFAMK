import React, { ChangeEvent } from "react";
import styles from "./CryptoList.module.css";
import Stock from "../Stock/Stock";
import Loupe from "../../assets/icons/Loupe";
import DownArrow from "../../assets/icons/DownArrow";
import Filter from "../../assets/icons/Filter";
import Market1 from "../../assets/icons/Market1";
import Market2 from "../../assets/icons/Market2";
import Market3 from "../../assets/icons/Market3";
import TriangleUp from "../../assets/icons/TriangleUp";
import Button from "../Button/Button";
import Pagination from "../Pagination";
import { useState } from "react";
import Crypto from "../Marketitem/Marketitem";
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
const cryptolist: cryptoType[] = [
  { name: "Bitcoin", shortname: "BTC", price: 20000, counter: "" },
  { name: "Etherium", shortname: "ETH", price: 1500, counter: "" },
  { name: "Skale", shortname: "SKL", price: 0.05, counter: "" },
  { name: "Atom", shortname: "ATM", price: 14, counter: "" },
  { name: "Bitcoin", shortname: "BTC", price: 20000, counter: "" },
  { name: "Etherium2", shortname: "ETH", price: 1500, counter: "" },
  { name: "Skale", shortname: "SKL", price: 0.05, counter: "" },
  { name: "Atom", shortname: "ATM", price: 14, counter: "" },
  { name: "Bitcoin", shortname: "BTC", price: 20000, counter: "" },
  { name: "Etherium3", shortname: "ETH", price: 1500, counter: "" },
  { name: "Skale", shortname: "SKL", price: 0.05, counter: "" },
  { name: "Atom", shortname: "ATM", price: 14, counter: "" },
  { name: "Bitcoin", shortname: "BTC", price: 20000, counter: "" },
  { name: "Etherium4", shortname: "ETH", price: 1500, counter: "" },
  { name: "Skale", shortname: "SKL", price: 0.05, counter: "" },
  { name: "Atom", shortname: "ATM", price: 14, counter: "" },
];

type cryptoType = {
  name: string;
  shortname: string;
  price: number;
  counter: string;
};
const [isSortedByName, setIsSortedByName] = useState(false);
const [isSortedByPrice, setIsSortedByPrice] = useState(false);

const [sortedArr, setSortedArr] = useState<cryptoType[]>(cryptolist);
export default function CryptoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastostIndex = currentPage * postPerPage;
  const firstPostIndex = lastostIndex - postPerPage;
  const currentPost = sortedArr.slice(firstPostIndex, lastostIndex);

  const [value, setValue] = useState("");

  interface eventy {
    event: string;
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.part1}>
      <div className={styles.linia1}>
        <div className={styles.tytul}>
          <span className={styles.title}>Market Coins{<Stock />}</span>
        </div>
        <div className={styles.inputdiv}>
          {<Loupe width="24px" fill="gray" />}
          <input
            className={styles.inputtitle}
            placeholder="Search Coin Name"
            onChange={onChange}
            type="text"
            value={value}
          />
        </div>
        <div className={styles.filter}>
          <Button>{<Filter fill="none" width="25px" />}Filter</Button>
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
          {button.map((x, index) => (
            <Button
              key={index}
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
            key={index}
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
        {sortcryptoweb.map((y, index) => (
          <div className={styles.sortbutton} key={index}>
            {y.name}
            {<TriangleUp fill="white" height="10px" />}
          </div>
        ))}
      </div>

      <div className={styles.cryptocontainer}>
        {currentPost.map((x, index) =>
          x.name.toLowerCase().includes(value.toLowerCase()) ? (
            <Crypto
              counter={index + 1 + (currentPage - 1) * postPerPage}
              name={x.name}
              shortname={x.shortname}
              price={x.price}
              key={index}
            />
          ) : (
            <div></div>
          )
        )}

        <div className={styles.buysellbutton}>
          <Button
            className={styles.buyselltekst}
            style={{ color: "white", textAlign: "center" }}
          >
            Buy & Sell
          </Button>
        </div>
      </div>
      <div className={styles.last}>
        <div className={styles.pagination}>
          <Pagination
            totalPosts={cryptolist.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <div style={{ color: "gray" }} className={styles.numberof}>
          {1 + (currentPage - 1) * postPerPage}-
          {postPerPage * currentPage > cryptolist.length
            ? cryptolist.length
            : postPerPage * currentPage}{" "}
          of {cryptolist.length}
        </div>
      </div>
    </div>
  );
}
