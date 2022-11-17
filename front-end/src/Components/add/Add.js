import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import MuiAlert from "@mui/material/Alert";

import { Add as AddIcon } from "@material-ui/icons";
import React, { useState } from "react";
import useStyle from "./styles";

function Add() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <>
      <Tooltip
        title="add"
        area-label="add"
        style={{ position: "fixed", bottom: 20, right: 20 }}
      >
        <Fab
          color="primary"
          classname={classes.absolute}
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal open={open}>
        <Container className={classes.container}>
          <Typography className={classes.formtitle} variant="h6">
            Create your Story{" "}
          </Typography>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField label="Title" size="small" style={{ width: "100%" }} />
            </div>
            <div className={classes.item}>
              <TextField
                label="Description"
                size="small"
                defaultValue="tell your story..."
                variant="outlined"
                style={{ width: "100%" }}
                multiline
                rows={4}
              />
            </div>
            <div className={classes.item}>
              <TextField
                label="visibility"
                select
                style={{ width: "100%" }}
                value="public"
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel>Who can comment ?</FormLabel>
              <RadioGroup defaultValue="everybody" row>
                <FormControlLabel
                  value="everybody"
                  control={<Radio />}
                  label="everybody"
                />
                <FormControlLabel
                  value="My friends only"
                  control={<Radio />}
                  label="My friends only"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio />}
                  label="Nobody"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 30 }}
                onClick= {()=>setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={2000}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
