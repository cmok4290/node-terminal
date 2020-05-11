import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const styles = {
  root: {
    margin: "1.5rem 0 0 0"
  },
  footer: {
    padding: "2.5rem 0",
    textAlign: "center",
    color: "#f9f9fa"
  }
};

class Footer extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <div
          style={{
            padding: "2.5rem 0",
            textAlign: "center",
            color: theme.textColor
          }}
        >
          <Typography component="p">© Chheany Mok</Typography>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
