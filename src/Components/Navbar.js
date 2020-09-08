import React, { Component } from "react";
import { Link } from "react-router-dom";
import profieImg from "./assets/profile.jpg";

//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Backdrop from "@material-ui/core/Backdrop";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
const styles = (theme) => ({
  root: {
    backgroundColor: "transparent",
    position: "relative",
    "boxShadow": "none"

  },
  button: {
    "text-transform": "none",
    marginLeft: "30px",
   
  },
});

class Navbar extends Component {
  state = {
    open: false,
  };
  handleToggle = () => {
    this.setState({ open: !this.state.open });
    setTimeout(this.handleClose, 3000);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (

          
          <AppBar  position="fixed" className={classes.root}>
          <Toolbar className="nav-container">
              <Hidden only="xs">
            <Avatar
              alt="Remy Sharp"
              style={{ marginRight: "auto", marginLeft: "10px" }}
              src={profieImg}
              onClick={this.handleToggle}
            />
            <Backdrop open={this.state.open} onClick={this.handleToogle}>
              <img src={profieImg} style={{ "border-radius": "50%" }} />
            </Backdrop>
            </Hidden>
            <Button
              className={classes.button}
              color="primary"
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              className={classes.button}
              color="primary"
              component={Link}
              to="/about"
            >
              About Me
            </Button>
            <Button
              className={classes.button}
              color="primary"
              component={Link}
              to="/projects"
            >
              Projects
            </Button>
            <Button
              className={classes.button}
              color="primary"
              component={Link}
              to="/contact"
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
         
        
      
    );
  }
}

export default withStyles(styles)(Navbar);
//https://rohitbajaj.in/about
