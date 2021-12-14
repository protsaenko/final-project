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

const PokemonCardPokedex = ({ pokemonsData, handleCatching, caught }) => {
  const useStyles = makeStyles({
    cardMedia: {
      margin: "auto",
      paddingTop: "150px",
      paddingBottom: "150px",
    },
    cardContent: {
      textAlign: "center",
    },
  });
  const classes = useStyles();
  const styles = {
    mediaImage: {
      height: "auto",
      width: "auto",
      maxWidth: "300px",
      maxHeight: "300px",
    },
  };
  const history = useHistory();
  const { id, name, sprite } = pokemonsData;

  function handlerOnClickCard() {
    history.push(`/${id}`);
  }

  function handlerOnClickCatch(e) {
    e.stopPropagation();
    console.log("handlerCatching called", id, caught);
    handleCatching(id);
  }

  return (
    <Grid item xs={12} sm={6} md={3} key={id}>
      <Card onClick={handlerOnClickCard}>
        <CardMedia
          className={classes.cardMedia}
          image={sprite}
          title="Pokemon"
          style={styles.mediaImage}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">
            {id} {name}
          </Typography>
          <Button
            disabled={
              caught[id] !== "released" && caught[id] !== undefined
                ? true
                : false
            }
            onClick={(e) => {
              handlerOnClickCatch(e);
            }}
          >
            Catch
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PokemonCardPokedex;
