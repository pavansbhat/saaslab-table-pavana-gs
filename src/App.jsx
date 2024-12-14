import { useState } from "react";
import "./App.css";
import useFetcher from "./utils/useFetcher.js";
import { CustomTable } from "./components/CustomTable.jsx";

function App() {
  const { data, error, loading } = useFetcher(
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json",
    { autoFetch: true },
  );
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <CustomTable
        data={data}
        loading={loading}
        error={error}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default App;
