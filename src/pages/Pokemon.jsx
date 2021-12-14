import { Button, CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NotFound from "../components/NotFound";
import PokemonInfo from "../components/PokemonInfo";

const Pokemon = (props) => {
  const styles = {
    PokemonContainer: {
      display: "flex",
      flexFlow: "column wrap",
      alignContent: "center",
      justifyContent: "space-between",
    },
    Loader: {
      margin: "auto",
    },
  };

  const pokemonId = Number(props.match.params.pokemonId);
  const [pokemon, setPokemon] = useState(undefined);
  let history = useHistory();
  let caughtTimestamp = props.caught[pokemonId];

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        const results = response.data;
        setPokemon(results);
      })
      .catch((err) => {
        setPokemon(false);
      });
  }, [pokemonId]);

  return (
    <div style={styles.PokemonContainer}>
      {pokemon === undefined && <CircularProgress style={styles.Loader} />}
      {pokemon !== undefined && pokemon && (
        <PokemonInfo pokemon={pokemon} time={caughtTimestamp} />
      )}
      {pokemon === false && <NotFound />}
      <Button variant="contained" onClick={() => history.push("/")}>
        Back to Pokedex
      </Button>
    </div>
  );
};

export default Pokemon;
