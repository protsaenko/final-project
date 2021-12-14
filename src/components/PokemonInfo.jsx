import { Typography } from "@material-ui/core";
import React from "react";

const PokemonInfo = ({ pokemon, time }) => {
  const { id, name, abilities, weight, types, sprites } = pokemon;
  const styles = {
    ParametersContainer: {
      marginBottom: "20px",
    },
    StatsContainer: {
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "space-evenly",
      marginBottom: "20px",
    },
    Avatar: {
      width: "300px",
      height: "300px",
      margin: "auto",
      marginBottom: "20px",
    },
    Tiltle: {
      margin: "auto",
    },
  };
  return (
    <>
      <Typography style={styles.Tiltle} variant="h2">
        {name.toUpperCase()}
      </Typography>
      <Typography style={styles.Tiltle} variant="h2">
        {id}
      </Typography>
      <img
        style={styles.Avatar}
        src={sprites.other["official-artwork"].front_default}
        alt={name}
      />
      <div style={styles.ParametersContainer}>
        <div style={styles.StatsContainer}>
          <Typography variant="h5">
            Abilities
            {abilities.map((item) => (
              <Typography key={item.ability.name}>
                {item.ability.name}{" "}
              </Typography>
            ))}
          </Typography>
          <Typography variant="h5">
            Types
            {types.map((item) => (
              <Typography key={item.type.name}>{item.type.name} </Typography>
            ))}
          </Typography>
        </div>
        <Typography>
          <strong>Weight:</strong> {weight}
        </Typography>
        {time !== undefined && time !== "released" ? (
          <Typography>
            <strong> Has been caught on </strong> {time}
          </Typography>
        ) : null}
      </div>
    </>
  );
};

export default PokemonInfo;
