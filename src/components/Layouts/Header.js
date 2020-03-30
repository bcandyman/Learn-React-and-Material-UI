import React from "react";
import { AppBar , Toolbar, Typography } from '@material-ui/core';
import 'typeface-roboto';

export default props => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h5">
        Exercise Database
      </Typography>
    </Toolbar>
  </AppBar>
  );
};
