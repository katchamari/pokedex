import styles from "./ColoredLight.module.css";

const ColoredLight = (props) => {
    const backgroundColor = props.color || '#E30609';
    const borderColor = props.borderColor || '#C61118';
    const highlightColor = props.highlightColor || '#FFAAA9';
    const widthHeight = props.widthHeight || '30px';
  return (
    <span style={{backgroundColor:backgroundColor, border: `2px solid ${borderColor}`, width:widthHeight, height:widthHeight}} className={styles.light}>
      <span style={{backgroundColor:highlightColor}} className={styles.highlight} />{" "}
    </span>
  );
};

export default ColoredLight;
