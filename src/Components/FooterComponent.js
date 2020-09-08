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
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const styles = (theme) => ({
  root: {
    backgroundColor: "transparent",
    position: "relative",
    "boxShadow": "none",
    margin: "0px"

  },
  footerIcons:{
      cursor: "pointer"
  }
});

class FooterComponent extends Component {
  render() {
    const { classes } = this.props;
    return (

          
          <AppBar  position="fixed" className={classes.root}>
          <Toolbar style={{ marginLeft: "auto", marginRight: "auto", justifyContent:"space-between", width:"15vw"}} className="nav-container">
            <GitHubIcon className={classes.footerIcons} fontSize="large" color="primary" onClick={event =>  window.location.href='https://github.com/abhinav5481'} />
            <MailOutlineIcon className={classes.footerIcons} fontSize="large" color="primary" onClick={event =>  window.location.href='mailto:agrawal.abhinav98@gmail.com'} />
            <LinkedInIcon className={classes.footerIcons} fontSize="large" color="primary" onClick={event =>  window.location.href='https://www.linkedin.com/in/abhinav98/'} ></LinkedInIcon>
          </Toolbar>
        </AppBar>
         
        
      
    );
  }
}

export default withStyles(styles)(FooterComponent);
//https://rohitbajaj.in/about
