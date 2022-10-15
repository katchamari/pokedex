import { useState, useEffect } from "react";
import styles from "./Autocomplete.module.css";

const Autocomplete = ({arr, searchQuery, setSearchQuery}) => {
  const [filteredResults, setFilteredResults] = useState([]);

  const onChange = (e) => {
    const userInput = e.currentTarget.value;

    // seems like it's working in this line?
    setSearchQuery(e.target.value);

    let filteredArr;

    if (userInput === "") {
      filteredArr = [];
    } else {
      filteredArr = arr.filter((poke) => {
        return (
          poke.name.substr(0, userInput.length).toUpperCase() ===
          userInput.toUpperCase()
        );
      });
    }

    setFilteredResults(filteredArr);
    console.log(filteredResults);
  };

  let resultList = filteredResults.map((result, index) => {
    return (
      index < 8 && (
        <li key={index}>
          <button onMouseDown={() => setSearchQuery(result.name)} href="#">{result.name}</button>
        </li>
      )
    );
  });

  useEffect(()=> {
    console.log(searchQuery);
  })

  const hideResults = (e) => {
    e.preventDefault();
    setFilteredResults([]);
  };

  let results;
  if (resultList.length > 0) {
    results = <ul className={styles["autocomplete-results"]}>{resultList}</ul>;
  }

  return (
    <div className={styles.autocomplete}>
      <input
        className={styles.input}
        onChange={onChange}
        type="text"
        placeholder="Bulbasaur"
        value={searchQuery}
        onFocus={onChange}
        onBlur={hideResults}
      />
      {results}
    </div>
  );
};

export default Autocomplete;
