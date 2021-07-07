import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        
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