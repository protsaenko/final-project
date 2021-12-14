import { Typography } from "@material-ui/core";
import React from "react";
const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    marginBottom: "100px",
  },
};
const NotFound = () => {
  return (
    <Typography style={styles.container} variant="h3">
      Pokemon not found
    </Typography>
  );
};

export default NotFound;
