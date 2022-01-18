import { urlObjectKeys } from "next/dist/shared/lib/utils";
import styles from "./StepItem.module.scss";

const StepItem = (props) => {
  return (
    <div className={styles["item"]}>
      <div className={styles["card"]} style={{ backgroundColor: props.cardBg }}>                                     
      <div className={styles["icon"]} style={{backgroundImage: `url(${props.backgroundImage})`}}></div>
        <span className={styles["header"]}>{props.header}</span>
        <span className={styles["description"]}>{props.description}</span>
      </div>
      <div
        className={styles["top"]}
        style={{ backgroundColor: props.topColor }}
      >
        {props.step}          
      </div>
      <div
        className={styles["background"]}
        style={{ backgroundColor: props.bgColor }}
      ></div>
    </div>
  );
};

export default StepItem;
