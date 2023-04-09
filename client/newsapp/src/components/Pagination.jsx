import React, { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, setPage }) => {
  const pageNo = [];

  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNo.push(i);
  }

  return (
    <div>
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {currentPage == 1 ? null : (
              <li className="page-item" >
                <p className="page-link" role="button" onClick={() => setPage(currentPage-1)}>
                  {"Previous"}
                </p>
              </li>
            )}

            {pageNo.map((val) =>
              val >= currentPage - 2 && val <= currentPage + 2 ? (
                <li className="page-item" key={val}>
                  <p className="page-link" role="button" style={{color:val == currentPage ? 'black' : 'blue' }} onClick={() => setPage(val)}>
                    {val}
                  </p>
                </li>
              ) : null
            )}

            {currentPage == pageNo.length ? null : (
              <li className="page-item">
                <p className="page-link"  role="button" onClick={() => setPage(currentPage+1)}>
                  {"Next"}
                </p>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
