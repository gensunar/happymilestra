import styles from "./DateBox.module.scss";

const DateBox = (props) => {
  return (
    <div className={styles["date-box"]}>
      <span className={styles["label"]}>{props.label}</span>
      <input
        id={props.id}
        type="date"
        className={styles["date-input"]}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default DateBox;
