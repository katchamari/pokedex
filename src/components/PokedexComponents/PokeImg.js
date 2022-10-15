import styles from "./PokeImg.module.css";

const PokeImg = (props) => {
  return (
    <div style={{height: props.height?`${props.height}px`:'200px'}} className={styles["poke-img"]}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export default PokeImg;
