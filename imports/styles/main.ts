import { makeStyles, Theme } from "@material-ui/core/styles";
import { ROSE } from "../constants/colors";

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(11),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "4px 4px 4px 4px",
  },
  avatar: {
    backgroundColor: "#020934",
    margin: theme.spacing(1),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  button: {
    backgroundColor: ROSE,
    "&:hover": {
      backgroundColor: "#020934",
    },
    color: "#fff",
    height: "50px",
    display: "inline-block",
    marginTop: "20px",
  },
  errorMessage: {
    color: "#ff0000",
  },
}));
