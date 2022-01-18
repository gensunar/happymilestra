import styles from "./SideNav.module.scss";
import NavLink from "next/link";

const SideNav = (props) => {
  return (
    <div className={styles["sidenav"]}>
      <div className={styles["menu"]}>
        <ul className={styles["menu-items"]}>
          <li className={styles["menu-item"]} onClick={props.onCloseDrawer}>
            <NavLink href="/">Home</NavLink>
          </li>
          <li className={styles["menu-item"]} onClick={props.onCloseDrawer}>
            <NavLink href="/aboutus">Who Are we</NavLink>
          </li>
          <li className={styles["menu-item"]} onClick={props.onCloseDrawer}>
            <NavLink href="#footer">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
