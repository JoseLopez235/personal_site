import React from 'react';
import { Container, Grid } from '@material-ui/core';
import ProjectsData from '../ProjectPage/ProjectsData'
import ProjectTemplate from '../ProjectPage/ProjectTemplate'

const Projects = () => {
  return (
    <Container>
      <Grid container spacing={0} direction="coloumn" alignItems="center" justify="center">
        {
          ProjectsData.map(project => {
            return (
              <ProjectTemplate project={project} />
            )
          })
        }
      </Grid>
    </Container>
  )
}

export default Projects