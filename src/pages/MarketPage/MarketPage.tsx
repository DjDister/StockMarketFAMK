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
          <p>jakis bardzo madry tekst ut bedzie</p>
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
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
        </div>
      </div>
      <div className={styles.overallbuttons}>
        <div className={styles.przyciski}>
          {button.map((x, index) => (
            <Button key={index} flex className={styles.przycisk}>
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
