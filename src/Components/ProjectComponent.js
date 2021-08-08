import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import { TextareaAutosize } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import profieImg from "./assets/profile.jpg";
import Hidden from '@material-ui/core/Hidden';
import MediaQuery, { useMediaQuery } from "react-responsive";

//bit stuff
import OrbitSpinner from "@bit/bondz.react-epic-spinners.orbit-spinner";

const styles = (theme) => ({
  root: {
    width: 345,
    height: 275
    
  }
});

class ProjectComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
      <Grid
        container
        spacing={4}
        xs={12}
        alignItems="center"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          paddingTop: "20px",
          // border: "1px solid red",
          // paddingBottom:"20px"
          // width: "100%"
          
      

        }}
      >
       
            <Grid item >
              <Card align="center" className={classes.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Social Ape
                    </Typography>
                    <Typography
                      variant="body2"
                      color="grey"
                      component="p"
                      align="center"
                    >
                      {/* Social media platform. A place where anyone can register,
                      create profile, write blog posts, comment & like other
                      blog posts and much more! */}
                      A Social media platform where user can register, write blog posts, upvote (like) & write comments on others blog posts.
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      color="primary"
                      component="p"
                      align="center"
                    >
                      Tech Stack
                    </Typography>
                    <Typography
                      variant="body2"
                      color="grey"
                      component="p"
                      align="center"
                    >
                      React.js, Redux, Node.js, Express.js, Firebase
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginLeft: "auto" }}
                    href="https://socialapp-75994.web.app/signup"
                  >
                    View Demo
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginRight: "auto" }}
                    href="https://github.com/abhinav5481/socialape.git"
                  >
                    View SourceCode
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Web-Chat App
                    </Typography>
                    <Typography
                      variant="body2"
                      color="grey"
                      component="p"
                      align="center"
                    >
                     Real time chat application, developed for
instant messaging. User can create account,
track notifications & send messages.
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      color="primary"
                      component="p"
                      align="center"
                    >
                      Tech Stack
                    </Typography>
                    <Typography
                      variant="body2"
                      color="grey"
                      component="p"
                      align="center"
                    >
                      React.js, Node.js, Express.js, Firebase
                    </Typography>
                    <br />
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginLeft: "auto" }}
                    href="https://chat-app-39de2.web.app/dashboard"
                  >
                    View Demo
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginRight: "auto" }}
                    href="https://github.com/abhinav5481/web-chat-application.git"
                  >
                    view Sourcecode
                  </Button>
                </CardActions>
              </Card>
            </Grid>

          </Grid>

           <Grid container
        spacing={4}
        xs={12}
        alignItems="center"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          paddingTop: "20px"}} >
           <Grid item>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Restaurant's Website
                    </Typography>
                    <Typography
                      variant="body2"
                      color="grey"
                      component="p"
                      align="center"
                    >
                      A restaurant's web app to showcase menu items, chef's
                      profile and customer feedback for food items.
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      color="primary"
                      component="p"
                      align="center"
                    >
                      Tech Stack
                    </Typography>
                    <Typography
                      variant="body2"
                      color="grey"
                      component="p"
                      align="center"
                    >
                      React.js & Redux
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginLeft: "auto" }}
                    href="https://restaurante-de-confusion.web.app/home"
                  >
                    View Demo
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginRight: "auto" }}
                    href="https://github.com/abhinav5481/Restaurante-de-confusion.git"
                  >
                    View Sourcecode
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {/* Budget Management App */}
                      Loan Management System
                    </Typography>
                    <Typography
                      variant="body2"
                      color="grey"
                      component="p"
                      align="center"
                    >
                      {/* A simple budget management app for students. User can add, edit & delete items to their expenditure list and track the total expenditure. */}
                      Developed a Node.js based back-end solution
for a fully featured Loan Management System.
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      color="primary"
                      component="p"
                      align="center"
                    >
                      Tech Stack
                    </Typography>
                    <Typography
                      variant="body2"
                      color="grey"
                      component="p"
                      align="center"
                    >
                     
Express.js, Node.js, Firebase,
Postman.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginLeft: "auto" }}
                    // href="https://budget-calculator-19e38.web.app/"
                    href="https://github.com/abhinav5481/loan-management-system"
                  >
                    View Demo
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginRight: "auto" }}
                    // href="https://github.com/abhinav5481/budget-calculator.git"
                    href = "https://github.com/abhinav5481/loan-management-system"
                  >
                    view Sourcecode
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* <Hidden only={['xs', 'sm','md',"lg"]}>
            <Grid item>
            <Card align="center" className={classes.root}  style={{backgroundColor: "transparent"}}>
                <CardActionArea>
                  <CardContent>
                  <OrbitSpinner
                color="#33c9dc"
                size="200"
               
              />
                    </CardContent>
                    </CardActionArea>
                    </Card>
              
            </Grid>

            <Grid item >
            <Card align="center" className={classes.root} style={{backgroundColor: "transparent"}}>
                <CardActionArea>
                  <CardContent>
                  <OrbitSpinner
                color="#33c9dc"
                size="200"
                
              />
                    </CardContent>
                    </CardActionArea>
                    </Card>
              
            </Grid>
            </Hidden> */}
            
      </Grid>
      </>
    );
  }
}

export default withStyles(styles)(ProjectComponent);
