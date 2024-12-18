import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <div className={styles.spinner}></div>
      <div className={styles.loadingText}>
        Creating Experince Like Never Before :)
      </div>
    </div>
  );
}

export default Loader;
