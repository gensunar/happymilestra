import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div className={styles["layout"]}>
      <div className={styles["header"]}>
        <Navbar />
      </div>

      <div className={styles["main"]}>{props.children}</div>

      <div className={styles["footer"]}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
