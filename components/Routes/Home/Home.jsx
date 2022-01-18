import styles from "./Home.module.scss";
import Section2 from "./Section2/Section2";
import Landing from "./Landing/Landing";

const Home = () => {
  return (
    <div className={styles["home"]}>
      <Landing />
      <Section2 />
    </div>
  );
};

export default Home;
