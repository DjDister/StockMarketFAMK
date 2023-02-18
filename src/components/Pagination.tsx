import React, { JSXElementConstructor } from "react";
import Button from "./Button/Button";
interface PaginationProps {
  totalPosts: number;
  postPerPage: number;
  setCurrentPage: Function;
}

function Pagination({
  totalPosts,
  postPerPage,
  setCurrentPage,
}: PaginationProps) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  0;

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button onClick={() => setCurrentPage(page)} key={index}>
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
