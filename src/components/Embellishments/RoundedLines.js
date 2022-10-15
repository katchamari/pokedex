import styles from "./RoundedLines.module.css";
import RoundedLine from './RoundedLine';
const RoundedLines = (props) => {
  const classes = `${props.className?props.className:''}`;

  return (
    <div className={classes}>
      <RoundedLine/>
      <RoundedLine/>
      <RoundedLine/>
      <RoundedLine/>
    </div>
  );
};

export default RoundedLines;
