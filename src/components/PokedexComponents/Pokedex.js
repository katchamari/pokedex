import { useEffect, useState } from "react";
import styles from "./Pokedex.module.css";

import PokedexLeft from "./PokedexLeft";
import PokedexDivider from "./PokedexDivider";
import PokedexRight from "./PokedexRight";

const Pokedex = () => {
  const [pokeArray, fillPokeArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/?limit=100000&offset=0`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        fillPokeArray(data.results);
      });
  }, []);

  return (
    <div className={styles.pokedex}>
      <PokedexLeft />
      <PokedexDivider />
      <PokedexRight
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        pokeList={pokeArray}
      />
    </div>
  );
};

export default Pokedex;
