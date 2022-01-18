import styles from "./Navbar.module.scss";
import NavLink from "next/link";
import SideNav from "./SideNav/SideNav";
import { useState } from "react";

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toogleSideNavHandler = () => {
    setShowSideNav((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles["navbar"]}>
        <div className={styles["brand"]}>
          <div className={styles["menu-icon"]} onClick={toogleSideNavHandler}>
            <div className={styles["menu-icon__line"]}></div>
            <div className={styles["menu-icon__line"]}></div>
            <div className={styles["menu-icon__line"]}></div>
          </div>
          <NavLink href="/">
            <div className={styles["brand-logo"]}></div>
          </NavLink>
        </div>
        <div className={styles["menu"]}>
          <ul className={styles["menu-items"]}>
          <li className={styles["menu-item"]}>
            <NavLink href="/">Home</NavLink>
          </li>
          <li className={styles["menu-item"]}>
            <NavLink href="/aboutus">Who Are we</NavLink>
          </li>
          <li className={styles["menu-item"]}> <NavLink href="#footer">Contact Us</NavLink></li>
          </ul>
        </div>

        {showSideNav && (
          <div className={styles["drawer"]}>
            <div className={styles["sidenav"]}>
              <SideNav onCloseDrawer={toogleSideNavHandler} />
            </div>
          </div>
        )}
      </div>
      {showSideNav && (
        <div
          className={styles["backdrop"]}
          onClick={toogleSideNavHandler}
        ></div>
      )}
    </>
  );
};

export default Navbar;
