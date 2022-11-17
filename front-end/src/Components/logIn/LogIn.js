import React, { useState } from "react";
import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { Lock } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../api";

function LogIn() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispath = useDispatch();
  const { isFetching, isError } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispath, { email, password });
  };

  return (
    <Grid className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "green" }}>
            <Lock />
          </Avatar>
          <Typography>Sign IN</Typography>
          <TextField
            label="email"
            required
            placeholder="enter email"
            fullWidth
            variant="outlined"
            style={{ marginTop: "20px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            required
            placeholder="enter password"
            fullWidth
            variant="outlined"
            style={{ marginTop: "20px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        {isError && <Typography color="error">something went wrong</Typography>}

        <Button
          style={{ marginTop: "15px", backgroundColor: "lightBlue" }}
          variant="contained"
          fullWidth
          onClick={(e) => handleSubmit(e)}
        >
          {isFetching ? (
            <CircularProgress />
          ) : (
            <Typography variant="body2"> Sign In</Typography>
          )}
        </Button>
        <Typography variant="body1" style={{ marginTop: "10px" }}>
          Do you have an account ?<Link to="">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default LogIn;
