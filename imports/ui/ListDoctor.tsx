import React from "react";
import { TableCell, TableRow, IconButton } from "@material-ui/core";
import { withStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import { Doctor } from "../types";
import { ROSE } from "../constants/colors";

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: "rgb(33, 144, 171  )",
    color: "rgb(39, 70, 77)",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const StyledTableRow = withStyles((theme: Theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
    "&:hover": {
      backgroundColor: "#EDEDF3",
    },
  },
}))(TableRow);

const useStyles = makeStyles(() => ({
  icon: {
    color: ROSE
  }
}));

type ListProps = {
  doctor: Doctor,
  onDelete: (doctor: object) => void
}

const ListDoctor: React.FC<ListProps> = ({ doctor, onDelete }) => {
  const classes = useStyles();
  return (
    <StyledTableRow
      key={doctor._id}
      style={{ textDecoration: "none" }}
    >
      <StyledTableCell align="center">
        {doctor.firstName}
      </StyledTableCell>
      <StyledTableCell align="center">
        {doctor.lastName}
      </StyledTableCell>
      <StyledTableCell align="center">
        {doctor.lastNameMother}
      </StyledTableCell>
      <StyledTableCell align="center">
        {doctor.rut}
      </StyledTableCell>
      <StyledTableCell align="center">
        {doctor.specialty}
      </StyledTableCell>
      <StyledTableCell align="center">
        <IconButton aria-label="delete" onClick={() => onDelete(doctor)}>
          <DeleteIcon className={classes.icon} />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};


export default ListDoctor;
