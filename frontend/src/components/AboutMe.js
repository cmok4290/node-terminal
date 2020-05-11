import React from "react";
import {
  Paper,
  Typography,
  makeStyles,
  Grid,
  Container
} from "@material-ui/core";
import { aboutMeData as data } from "../data/aboutme";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "1.5rem"
  },
  paper: {
    boxShadow: "none"
  }
}));

export default function AboutMe(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} id="about">
          <Paper className={classes.paper}>ABOUT ME</Paper>
        </Grid>
        {data.map(info => (
          <Grid item xs={12} sm={4} key={info.id}>
            <Paper className={classes.paper}>
              <Typography>{info.text}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
