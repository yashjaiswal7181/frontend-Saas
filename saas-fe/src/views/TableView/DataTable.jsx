import React, { useState, useEffect, useMemo } from "react";
import Pagination from "../../common/components/Pagination/Pagination";
import TableLoader from "../../common/components/TableLoader/TableLoader"; // Import the loader
import styles from "./DataTable.module.css";

const DataTable = () => {
  const [data, setData] = useState([]); // Full dataset
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [loading, setLoading] = useState(false); // Loader state
  const rowsPerPage = 5; // Number of rows per page
  const apiUrl =
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

  // Fetch data from the API when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData([...result]); // Set the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle page change with loader
  // using loader with setTimeout just because all the data is in Frontend
  const handlePageChange = (page) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 500);
  };

  // Calculate total pages based on data length
  const totalPages = useMemo(
    () => Math.ceil(data.length / rowsPerPage),
    [data]
  );

  // Slice data for current page
  const paginatedData = useMemo(
    () =>
      data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage),
    [currentPage, data]
  );

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableTitle}>Project Funding Data</h2>

      {/* Table or Loader */}
      {loading ? (
        <TableLoader /> // Loader displayed when loading is true
      ) : (
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Percentage Funded</th>
              <th>Amount Pledged</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr key={index}>
                  <td>{item["s.no"]}</td>
                  <td>{item["percentage.funded"]}%</td>
                  <td>${item["amt.pledged"].toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className={styles.noData}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {/* Pagination Component */}
      {data.length > rowsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default DataTable;
