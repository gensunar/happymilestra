import styles from "./TextBox.module.scss";

const TextBox = (props) => {
  return (
    <div className={styles["input-box"]}>
      <span className={styles["label"]}>{props.label}</span>
      <textarea
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        rows="5"
        className={styles["input"]}
        value={props.value}
        onChange={props.onChange}
      />
      {props.hasError && (
        <p className={styles["error-msg"]}>{props.errorMsg}</p>
      )}
    </div>
  );
};

export default TextBox;
