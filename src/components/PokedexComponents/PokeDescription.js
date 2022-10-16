import styles from "./PokeDescription.module.css";

const PokeDescription = ({description, loading}) => {
  return (
    <div className={styles.description}>
      {loading ? <img className={styles.loading} src="/imgs/loading-red.gif" /> : <p>{description}</p>}
    </div>
  );
};

export default PokeDescription;
