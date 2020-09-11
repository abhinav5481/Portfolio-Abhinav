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
                      Social media platform. A place where anyone can register,
                      create profile, write blog posts, comment & like other
                      blog posts and much more!
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
                  >
                    View Demo
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginRight: "auto" }}
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
                      A simple one to one live chat application where user can
                      register and send messages.
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
                    href="https://www.google.com/"
                  >
                    View Demo
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginRight: "auto" }}
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
                  >
                    View Demo
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginRight: "auto" }}
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
                      Budget Management App
                    </Typography>
                    <Typography
                      variant="body2"
                      color="grey"
                      component="p"
                      align="center"
                    >
                      &nbsp; &nbsp; &nbsp; &nbsp; A budget management app for
                      students.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
                      React.js
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginLeft: "auto" }}
                  >
                    View Demo
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    style={{ marginRight: "auto" }}
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
