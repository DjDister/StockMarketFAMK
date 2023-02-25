import React, { ElementType, useState, useEffect } from "react";
import styles from "./MarketList.module.css";
import TriangleUp from "../../assets/icons/TriangleUp";
import Pagination from "../Pagination";

interface MarketListProps {
  className?: string;
  customStyles?: React.CSSProperties;
  cryptoCoins?: any[];
  children?: React.ReactNode;
  howManyToShowPerPage: number;
  ElementToRenderInList: ElementType;
  howManyDetails?: number;
  showPagination?: boolean;
  columnsTitleElements?: { name: string }[];
  titleElement?: JSX.Element;
}

export default function MarketList({
  cryptoCoins,
  className,
  customStyles,
  ElementToRenderInList,
  howManyDetails,
  howManyToShowPerPage,
  showPagination,
  columnsTitleElements,
  titleElement,
}: MarketListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const coinNameElem = columnsTitleElements?.find(
    (elem) => elem.name === "Coin Name"
  );

  const [cryptoCoinsSorted, setcryptoCoinsSorted] = useState(cryptoCoins);
  const [isSortedBy, setIsSortedBy] = useState("index");
  useEffect(() => {
    setcryptoCoinsSorted(cryptoCoins);
  }, [cryptoCoins]);

  const sortArray = (prop: string) => {
    switch (prop) {
      case "Coin Price":
        {
          setcryptoCoinsSorted(
            cryptoCoins
              ?.map((x) => x)
              .sort((a, b) =>
                isSortedBy === "price"
                  ? a.current_price - b.current_price
                  : b.current_price - a.current_price
              )
          );
          isSortedBy === "price"
            ? setIsSortedBy("priceReverse")
            : setIsSortedBy("price");
        }
        break;
      case "24%":
        {
          setcryptoCoinsSorted(
            cryptoCoins
              ?.map((x) => x)
              .sort((a, b) =>
                isSortedBy === "24%"
                  ? a.price_change_percentage_24h -
                    b.price_change_percentage_24h
                  : b.price_change_percentage_24h -
                    a.price_change_percentage_24h
              )
          );
          isSortedBy === "24%"
            ? setIsSortedBy("24%Reverse")
            : setIsSortedBy("24%");
        }
        break;
      case "24h High":
        {
          setcryptoCoinsSorted(
            cryptoCoins
              ?.map((x) => x)
              .sort((a, b) =>
                isSortedBy === "24h High"
                  ? a.high_24h - b.high_24h
                  : b.high_24h - a.high_24h
              )
          );
          isSortedBy === "24h High"
            ? setIsSortedBy("24h HighReverse")
            : setIsSortedBy("24h High");
        }
        break;
      case "24h Low": {
        setcryptoCoinsSorted(
          cryptoCoins
            ?.map((x) => x)
            .sort((a, b) =>
              isSortedBy === "24h Low"
                ? a.low_24h - b.low_24h
                : b.low_24h - a.low_24h
            )
        );
        isSortedBy === "24h Low"
          ? setIsSortedBy("24h LowReverse")
          : setIsSortedBy("24h Low");
      }
    }
  };

  return (
    <div className={`${className} ${styles.container}`} style={customStyles}>
      {titleElement}
      {coinNameElem && (
        <div style={{ width: "100%", display: "flex" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              color: "gray",
              gap: "5px",
              borderBottom: "1px solid gray",
            }}
          >
            {coinNameElem.name === "Coin Name" &&
              cryptoCoins &&
              cryptoCoins[0] &&
              cryptoCoins[0].index && (
                <div
                  onClick={() => {
                    setcryptoCoinsSorted(
                      isSortedBy === "index"
                        ? [...cryptoCoins].reverse()
                        : cryptoCoins
                    );
                    isSortedBy === "index"
                      ? setIsSortedBy("indexReverse")
                      : setIsSortedBy("index");
                  }}
                  style={{
                    marginRight: 10,
                    color: "gray",
                    cursor: "pointer",
                    padding: 5,
                  }}
                  className={styles.indexTitle}
                >
                  #
                </div>
              )}
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setcryptoCoinsSorted(
                  cryptoCoins
                    ?.map((x) => x)
                    .sort((a, b) => {
                      if (a.id < b.id) {
                        return isSortedBy === "name" ? 1 : -1;
                      }
                      if (a.id > b.id) {
                        return isSortedBy === "name" ? -1 : 1;
                      }
                      return 0;
                    })
                );
                isSortedBy === "name"
                  ? setIsSortedBy("nameReverse")
                  : setIsSortedBy("name");
              }}
            >
              {coinNameElem.name}
            </div>
            {<TriangleUp fill="gray" width="10px" />}
          </div>
          <div
            className={styles.containerColumns}
            style={{
              gridTemplateColumns: `repeat(${
                howManyDetails ? howManyDetails - 1 : 10
              }, 1fr)`,
            }}
          >
            {columnsTitleElements &&
              columnsTitleElements
                .filter((elem) => !(elem.name === "Coin Name"))
                .map((element, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.columnTitle}
                      onClick={() => {
                        sortArray(element.name);
                      }}
                      style={{
                        color: "gray",
                        gap: "5px",
                        borderBottom: "1px solid gray",
                      }}
                    >
                      {element.name}
                      {<TriangleUp fill="gray" width="10px" />}
                    </div>
                  );
                })}
          </div>
        </div>
      )}

      <div className={styles.cryptoListContainer}>
        {cryptoCoinsSorted
          ?.slice(
            currentPage * howManyToShowPerPage - howManyToShowPerPage,
            currentPage * howManyToShowPerPage
          )
          .map((cryptoCoin, index) => {
            return (
              <ElementToRenderInList
                key={index}
                howManyDetails={howManyDetails}
                graph={cryptoCoin.graph ?? undefined}
                index={cryptoCoin.index}
                {...cryptoCoin}
              />
            );
          })}
      </div>
      {showPagination && (
        <div className={styles.pagination}>
          <div className={styles.assetsCont}>{cryptoCoins?.length} assets</div>
          <Pagination
            totalPosts={cryptoCoins?.length ?? 0}
            postPerPage={howManyToShowPerPage ?? 10}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
}
