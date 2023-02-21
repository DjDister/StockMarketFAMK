import React, { ElementType, useState } from "react";
import styles from "./MarketList.module.css";

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
  columnsTitleElements?: { name: string; onClick: () => void }[];
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

  return (
    <div className={`${className} ${styles.container}`} style={customStyles}>
      {titleElement}
      {coinNameElem && (
        <div style={{ width: "100%", display: "flex" }}>
          <div
            onClick={coinNameElem.onClick}
            style={{ width: "50%", display: "flex", alignItems: "center" }}
          >
            {coinNameElem.name === "Coin Name" &&
              cryptoCoins &&
              cryptoCoins[0] &&
              cryptoCoins[0].index && (
                <div style={{ marginRight: 10 }} className={styles.indexTitle}>
                  #
                </div>
              )}
            {coinNameElem.name}
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
                      onClick={element.onClick}
                    >
                      {element.name}
                    </div>
                  );
                })}
          </div>
        </div>
      )}
      <div className={styles.cryptoListContainer}>
        {cryptoCoins
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
