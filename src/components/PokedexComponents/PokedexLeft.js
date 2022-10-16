import styles from "./PokedexLeft.module.css";
import ColoredLight from "../Embellishments/ColoredLight";
import PokeDescription from "./PokeDescription";
import MainScreen from "./MainScreen";
const PokedexLeft = ({pokemon}) => {
  const {description} = pokemon;
  const {loading} = pokemon;
  return (
    <div className={styles["poke-left"]}>
      <span className={styles["top-button"]}></span>
      <div className={styles["poke-left-inner"]}>
        <div className={styles["top-decorations"]}>
          <div className={styles['big-blue-circle']}>
          <ColoredLight color='#58A1DA' highlightColor='#D7F9FF' borderColor='#645B91' widthHeight='90%' />
          </div>

          <div className={styles['colored-circles']}>
            <ColoredLight color='#E30609' highlightColor='#FFAAA9' borderColor='#C61118' widthHeight='30px' />
            <ColoredLight color='#FFC004' highlightColor='#FFF54D' borderColor='#C61118' widthHeight='30px' />
            <ColoredLight color='#5E8C36' highlightColor='#ACF7B2' borderColor='#C61118' widthHeight='30px' />
          </div>
          <img
            className={styles["top-shadow"]}
            src="imgs/pokedex-top-shadow.png"
          />
        </div>
        <div className={styles["left-body"]}>
          <img className={styles['inner-shadow']} src='imgs/pokedex-inner-shadow.png' />
          <MainScreen pokemon={pokemon} />

          <PokeDescription loading={loading} description={description} />
        </div>
      </div>
    </div>
  );
};

export default PokedexLeft;
