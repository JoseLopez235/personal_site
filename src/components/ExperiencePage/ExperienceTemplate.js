import React from "react";
import {
  Paper,
  Typography,
  Grid
} from "@material-ui/core";
import Image from "material-ui-image";
import { makeStyles } from '@material-ui/core/'


const useStyles = makeStyles(() => ({
  paragraph: {
    align: 'left',
  },

  paper: {
    marginTop: '25px',
    paddingBottom: '25px',
    backgroundColor:'#ffffffCC'
  },

  gridImage: {
    marginTop: '25px'
  },

  image: {
    length: '255px',
    width: '255px'
  }
}))

const ExperienceTemplate = (props) => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.paper}>
    <Grid container alignItem="center" justify="center" spacing={2}>
      <Grid item container xs={6} className={classes.gridImage} justify="center">
        <img src={props.experience.image} className={classes.image}/> 
      </Grid>

      <Grid item container xs={8} justify="center"> 
        <Typography gutterBottom variant="headline" component="h2">
          {
            props.experience.companyName
          }
        </Typography>
      </Grid>

      <Grid item container xs={8} alignItems="center" justify="center">
        <Typography gutterBottom variant="headline" component="h2">
          {
            props.experience.position
          }
        </Typography>
      </Grid>

      <Grid item container xs={8} alignItems="center" justify="center">
        <Typography gutterBottom variant="headline" component="h2">
          {
            props.experience.years
          }
        </Typography>
      </Grid>

      <Grid item xs={8}>
        <Typography gutterBottom className={classes.paragraph}>
          {
            props.experience.description
          }
        </Typography>
      </Grid>
    </Grid>
    </Paper>
  )
}

export default ExperienceTemplate;