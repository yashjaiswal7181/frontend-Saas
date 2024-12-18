import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header
      className={styles.header}
      role="banner"
      aria-label="SaaS Labs Frontend Header"
    >
      SaaS Labs <span tabIndex="0">Frontend</span>
    </header>
  );
}

export default Header;
