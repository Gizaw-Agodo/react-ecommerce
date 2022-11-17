import { alpha, makeStyles } from "@material-ui/core/styles";
import "@fontsource/montez";

export default makeStyles((theme) => ({
  container: {
    display:"flex",
    alignItems:"center",
    width: "100vw",
    marginTop:0,
    height: "100vh",
    background: `linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center`,
    backgroundSize: "cover",
  },

  paper: {
    padding: theme.spacing(4),
    width: 350,
    height: "55vh",
    margin: "auto",
  },
}));
