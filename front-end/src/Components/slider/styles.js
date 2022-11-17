import { makeStyles } from "@material-ui/core";
import "@fontsource/montez";

export default makeStyles((theme) => ({
  container: {
    width: " 100%",
    height: "100vh",
    display: "flex",
    position: "relative",
    overflow: " hidden",
  },

  logo: {
    fontFamily: `"Montez"`,
    fontWeight:"bold",
    fontSize:"100px",
    flex: 2,
    // fontSize: "35px",
    display: "flex",
    "&:hover": {
      fontWeight: "bold",
    },
  },

  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    bgcolor: "background.default",
    marginTop: theme.spacing(8),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  },
}));
