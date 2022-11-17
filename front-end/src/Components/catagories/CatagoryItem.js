import React from "react";
import {
  Box,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Card } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
function CatagoriesItem({item}) {
  const classes = useStyles();
  return (
    <Link to={`/products/${item.cat}`} style={{ textDecoration: "none" }}>
      <Card className={classes.card} elevation={9}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={item.img}
            alt="green iguana"
          />
          <CardContent
            className={classes.cardInfo}
            style={{ textDecoration: "none" }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {item.cat}
            </Typography>
            <Typography variant="body2" >
              Quality {item.cat} clothes with Minimum Discount
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default CatagoriesItem;
