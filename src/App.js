import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Backpack from "./pages/Backpack";
import Pokemon from "./pages/Pokemon";
import Pokemons from "./pages/Pokemons";
import { todayDate } from "./utils/todayDate";

function App() {
  const [pokemonsData, setPokemonsData] = useState({});
  const [caught, setCaught] = useState({});
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const handleReleasing = (id) => {
    setCaught({ ...caught, [id]: "released" });
    console.log("handleReleasing in APP", caught, id);
  };

  const handleCatching = (id) => {
    setCaught({ ...caught, [id]: todayDate() });
    console.log("handleCatching in APP", caught, id);
  };
  function gotoNextPage() {
    setOffset(offset + limit);
    setCurrentPageUrl(nextPageUrl);
  }

  useEffect(() => {
    axios
      .get(currentPageUrl)
      .then((response) => {
        setNextPageUrl(response.data.next);
        const results = response.data.results;
        const newPokemonData = {};
        results.forEach(
          (pokemon, index) =>
            (newPokemonData[index + 1 + offset] = {
              id: index + 1 + offset,
              name: pokemon.name,
              sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1 + offset
              }.png`,
            })
        );
        setPokemonsData({ ...pokemonsData, ...newPokemonData });
        return newPokemonData;
      })
      .then((result) => {
        console.log("!!!!!!!!!!!!!!!!!!!!!POKEMONS", result);
      })
      .catch((error) => console.log(error));
  }, [currentPageUrl]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Pokemons
              caught={caught}
              pokemonsData={pokemonsData}
              handleCatching={handleCatching}
              gotoNextPage={gotoNextPage}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/backpack"
          render={(props) => (
            <Backpack
              caught={caught}
              pokemonsData={pokemonsData}
              handleReleasing={handleReleasing}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/:pokemonId"
          render={(props) => <Pokemon caught={caught} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
