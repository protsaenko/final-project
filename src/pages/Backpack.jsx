import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import PokemonCardBackpack from "../containers/PokemonCardBackpack";

const Backpack = ({ pokemonsData, caught, handleReleasing, ...props }) => {
  console.log("backpack", caught);
  return (
    <>
      {pokemonsData ? (
        <Grid style={{ padding: "20px 50px" }} container spacing={4}>
          {Object.keys(pokemonsData).map((pokemonId) => (
            <PokemonCardBackpack
              key={pokemonId}
              handleReleasing={handleReleasing}
              caught={caught}
              pokemonsData={pokemonsData[Number(pokemonId)]}
              {...props}
            />
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Backpack;
