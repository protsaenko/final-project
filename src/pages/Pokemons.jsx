import { Button, CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import PokemonCardPokedex from "../containers/PokemonCardPokedex";

const Pokemons = ({
  pokemonsData,
  handleCatching,
  caught,
  gotoNextPage,
  ...props
}) => {
  return (
    <>
      {pokemonsData ? (
        <>
          <Grid style={{ padding: "20px 50px" }} container spacing={4}>
            {Object.keys(pokemonsData).map((pokemonId) => (
              <PokemonCardPokedex
                key={pokemonId}
                caught={caught}
                handleCatching={handleCatching}
                pokemonsData={pokemonsData[Number(pokemonId)]}
                {...props}
              />
            ))}
          </Grid>
          <Button onClick={gotoNextPage}>Load more</Button>
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokemons;
