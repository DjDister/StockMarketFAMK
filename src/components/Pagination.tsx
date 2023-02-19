import React from "react";
import styles from "../pages/MarketPage/MarketPage.module.css";
import RightArrow from "../assets/icons/RightArrow";
import LeftArrow from "../assets/icons/LeftArrow";
interface PaginationProps {
  totalPosts: number;
  postPerPage: number;
  setCurrentPage: Function;
  currentPage: number;
}

function Pagination({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) {
  const numberOfPages = Math.ceil(totalPosts / postPerPage);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        style={{
          backgroundColor: "#121318",
          color: "gray",
          border: "#121318",
        }}
        className={styles.arrow}
        onClick={() => {
          if (currentPage === 1) setCurrentPage(numberOfPages);
          else setCurrentPage(currentPage - 1);
        }}
      >
        {<LeftArrow height="17px" fill="white" />}{" "}
      </button>
      {Array.from({ length: numberOfPages }, (_, index) => {
        return (
          <button
            style={{
              backgroundColor: "#121318",
              color: "gray",
              border: "#121318",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => {
              setCurrentPage(index + 1);
            }}
            key={index}
            className={styles.pagination}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        style={{
          backgroundColor: "#121318",
          color: "gray",
          border: "#121318",
        }}
        onClick={() => {
          if (currentPage === numberOfPages) setCurrentPage(1);
          else setCurrentPage(currentPage + 1);
        }}
        className={styles.arrow}
      >
        {" "}
        {<RightArrow height="17px" fill="white" />}
      </button>
    </div>
  );
}

export default Pagination;
