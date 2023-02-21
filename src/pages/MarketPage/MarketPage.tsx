import React, { useContext, useEffect, useState, ChangeEvent } from "react";
import styles from "./MarketPage.module.css";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import Crypto from "../../components/MarketItem/MarketItem";
import Input from "../../components/Input/Input";
import Loupe from "../../assets/icons/Loupe";
import Filter from "../../assets/icons/Filter";
import Market1 from "../../assets/icons/Market1";
import Market2 from "../../assets/icons/Market2";
import Market3 from "../../assets/icons/Market3";
import DownArrow from "../../assets/icons/DownArrow";
import TriangleUp from "../../assets/icons/TriangleUp";
import Pagination from "../../components/Pagination";
import Stock from "../../components/Stock/Stock";
import RightArrow from "../../assets/icons/RightArrow";
import axios from "axios";
import MarketList from "../../components/MarketList/MarketList";

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
  image?: JSX.Element;
};
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
export default function MarketPage() {
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
  const [data, setData] = useState<CryptoItemType[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      console.log(response.data);

      setData(response.data);
    }
    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const lastostIndex = currentPage * postPerPage;
  const firstPostIndex = lastostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastostIndex);
  const [value, setValue] = useState("");

  const [color, setColor] = useState(0);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Layout>
      <div className={styles.Market}>
        <MarketList
          howManyToShowPerPage={10}
          customStyles={{ width: "70%" }}
          cryptoCoins={data}
          howManyDetails={5}
          ElementToRenderInList={Crypto}
          showPagination
        ></MarketList>
        {/* <div className={styles.part1}>
          <div className={styles.linia1}>
            <div className={styles.tytul}>
              <span className={styles.title}>Market Coins{<Stock />}</span>
              <p>jakis bardzo madry tekst ut bedzie</p>
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
                  // counter={index + 1 + (currentPage - 1) * postPerPage}
                  icon={x.image}
                  name={x.name}
                  shortname={x.symbol}
                  price={x.current_price}
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
              {postPerPage * currentPage > data.length
                ? cryptolist.length
                : postPerPage * currentPage}{" "}
              of {data.length}
            </div>
          </div>
        </div> */}
        {/* <div className={styles.part2}>
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
          <div className={styles.sortowanie3}>
            {sortcrypto.map((y, index) => (
              <div className={styles.sortbutton} key={index}>
                {y.name}
                {<TriangleUp fill="white" height="10px" />}
              </div>
            ))}
          </div>
          <div className={styles.cryptocontainer2}>
            {currentPost.map((x, index) =>
              x.name.toLowerCase().includes(value.toLowerCase()) ? (
                <></> // <Crypto
              ) : (
                //   // counter={index + 1 + (currentPage - 1) * postPerPage}
                //   // icon={x.image}
                //   name={x.name}
                //   shortname={x.symbol}
                //   price={x.current_price}
                //   key={index}
                // />
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
              {postPerPage * currentPage > data.length
                ? cryptolist.length
                : postPerPage * currentPage}{" "}
              of {data.length}
            </div>
          </div>

          <div className={styles.watchlist}>
            Watchlist {<RightArrow width="17px" fill="white" />}
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
              <></>
              // <Crypto
              //   counter={index + 1 + (currentPage - 1) * postPerPage}
              //   name={x.name}
              //   shortname={x.symbol}
              //   price={x.current_price}
              //   key={index}
              // />
            ))}
          </div>
        </div> */}
      </div>
    </Layout>
  );
}