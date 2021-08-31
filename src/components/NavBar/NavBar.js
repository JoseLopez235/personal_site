import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import logo from "../NavBar/logo.png";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none'
  },
  logo: {
    maxWidth: '80px'
  },
  button: {
    color: 'white'
  }
}))

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root} color="transparent">
      <Toolbar>
        <Link className={classes.root} component={RouterLink} to='/'> 
          <img src={logo} className={classes.logo} /> 
        </Link>

        <Button component={RouterLink} to={"/"} className={classes.button}>
          About
        </Button>

        <Button component={RouterLink} to={"/projects"} className={classes.button}>
          Projects
        </Button>

        <Button component={RouterLink} to={"/experience"} className={classes.button}>
          Experience
        </Button>

        <Button component={RouterLink} to={"/resume"} className={classes.button}>
          Resume
        </Button>

      </Toolbar>
    </AppBar>
  )
}

export default NavBar