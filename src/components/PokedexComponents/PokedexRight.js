import styles from "./PokedexRight.module.css";
import Autocomplete from "../FunctionalComponents/Autocomplete";
const PokedexRight = (props) => {
  return (
    <div className={styles['poke-right']}>
      <div className={styles['poke-right-top']}>
        <div className={styles['clip-path-fill']}></div>
      </div>
      <div className={styles['poke-right-bottom']}>
        <Autocomplete searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} arr={props.pokeList} />
      </div>
    </div>
  );
};

export default PokedexRight;
