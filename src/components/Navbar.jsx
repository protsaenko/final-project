import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();

  const useStyles = makeStyles({
    toolbarContainer: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
    },
  });

  const classes = useStyles();
  return (
    <div style={{ marginBottom: "60px" }}>
      <AppBar position="fixed" style={{ backgroundColor: "green" }}>
        <Toolbar className={classes.toolbarContainer}>
          <IconButton
            onClick={() => {
              history.push("/");
            }}
          >
            Pokedex
          </IconButton>
          <IconButton
            onClick={() => {
              history.push("/backpack");
            }}
          >
            Backpack
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
