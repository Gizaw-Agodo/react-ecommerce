import { makeStyles } from "@material-ui/core";
import "@fontsource/montez";

export default makeStyles((theme) => ({
  container: {
    borderRadius: "25px",
    flex: 1,
    height: 350,
    width: 280,
    margin: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    "&:hover": {
      transform: "scale(1.1)",
    },
    "&:hover $info": {
      opacity: 1,
    },
  },

  info: {
    borderRadius:"25px",
    opacity: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.5s ease",
  },

  icon: {
    marginRight: theme.spacing(2),
    backgroundColor: "#e9f5f5",
    "&:hover": {
      backgroundColor: "#e9f5f5",
      transform: " scale(1.1)",
    },
  },
}));
