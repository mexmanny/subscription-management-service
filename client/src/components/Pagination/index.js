import React from "react";
import { PaginationContainer } from "./style";

export const Pagination = ({
  subscriptionsPerPage,
  totalSubscriptions,
  currentPageNumber,
  paginate,
}) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(totalSubscriptions / subscriptionsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <div key={number}>
          <button
            className={currentPageNumber === number ? "active" : ""}
            type="button"
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </div>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
