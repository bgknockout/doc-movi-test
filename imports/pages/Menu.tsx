import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Box,
} from "@material-ui/core";
import DoctorForm from '../ui/DoctorForm';
import TableDoctor from '../ui/TableDoctor'

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(50),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto'
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },

  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  paperTable: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    color: '#fff',
    backgroundColor: '#187be7',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  submit: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  },
  link: {
    textDecoration: 'none'
  },
  h1:{
    textAlign: 'center'
  }
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <DoctorForm />
        <Box className={classes.paperTable}>
          <TableDoctor />
        </Box>
      </main>
    </React.Fragment>
  );
}

export default Menu