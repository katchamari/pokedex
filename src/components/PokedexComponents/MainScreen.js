import { useState } from "react";
import styles from "./MainScreen.module.css";

import RoundedLines from "../Embellishments/RoundedLines";
import Hole from "../Embellishments/Hole";
import FlexNoWrap from "../UI/FlexNoWrap";
import Name from "./Name";
import PokeImg from "./PokeImg";
import { useEffect } from "react";

const MainScreen = () => {
  const [pokemon, setPokemon] = useState("Bulbasaur");
  const [searchedPokemon, setSearchedPokemon] = useState('Bulbasaur');
  const [pokeNum, setPokeNum] = useState(1);
  const [pokeImg, setPokeImg] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  );

  const getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.toLowerCase()}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        
        fetch(`https://pokeapi.co/api/v2/pokemon/${data.varieties[0].pokemon.name}`)
          .then((data2) => {
            return data2.json();
          })
          .then((data3) => {
            setSearchedPokemon(data3.species.name);
            setPokeImg(data3.sprites.front_default);
            setPokeNum(data3.id);
          });
      });
  };



  const handlePokeName = (e) => {
    setPokemon(e.target.value);
  };

  const searchPokemon = (e) => {
    e.preventDefault();
    getPokemon();
  };

  return (
    <div className={styles.screen}>
      <div className={styles["screen-inner"]}>
        <FlexNoWrap className={`${styles.holes} mb-15`}>
          <Hole />
          <Hole />
        </FlexNoWrap>
        <Name className="mb-15" name={searchedPokemon} number={pokeNum} />
        <PokeImg src={pokeImg} alt="Bulbasaur" height="200" />

        <RoundedLines className={styles["bottom-right-lines"]} />
      </div>
    </div>
  );
};

export default MainScreen;
