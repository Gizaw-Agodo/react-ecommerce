import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProduct } from "../../api";
import useStyles from "./styles";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
function ProductDetail() {
  const classes = useStyles();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()

  useEffect(() => {
    getProduct(productId).then((item) => {
      setProduct(item);
    });
  }, [productId]);


  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };


  return (
    <div>
      <Grid container className={classes.container} >
        <Grid item sm={12} md={6}>
          <Box className= {classes.imageBox}
            component="img"
            sx={{
              height: "80vh",
              display: "block",
              width: "100%",
              overflow: "hidden",
            }}
            src={product.img}
            alt={product.title}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <Paper className={classes.info} square elevation={2}>
            <Typography variant="h3" className={classes.title}>
              {product.title}
            </Typography>
            <Typography variant="body1">
              {product.desc}
           
            </Typography>
            <Typography style={{ fontWeight: 100, fontSize: 40 }}>
              price :{`${product.price}$`}
            </Typography>
            <Box className={classes.filterContainer}>
              <Box className={classes.filter}>
                <Typography>Color</Typography>
                {product.color?.map((c) => (
                  <Box
                    className={classes.filterColor}
                    style={{ backgroundColor: c }}
                    color={c}
                    key={c}
                    onClick={() => setColor(c)}
                  ></Box>
                ))}
              </Box>
              <Box className={classes.filter}>
                <Typography style={{ marginRight: "10px" }}>Size</Typography>
                <FormControl variant="standard">
                  <Select
                    labelId="size"
                    id="size"
                    value={size}
                    name="size"
                    onChange={(e) => setSize(e.target.value)}
                  >
                    {product.size?.map((s) => (
                      <MenuItem key={s} value={s}>
                        {s}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box className={classes.addContainer}>
              <Box className={classes.amountContainer}>
                <Remove onClick={() => handleQuantity("dec")} />
                <span className={classes.amount}>{quantity}</span>
                <Add onClick={() => handleQuantity("inc")} />
              </Box>
              <Button className={classes.button} onClick={()=>dispatch(addProduct({product,quantity}))}>
                ADD TO CART
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetail;
