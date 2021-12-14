import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";

const PokemonCardBackpack = ({ pokemonsData, handleReleasing, caught }) => {
  const useStyles = makeStyles({
    cardMedia: {
      margin: "auto",
      padding: "100px",
      width: "150px",
      height: "150px",
    },
    cardContent: {
      textAlign: "center",
    },
  });
  const classes = useStyles();
  const history = useHistory();
  const { id, name, sprite } = pokemonsData;

  function handlerOnClickCard() {
    history.push(`/${id}`);
  }

  function handlerOnClickRelease(e) {
    e.stopPropagation();
    console.log("handleReleasing called", id, caught);
    handleReleasing(id);
  }

  return caught[id] !== "released" && caught[id] !== undefined ? (
    <Grid item xs={12} sm={6} md={3} key={id}>
      <Card onClick={handlerOnClickCard}>
        <CardMedia
          className={classes.cardMedia}
          image={sprite}
          title="Pokemon"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">
            {id} {name}
          </Typography>
          <Button
            onClick={(e) => {
              handlerOnClickRelease(e);
            }}
          >
            Release
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ) : null;
};

export default PokemonCardBackpack;
