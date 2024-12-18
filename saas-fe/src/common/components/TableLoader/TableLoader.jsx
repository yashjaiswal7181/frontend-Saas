import React from "react";
import styles from "./TableLoader.module.css";

const TableLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p>Loading data...</p>
    </div>
  );
};

export default TableLoader;
