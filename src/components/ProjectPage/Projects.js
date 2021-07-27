import React from 'react';
import { Container, Grid } from '@material-ui/core';
import ProjectsData from '../ProjectPage/ProjectsData'
import ProjectTemplate from '../ProjectPage/ProjectTemplate'

const Projects = () => {
  return (
    <Container>
        {
          ProjectsData.map(project => {
            return (
              <ProjectTemplate project={project} />
            )
          })
        }
    </Container>
  )
}

export default Projects