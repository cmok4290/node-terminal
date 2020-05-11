import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { Link, Container, Tooltip } from "@material-ui/core";
import { contactData as data } from "../data/contacts";
import "@fortawesome/fontawesome-free/css/all.css";

const styles = {
  root: {
    flexGrow: 1,
    margin: "6rem auto 1.5rem auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  link: {
    padding: "0 1rem"
  }
};

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg" className={classes.root} id="contact">
        {data.map(contact => (
          <Tooltip title={contact.tooltip} placement="top">
            <Link
              key={contact.id}
              component="a"
              href={contact.link || "../#contact"}
              rel="noopener noreferrer"
              className={classes.link}
            >
              <i className={`${contact.icon} fa-3x`} />
            </Link>
          </Tooltip>
        ))}
      </Container>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contact);
