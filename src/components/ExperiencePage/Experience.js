import React from 'react';
import { Container, Grid } from '@material-ui/core';
import ExperienceData from '../ExperiencePage/ExperienceData'
import ExperienceTemplate from '../ExperiencePage/ExperienceTemplate'

const Experience = () => {
  return (
    <Container>
        {
          ExperienceData.map(experience => {
            return (
              <ExperienceTemplate experience={experience} />
            )
          })
        }
    </Container>
  )
}

export default Experience