import { makeStyles } from "@material-ui/core";
import "@fontsource/montez";

export default makeStyles((theme) => ({
  container: {
    width: " 100%",
    height: "100vh",
    display: "flex",
    position: "relative",
    // overflow: " hidden",
    marginTop: theme.spacing(10),
  },
  title: { fontFamily: `"Montez"` },

  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "80vh",
    paddingLeft: theme.spacing(8),
    marginRight: theme.spacing(3),

    [theme.breakpoints.down("sm")]: {
      align:"center",
      width:"100%",
      height:"50vh",
      padding:theme.spacing(4)
    },
  },

  filterContainer: {
    width: "50%",
    margin: "30px 0px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  filter: {
    display: "flex",
    alignItems: "center",
  },
  filterColor: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "2px solid black",
    backgroundColor: (props) => props.color,
    margin: "0px 5px",
    cursor: "pointer",
  },

  filterSize: {
    marginLeft: "20px",
    padding: "5px",
  },

  addContainer: {
    width: " 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  amountContainer: {
    display: "flex",
    alignItems: "center",
    fontWeight: "700px",
  },

  amount: {
    width: "30px",
    height: "30px",
    borderRadius: "10px",
    border: "1px solid teal",
    display: "flex",
    alignItems: "center",
    justifyContent: " center",
    margin: "0px 5px",
  },

  button: {
    padding: "5px",
    border: "2px solid teal",
    backgroundColor: "white",
    cursor: "pointer",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#f8f4f4",
    },
  },
}));
