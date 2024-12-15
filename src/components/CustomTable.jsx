import { useState } from "react";

import "./customTable.css";
import { Pagination } from "./Pagination.jsx";

// eslint-disable-next-line react/prop-types
export const CustomTable = ({ data, loading, error }) => {
  const columns = ["Sl.No", "Percentage funded", "Amount pledged"];
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data && data.length / itemsPerPage);

  const paginatedData =
    data &&
    data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="table-section">
      <div className="custom-table-container">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <table className="custom-table" role="table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className={"table-header-row"}
                  scope={"col"}
                  role="columnheader"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData &&
              paginatedData.map((item, itemIndex) => (
                <tr className={"table-row"} key={itemIndex} role="row">
                  <td role="cell">{item["s.no"]}</td>
                  <td role="cell">{item["amt.pledged"]}</td>
                  <td role="cell">{item["percentage.funded"]}%</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
