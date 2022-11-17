import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  container: {
    width: 550,
    height: 500,
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    borderRadius: 3,
    [theme.breakpoints.down("sm")]: {
      width: "100vh",
      height: "100vh",
    },
  },
  formtitle :{
   textAlign:"center",
   
  },
  form :{
    padding : theme.spacing(2)
  },
  item :{
    marginBottom:theme.spacing(4)
  }
}));
