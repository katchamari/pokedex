import styles from "./PokedexRight.module.css";
import Autocomplete from "../FunctionalComponents/Autocomplete";
const PokedexRight = (props) => {
  return (
    <div className={styles['poke-right']}>
      <div className={styles['poke-right-top']}>
        <div className={styles['clip-path-fill']}></div>
      </div>
      <div className={styles['poke-right-bottom']}>
        <Autocomplete savedQuery={props.pokeData} search={props.search} setSearchQuery={props.setSearchQuery} arr={props.pokeList} />
      </div>
    </div>
  );
};

export default PokedexRight;
