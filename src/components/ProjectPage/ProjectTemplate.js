import React from "react";
import {
  Container,
  Paper,
  Chip,
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

const ProjectTemplate = (props) => {
  return (
    <>
      <Grid item xs={6}>
        <Carousel>
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
        <Typography>
          {
            props.project.name
          }
        </Typography>
      </Grid>

      <Grid item xs={8}>
          <Typography>
            {
              props.project.description
            }
          </Typography>
      </Grid>

      <Grid item container xs={8} justify="center">
        {
          props.project.techUsed.map(tech => {
            return (
            <Typography gutterBottom> 
              <Chip label={tech}/>
            </Typography>
          )})
        }
      </Grid>
    </>
  )
}

export default ProjectTemplate;