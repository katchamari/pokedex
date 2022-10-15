import styles from "./RoundedLine.module.css";

const RoundedLine = (props) => {
  const classes = `${styles.line} ${props.className?props.className:''}`;

  return (
      <span className={classes}></span>
  );
};

export default RoundedLine;
