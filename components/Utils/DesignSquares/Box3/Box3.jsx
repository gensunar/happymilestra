import styles from "./Box3.module.scss";

const Box3 = props => {

    return (
        <div className={styles['box-container']}>
            <div className={styles['box']}></div>
        </div>
    );
}

export default Box3;