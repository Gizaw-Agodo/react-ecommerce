import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  home: {
    paddingTop: theme.spacing(7),
  },
  rightbar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
