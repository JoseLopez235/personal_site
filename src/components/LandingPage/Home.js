import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { 
        Container, 
        Paper,
        Typography,
        Chip,
        Grid } from '@material-ui/core'
import portrait from "../LandingPage/portrait.png";
import PersonalInfo from "../LandingPage/PersonalInfo"

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '80vh'
  },

  paragraph: {
    align: 'left',
  },

  portrait: {
    maxHeight: '95%',
    maxWidth: '95%',
    borderRadius: '2%'
  },

  chips: {
    margin: '5px'
  },

  grid: {
    marginLeft: '15px',
    marginTop: '15px'
  }
}))

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper>
        <Grid container className={classes.grid}>
          <Grid item xs={9}>
            <Typography gutterBottom variant="headline" component="h2">
              About me
            </Typography>
            
            {
              PersonalInfo.paragraphs.map(paragraph => {
                return (
                  <Typography gutterBottom> 
                    {paragraph}
                  </Typography>
                )
              })
            }

            <Typography gutterBottom variant="headline" component="h2">
              Technologies I worked with:
            </Typography>

            <Grid container>
              {
                PersonalInfo.technologies.map(tech => {
                  return (
                    <Typography gutterBottom> 
                      <Chip className={classes.chips} label={tech}/>
                    </Typography>
                  )
                })
              }
            </Grid>
          </Grid>

          {/* <Divider orientation="vertical" /> */}

          <Grid item container xs={3} justify="center" alignItems="center">
            <img src={portrait} className={classes.portrait}/> 
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}


export default Home