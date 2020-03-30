import React from "react";
import { Paper, Tabs } from '@material-ui/core'
import { Tab } from '@material-ui/core'

export default ({ muscles }) => {
  return (
    <Paper>
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      centered
      value={0}
    >
      <Tab label='All' />
      {muscles.map((muscle, index)=>
      <Tab key={index} label={muscle} />
      )}
    </Tabs>
  </Paper>
  );
};
