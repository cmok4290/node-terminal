import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  Link,
  IconButton,
  Container,
  Paper,
  Typography,
  makeStyles,
  Tooltip
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { projectData as tileData } from "../data/projects";

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    // justifyContent: "space-evenly",
    // overflow: "hidden",
    margin: "1.5rem auto",
    padding: "1.5rem 0"
  },
  title: {
    boxShadow: "none"
  },
  gridItem: {},
  gridListTile: {
    listStyleType: "none",
    width: "100%",
    height: "300px"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} id="projects">
          <Paper className={classes.title}>PROJECTS</Paper>
        </Grid>
        {tileData.map(tile => (
          <Grid
            item
            component="a"
            href={tile.link || "../#projects"}
            xs={12}
            sm={6}
            md={4}
            key={tile.id}
          >
            <GridListTile key={tile.id} className={classes.gridListTile}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.description}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <Tooltip
                      title={tile.tags.map(tag => (
                        <div>{tag}</div>
                      ))}
                      placement="left"
                    >
                      <InfoIcon />
                    </Tooltip>
                  </IconButton>
                }
              />
            </GridListTile>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
