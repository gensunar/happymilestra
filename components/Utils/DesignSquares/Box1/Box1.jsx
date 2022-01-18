import styles from "./Box1.module.scss";

const Box1 = props => {

    return (
        <div className={styles['box-container']}>
            <div className={styles['box']}></div>
        </div>
    );
}

export default Box1;