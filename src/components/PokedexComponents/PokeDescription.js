import styles from "./PokeDescription.module.css";

const PokeDescription = ({description}) => {
  return (
    <div className={styles.description}>
      <p>{description}</p>
    </div>
  );
};

export default PokeDescription;
