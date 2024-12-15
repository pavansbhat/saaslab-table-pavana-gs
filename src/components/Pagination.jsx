import React from "react";

// eslint-disable-next-line react/prop-types
export const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const maxPageNumbersToShow = 5;

  let startPage = Math.max(
    currentPage - Math.floor(maxPageNumbersToShow / 2),
    1,
  );
  let endPage = startPage + maxPageNumbersToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
  }
  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      {startPage > 1 && (
        <>
          <button onClick={() => handlePageChange(1)}>1</button>
          {startPage > 2 && <span>...</span>}
        </>
      )}

      {Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index,
      ).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span>...</span>}
          <button onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};
