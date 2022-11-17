import { makeStyles } from "@material-ui/core";
import "@fontsource/montez";

export default makeStyles((theme) => ({
  card: {
    "&:hover": {
      transform: "scale(1.05)",
      color: "white",
      transition: "all 0.5s ease",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    
    },
  },
}));

