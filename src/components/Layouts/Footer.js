import React from "react";
import { Paper, Tabs } from '@material-ui/core'
import { Tab } from '@material-ui/core'

export default props => {
  return (
    <Paper>
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      centered
      value={0}
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
  );
};
