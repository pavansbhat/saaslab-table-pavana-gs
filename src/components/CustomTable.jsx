import React, { useState, useEffect } from "react";
import useFetcher from "../utils/useFetcher.js";

export const CustomTable = ({ data, loading, error }) => {
  const columns = ["Sl.No", "Percentage funded", "Amount pledged"];

  console.log(data, "DATA");

  return (
    <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope={"col"}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
