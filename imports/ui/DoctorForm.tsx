import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {
  createStyles,
  fade,
  Theme,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import { useStyles } from '../styles/main'
// Components
import { ControlledAutocomplete } from '../components/ControllerAutoComplete'
// Api
import { medicalSpeciality } from '../api/medicalSpeciality'
import DoctorCollection from '../api/DoctorCollection';
// 3th Parts
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import rut from 'rut.js'



const { validate, format } = rut
const textRequired: string = "This field is required"

type FormDoctor = {
  firstName: string
  lastName: string
  lastNameMother: string
  rut: string
  specialty: {
    nombre: string
  }
}

const doctorSchema = yup.object().shape({
  firstName: yup.string()
    .required(textRequired)
    .min(2, 'Must be min 2 digits')
    .max(15, 'Must be max 15 digits'),
  lastName: yup.string()
    .required(textRequired)
    .min(2, 'Must be min 2 digits')
    .max(15, 'Must be max 15 digits'),
  lastNameMother: yup.string()
    .required(textRequired)
    .min(2, 'Must be min 2 digits')
    .max(15, 'Must be max 15 digits'),
  rut: yup.string().test("len", "El rut no es válido", val => !val || validate(val)).required(textRequired),
  specialty: yup.object({
    nombre: yup.string().required(textRequired)
  })
})

const defaultValues = {
  firstName: "",
  lastName: "",
  lastNameMother: "",
  rut: "",
  specialty: {
    nombre: ""
  }
}

const DoctorForm = () => {
  const classes = useStyles();

  const { control, register, handleSubmit, reset, errors } = useForm<FormDoctor>({
    mode: 'onSubmit',
    resolver: yupResolver(doctorSchema),
    defaultValues: defaultValues
  });

  const onSubmit = (values: FormDoctor) => {

    const { nombre } = values.specialty

    DoctorCollection.insert({
      firstName: values.firstName,
      lastName: values.lastName,
      lastNameMother: values.lastNameMother,
      rut: format(values.rut),
      specialty: nombre,
      createdAt: new Date()
    })
    reset(defaultValues)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocalHospitalIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Doctor
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="off"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                inputRef={register}
                error={!!errors.firstName}
              />
              {errors.firstName && (
                <p className={classes.errorMessage}>
                  {errors.firstName.message}
                </p>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"

                inputRef={register}
                error={!!errors.lastName}
              />
              {errors.lastName && (
                <p className={classes.errorMessage}>
                  {errors.lastName.message}
                </p>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                variant="outlined"
                required
                fullWidth
                id="lastNameMother"
                label="Last Name"
                name="lastNameMother"
                inputRef={register}
                error={!!errors.lastNameMother}
              />
              {errors.lastNameMother && (
                <p className={classes.errorMessage}>
                  {errors.lastNameMother.message}
                </p>
              )}
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="off"
                name="rut"
                variant="outlined"
                required
                fullWidth
                id="rut"
                label="Rut"
                inputRef={register}
                error={!!errors.rut}
              />
              {errors.rut && (
                <p className={classes.errorMessage}>
                  {errors.rut.message}
                </p>
              )}
            </Grid>
            <Grid item xs={12} sm={12}>
              <ControlledAutocomplete
                control={control}
                classes={classes}
                name="specialty"
                options={medicalSpeciality}
                getOptionLabel={option => option.nombre}
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Specialty"
                    margin="normal"
                    error={!!errors.specialty}
                  />
                )}
              >
                <>
                  {errors.specialty && (
                    <p className={classes.errorMessage}>
                      {errors.specialty?.nombre?.message}
                    </p>
                  )}
                </>
              </ControlledAutocomplete>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.button}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default DoctorForm