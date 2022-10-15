import styles from "./PokedexDivider.module.css";

const PokedexDivider = () => {
  return (
    <div className={styles["poke-divider"]}>
      <div className={styles.top}>
          <span
            className={`${styles.highlight} ${styles["highlight-thick"]}`}
          />
          <span className={`${styles.shadow} ${styles["shadow-left"]}`} />
      </div>
      <div className={styles.middle}>
          <span className={`${styles.shadow} ${styles['top-curve']}`} />
          <span
            className={`${styles.highlight} ${styles["highlight-thick"]}`}
          />
          <span className={`${styles.shadow} ${styles["shadow-left"]}`} />
          <span className={`${styles.highlight} ${styles['highlight-left']}`} />
          <span className={`${styles.shadow} ${styles['bottom-curve']}`} />
      </div>
      <div className={styles.bottom}>
          <span
            className={`${styles.highlight} ${styles["highlight-thick"]}`}
          />
          <span className={`${styles.shadow} ${styles["shadow-left"]}`} />
          <span className={`${styles.highlight} ${styles['highlight-left']}`} />

      </div>
    </div>
  );
};

export default PokedexDivider;
