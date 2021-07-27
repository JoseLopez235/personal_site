import React from "react";
import {
  Container,
  Chip,
  Paper,
  Typography,
  Divider,
  IconButton,
  Toolbar,
  Grid
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";
import Image from "material-ui-image";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from '@material-ui/core/'


const useStyles = makeStyles(() => ({
  paragraph: {
    align: 'left',
  },

  chips: {
    margin: '5px'
  },

  paper: {
    marginTop: '25px',
    paddingBottom: '25px',
    backgroundColor:'#ffffffCC'
  },

  carousel: {
    marginTop: '25px'
  }
}))

const ProjectTemplate = (props) => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.paper}>
    <Grid container alignItem="center" justify="center" spacing={2}>
      <Grid item xs={6}>
        <Carousel animation="slide" className={classes.carousel}>
          {
            props.project.images.map((image => {
              return  <Image src={image} aspectRatio={14 / 9} /> 
            }))
          }
        </Carousel>
      </Grid>

      <Grid item container xs={12} alignItems="center" justify="center">
          <Toolbar>
            <Grid item xs={12}>
              <IconButton href={props.project.webLink} target="_blank">
                <WebIcon fontSize="large" />
              </IconButton>

              <IconButton href={props.project.gitHub} target="_blank">
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Toolbar>
      </Grid>
      
      <Grid item container xs={8} justify="center"> 
        <Typography gutterBottom variant="headline" component="h2">
          {
            props.project.name
          }
        </Typography>
      </Grid>

      <Grid item xs={8}>
        <Typography gutterBottom className={classes.paragraph}>
          {
            props.project.description
          }
        </Typography>
      </Grid>

      <Grid item container xs={8} justify="center">
        <Typography gutterBottom variant="headline" component="h2">
            Technologies Used:
        </Typography>
      </Grid>

      <Grid item container xs={8} justify="center">
        {
          props.project.techUsed.map(tech => {
            return (
            <Typography gutterBottom> 
              <Chip size="medium" label={tech} className={classes.chips}/>
            </Typography>
          )})
        }
      </Grid>
    </Grid>
    </Paper>
  )
}

export default ProjectTemplate;