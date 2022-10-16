import { useEffect, useState } from "react";
import styles from "./Pokedex.module.css";

import PokedexLeft from "./PokedexLeft";
import PokedexDivider from "./PokedexDivider";
import PokedexRight from "./PokedexRight";

const Pokedex = () => {
  const [pokeArray, fillPokeArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pokemon,setPokemon] = useState({
    name:'Bulbasaur', 
    num:'', 
    defaultImg:'',
    description:'',
    loading:true
  })

// fills array with names for autocomplete
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/?limit=100000&offset=0`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        fillPokeArray(data.results);
      });
  }, []);

  useEffect(() => {
    setPokemon({...pokemon, loading:true});
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name.toLowerCase()}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const engDescription = data.flavor_text_entries.filter(entry => entry.language.name === 'en');

          fetch(`https://pokeapi.co/api/v2/pokemon/${data.varieties[0].pokemon.name}`)
            .then((data2) => {
              return data2.json();
            })
            .then((data3) => {
              setPokemon({
                ...pokemon, 
                num:data3.order, 
                defaultImg:data3.sprites.front_default,
                description:engDescription[0].flavor_text.replace('\f',       '\n') 
                .replace('\u00ad\n', '') 
                .replace('\u00ad',   '') 
                .replace(' -\n',     ' - ') 
                .replace('-\n',      '-') 
                .replace('\n',       ' '),
                loading:false
              })
            });

            console.log(pokemon);
        });
  }, [pokemon.name])



  return (
    <div className={styles.pokedex}>
      <PokedexLeft pokemon={pokemon} />
      <PokedexDivider />
      <PokedexRight
        search={[searchQuery, setSearchQuery]}
        pokeList={pokeArray}
        pokeData={[pokemon,setPokemon]}
      />
    </div>
  );
};

export default Pokedex;
