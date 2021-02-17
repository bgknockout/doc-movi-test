import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ROSE } from '../constants/colors';

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: ROSE
  },
}))

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          DocMovi - Felipe Román
          </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
