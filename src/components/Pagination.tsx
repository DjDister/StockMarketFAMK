import React, { JSXElementConstructor } from "react";
import Button from "./Button/Button";
import styles from "../pages/MarketPage/MarketPage.module.css";
import RightArrow from "../assets/icons/RightArrow";
import LeftArrow from "../assets/icons/LeftArrow";
import { current } from "immer";
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
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  0;

  return (
    <div className={styles.paginationdiv} style={{}}>
      <button
        style={{
          backgroundColor: "#121318",

          color: "gray",
          border: "#121318",
        }}
        className={styles.arrow}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {<LeftArrow height="17px" fill="white" />}{" "}
      </button>

      {pages.map((page, index) => {
        return (
          <button
            style={{
              backgroundColor: "#121318",
              color: "gray",
              border: "#121318",
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => setCurrentPage(page)}
            key={index}
            className={styles.pagination}
          >
            {page}
          </button>
        );
      })}
      <button
        style={{
          backgroundColor: "#121318",
          color: "gray",
          border: "#121318",
        }}
        onClick={() => setCurrentPage(currentPage + 1)}
        className={styles.arrow}
      >
        {" "}
        {<RightArrow height="17px" fill="white" />}
      </button>
    </div>
  );
}

export default Pagination;
