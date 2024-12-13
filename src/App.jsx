import { useState } from "react";
import "./App.css";
import useFetcher from "./utils/useFetcher.js";
import { CustomTable } from "./components/CustomTable.jsx";

function App() {
  const { data, error, loading, fetchData } = useFetcher(
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json",
    { autoFetch: true },
  );

  return (
    <>
      <CustomTable data={data} loading={loading} error={error} />
    </>
  );
}

export default App;
