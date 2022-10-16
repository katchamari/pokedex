import styles from "./MainScreen.module.css";

import RoundedLines from "../Embellishments/RoundedLines";
import Hole from "../Embellishments/Hole";
import FlexNoWrap from "../UI/FlexNoWrap";
import Name from "./Name";
import PokeImg from "./PokeImg";

const MainScreen = ({pokemon}) => {

  return (
    <div className={styles.screen}>
      <div className={styles["screen-inner"]}>
        <FlexNoWrap className={`${styles.holes} mb-15`}>
          <Hole />
          <Hole />
        </FlexNoWrap>
        <Name className="mb-15" name={pokemon.name} number={pokemon.num} />
        <PokeImg src={pokemon.defaultImg} alt={pokemon.name} loading={pokemon.loading} height="200" />

        <RoundedLines className={styles["bottom-right-lines"]} />
      </div>
    </div>
  );
};

export default MainScreen;
