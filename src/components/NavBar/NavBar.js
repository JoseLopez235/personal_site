import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
  }
}))

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute" className={classes.root} color="transparent">
      <Toolbar>
        <Link className={classes.root} component={RouterLink} to='/'> 
          <img src={logo} className={classes.logo} /> 
        </Link>

        <Button component={RouterLink} to={"/"}>
          Home
        </Button>

        <Button component={RouterLink} to={"/projects"}>
          Projects
        </Button>

        <Button component={RouterLink} to={"/experience"}>
          Experience
        </Button>

        <Button component={RouterLink} to={"/resume"}>
          Resume
        </Button>

      </Toolbar>
    </AppBar>
  )
}

export default NavBar