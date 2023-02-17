import React from "react";
import styles from "./MarketPage.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
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
import Pagination from "../../components/Pagination";
let amount = 0;

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

const cryptolist = [
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

export default function MarketPage() {
  const [sortedArr, setSortedArr] = useState(cryptolist);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastostIndex = currentPage * postPerPage;
  const firstPostIndex = lastostIndex - postPerPage;
  const currentPost = cryptolist.slice(firstPostIndex, lastostIndex);

  console.log(sortedArr);

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
                onClick={
                  (index === 0
                    ? () => {
                        setSortedArr(
                          cryptolist.sort((a, b) => {
                            if (a.name < b.name) return -1;
                            if (a.name > b.name) return 1;
                            return 0;
                          })
                        );
                        console.log(sortedArr);
                      }
                    : undefined) ||
                  (index === 2
                    ? () =>
                        setSortedArr(
                          cryptolist.sort((a, b) => a.price - b.price)
                        )
                    : undefined)
                }
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
            {currentPost.map((x, index) => (
              <Crypto
                counter={index + 1 + (currentPage - 1) * postPerPage}
                name={x.name}
                shortname={x.shortname}
                price={x.price}
                key={index}
              />
            ))}

            <div className={styles.buysellbutton}>
              <Button className={styles.buyselltekst}>Buy & Sell</Button>
            </div>
          </div>
          <div className={styles.last}>
            <div className={styles.pagination}>
              <Pagination
                totalPosts={cryptolist.length}
                postPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
            <div>
              {1 + (currentPage - 1) * postPerPage}-
              {postPerPage * currentPage > cryptolist.length
                ? cryptolist.length
                : postPerPage * currentPage}{" "}
              of {cryptolist.length}
            </div>
          </div>
        </div>
        <div className={styles.part2}>
          <div className={styles.navbar}>
            {" "}
            <div className={styles.navbarcrypto}>
              {navbarcrypto.map((y, index) => (
                <div className={styles.navbarbutton} key={index}>
                  {y.name}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sortowanie3}>
            {sortcrypto.map((y, index) => (
              <div className={styles.sortbutton} key={index}>
                {y.name}
                {<TriangleUp fill="white" height="10px" />}
              </div>
            ))}
          </div>
          <div className={styles.cryptocontainer}>
            {currentPost.map((x, index) => (
              <Crypto
                counter={index + 1 + (currentPage - 1) * postPerPage}
                name={x.name}
                shortname={x.shortname}
                price={x.price}
                key={index}
              />
            ))}
          </div>
          <div className={styles.last}>
            <div>
              <Pagination
                totalPosts={cryptolist.length}
                postPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
            <div> 1... 2... 3...4</div>
          </div>

          <div className={styles.watchlist}>Watchlist</div>
          <div className={styles.sortowanie3}>
            {sortcrypto.map((y, index) => (
              <div className={styles.sortbutton} key={index}>
                {y.name}
                {<TriangleUp fill="white" height="10px" />}
              </div>
            ))}
          </div>
          <div className={styles.cryptocontainer}>
            {currentPost.map((x, index) => (
              <Crypto
                counter={index + 1 + (currentPage - 1) * postPerPage}
                name={x.name}
                shortname={x.shortname}
                price={x.price}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
