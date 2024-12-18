import React, { useState, useEffect } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 5;
  const [updating, setUpdating] = useState(false);

  // Trigger a short fade effect on page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setUpdating(true);
      setTimeout(() => {
        onPageChange(page);
        setUpdating(false);
      }, 200);
    }
  };

  const startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        aria-label="First Page"
      >
        &laquo; First
      </button>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        &lt; Prev
      </button>

      <div
        className={`${styles.pageNumberContainer} ${
          updating ? styles.updating : ""
        }`}
      >
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? styles.activePage : ""}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next &gt;
      </button>
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="Last Page"
      >
        Last &raquo;
      </button>
    </div>
  );
};

export default Pagination;
