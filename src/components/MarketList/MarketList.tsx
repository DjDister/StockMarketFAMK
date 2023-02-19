import React, { ElementType, useState } from "react";
import styles from "./MarketList.module.css";
import Crypto from "../MarketItem/MarketItem";
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
}

export default function MarketList({
  cryptoCoins,
  className,
  customStyles,
  ElementToRenderInList,
  howManyDetails,
  howManyToShowPerPage,
  showPagination,
}: MarketListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  return (
    <div className={`${className} ${styles.container}`} style={customStyles}>
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
