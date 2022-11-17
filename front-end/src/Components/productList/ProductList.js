import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Products from "../products/Products";
import useStyles from "./styles";

function ProductList() {
  const classes = useStyles();
  const [sort, setSort] = useState("newest");
  const [filters ,setFilters] = useState({color:"",size:""})
  const catagory = useLocation().pathname.split("/")[2]
  
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  return (
    <div className={classes.container} name = "anchor">
      <Typography gutterBottom ml={10} variant="h5" color="primary">
        {catagory}
      </Typography>
      <Divider />
      <div style={{ marginTop: 20 }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            ml={5}
            mt={6}
            variant="body1"
            className={classes.filterItem}
            style={{ marginTop: 20, fontWeight: "bold", fontSize: 19 }}
          >
            Filter products:
          </Typography>

          <FormControl
            variant="standard"
            className={classes.filterItem}
            style={{ minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
            <Select
              labelId="size"
              id="size"
              value={filters.size}
              name="size"
              onChange={(e) => handleFilters(e)}
            >
              <MenuItem value="XS">XS</MenuItem>
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            variant="standard"
            className={classes.filterItem}
            style={{ minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Color
            </InputLabel>
            <Select
              labelId="color"
              id="color"
              name="color"
              value={filters.color}
              onChange={(e) => handleFilters(e)}
              label="Color"
            >
              <MenuItem value="white">white</MenuItem>
              <MenuItem value="black">black</MenuItem>
              <MenuItem value="red">red</MenuItem>
              <MenuItem value="blue">blue</MenuItem>
              <MenuItem value="yellow">yellow</MenuItem>
              <MenuItem value="green">green</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography
            ml={5}
            mt={6}
            variant="body1"
            className={classes.filterItem}
            style={{ marginTop: 20, fontWeight: "bold", fontSize: 19 }}
          >
            Sort products:
          </Typography>
          <FormControl
            variant="standard"
            className={classes.filterItem}
            style={{ minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              sort by
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              label="Size"
            >
              <MenuItem value="newest">newest</MenuItem>
              <MenuItem value="price(asc)">price(asc)</MenuItem>
              <MenuItem value="price(des)">price(des)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <Products cat = {catagory} filters = {filters} sort = {sort} />
    </div>
  );
}

export default ProductList;
