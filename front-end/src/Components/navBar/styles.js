import { alpha, makeStyles } from "@material-ui/core/styles";
import "@fontsource/montez";

export default makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  logo: {
    fontFamily: `"Montez"`,
    flex :2,
    fontSize: "35px",
    display: "flex",
    "&:hover": {
      fontWeight: "bold",
    },
  },

  drewer:{
     [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  menu: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    justifyContent: "space-between",
  },

  menuItem: {
    marginRight: "8px",
    color: "blue",
    fontWeight: "bold",
    cursor: "pointer",
  },

  right: {
    flex: 0.5,
    display: "flex",
    justifyContent: "flex-end",
    marginRight: theme.spacing(4),
  },
  icons: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
  },
}));
