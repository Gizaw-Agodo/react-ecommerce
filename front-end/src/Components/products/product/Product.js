import React from "react";
import { Box, IconButton, Paper } from "@material-ui/core";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import useStyles from "./style";
import { Link } from "react-router-dom";

function Product({ item }) {
  
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.container} elevation={3}>
        <img
          src={item.img}
          alt=""
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "25px",
          }}
        />
        <Box className={classes.info}>
          <IconButton aria-label="delete" className={classes.icon}>
            <ShoppingCartOutlined color="primary" />
          </IconButton>

          <Link to={`/product/${item._id}`}>
            <IconButton aria-label="delete" className={classes.icon}>
              <SearchOutlined />
            </IconButton>
          </Link>
          
          <IconButton aria-label="delete" className={classes.icon}>
            <FavoriteBorderOutlined />
          </IconButton>
        </Box>
      </Paper>
    </div>
  );
}

export default Product;
