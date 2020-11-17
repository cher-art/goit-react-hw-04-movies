import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <NavLink
        exact
        to="/"
        className={styles.navigation}
        activeClassName={styles.navigationActive}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={styles.navigation}
        activeClassName={styles.navigationActive}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
