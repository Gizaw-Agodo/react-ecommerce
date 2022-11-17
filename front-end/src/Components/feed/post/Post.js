import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from "./style"
import logo from "../../../assets/logo4.jpg"
function Post() {
    const classes  = useStyles()

  return (
    <Card style={{  marginBottom:"20px"}} >
      <CardMedia
        className={classes.cardmedia}
        component="img"
        alt="green iguana"
        height="240"
    image={logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color = "primary">Share</Button>
        <Button size="small" color = "primary">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Post