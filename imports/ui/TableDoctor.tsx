import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography
} from "@material-ui/core";
import { useTracker } from 'meteor/react-meteor-data'
import ListDoctor from "./ListDoctor";
import DoctorCollection from "../api/DoctorCollection";
import { BLUE_DARK } from '../constants/colors'

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: BLUE_DARK,
    color: "#fff",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
  title: {
    textAlign: 'center'
  }
});

const TableDoctor = () => {
  const classes = useStyles();

  const doctors: any = useTracker(() => {
    return DoctorCollection.find({}, { sort: { createdAt: -1 } }).fetch();
  })

  const deleteDoctor = ({ _id }) => DoctorCollection.remove(_id)

  return (
    <>
      {!doctors.length ? (
        <Typography component="h1" variant="h5" className={classes.title}>
          No doctors found!
        </Typography>) : (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">First Name</StyledTableCell>
                  <StyledTableCell align="center">Last Name</StyledTableCell>
                  <StyledTableCell align="center">Mother Last Name </StyledTableCell>
                  <StyledTableCell align="center">Rut</StyledTableCell>
                  <StyledTableCell align="center">Specialty</StyledTableCell>
                  <StyledTableCell align="center">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {doctors.map(doctor => (
                  <ListDoctor key={doctor._id} doctor={doctor} onDelete={deleteDoctor} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
    </>
  );
};

export default TableDoctor