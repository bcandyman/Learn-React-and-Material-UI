import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'

const styles = {
  paper: {
    padding:20, 
    marginTop: 10, 
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}

export default ({ exercises }) =>
<Grid container>
{console.log(exercises)}
    <Grid item xs>
      <Paper style={styles.paper}>
        {exercises.map(([group, exercise])=>
          <>
            <Typography 
            variant="h4"
            style={{textTransform: "capitalize"}}
            >
              {group}
            </Typography>

            <List component="ul">
              {exercise.map(({ title })=>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              )}
            </List>
          </>
        )}    
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper style={styles.paper}>
        <Typography
        variant='h4'>
          Welcome!
        </Typography>
        <Typography
         variant='subtitle1'
         style={{marginTop: 20}}>
          Please select an exercise from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>