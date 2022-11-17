import { Grid } from '@material-ui/core'
import React from 'react'
import Post from './post/Post'
import useStyles from "./styles"
function Feed() {
  const classes = useStyles()
  return (
    <div className={classes.feed}>
      <Grid container spacing = {2} style = {{marginTop:"23px"}}>
        <Grid item md = {3}>
          <Post/>
        </Grid>
        <Grid item md = {3}>
          <Post/>
        </Grid>
        <Grid item md = {3}>
          <Post/>
        </Grid>
        <Grid item md = {3}>
          <Post/>
        </Grid>
        <Grid item md = {6}>
          <Post/>
        </Grid>
        <Grid item md = {6}>
          <Post/>
        </Grid>

      </Grid>
      
    </div>
  )
}

export default Feed