import styles from "./Name.module.css";

const Name = (props) => {
    const classes = `${styles.name} ${props.className?props.className:''}`;

  return (
    <div className={classes}>
      <p>{props.name}</p>
      <p>#{props.number}</p>
    </div>
  );
};

export default Name;
