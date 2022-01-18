import styles from "./Box2.module.scss";

const Box2 = props => {

    return (
        <div className={styles['box-container']}>
            <div className={styles['box']}></div>
        </div>
    );
}

export default Box2;