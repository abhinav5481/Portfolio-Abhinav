import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  header: {
    fontFamily: "Sans",
  },
  paragraph: {
    color: "#ffffff",
  },
});

class AboutComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        justify="center"
        container
        style={{
          height: "100%",
          backgroundColor: "transparent",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Grid item md={10}>
          {/* <Typography
            className={classes.header}
            color="primary"
            variant="h1"
            component="h1"
          >
            Abhinav Agrawal
          </Typography> */}
          <Typography
            className={classes.paragraph}
            variant="subtitle"
            component="h1"
            style={{ fontSize: "3vh", fontWeight: "normal" }}
          >
            Hello! I'm Abhinav, a 22 year old, self-taught full stack developer.<br/>
I graduated from National Institute of Technology, Raipur in 2020, majoring in Electrical Engineering. Despite being 
from a non-computer science background, I got into coding/development because computers have always fascinated me.
 Seeing code getting converted to things we use regularly, like Facebook or Amazon, was no less than magic to me and that's where my quest to invent began!.
 As a personal mission, I strive to empower and improve other’s outlook and circumstances. 
I believe in being genuine and nurturing. My abilities extend to critical thinking and problem-solving with proficiency in decision-making. 
 I am always interested in learning, growing, and contributing to awesome projects!
 <br />
 <br />
 When not in front of a computer, you will probably find me playing guitar, relishing music 🎵🎧.

          </Typography>
          <br />
          <br />
          <Button
                    size="large"
                    color="primary"
                    variant="outlined"
                    style={{ marginLeft: "auto" }} href="https://drive.google.com/file/d/1FpkT3m2huW_It4efoWbZu7QKD_47LuFz/view?usp=sharing"
                  >
                    View My Resume
                  </Button>
          
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AboutComponent);
