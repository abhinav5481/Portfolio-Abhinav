import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  header: {
    fontFamily: "Sans",
    paddingBottom: "30px"
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
        <Grid item xs={10}>
          {/* <Typography
            className={classes.header}
            color="primary"
            variant="h1"
            component="h1"
          >
            Abhinav Agrawal
          </Typography> */}
           <Typography
            className={classes.header}
            color="primary"
            variant="h3"
            component="h3"
          >
           About me
          </Typography>
          <Typography
            className={classes.paragraph}
            variant="subtitle"
            component="h1"
            style={{ fontSize: "3vh", fontWeight: "normal" }}
          >
            {/* Hello! I'm Abhinav, a 22 year old, self-taught full stack developer.<br/>
I graduated from National Institute of Technology, Raipur in 2020, majoring in Electrical Engineering. Despite being 
from a non-computer science background, I got into coding/development because computers have always fascinated me.
 Seeing code getting converted to things we use regularly, like Facebook or Amazon, was no less than magic to me and that's where my quest to invent began!.
 As a personal mission, I strive to empower and improve other’s outlook and circumstances. 
I believe in being genuine and nurturing. My abilities extend to critical thinking and problem-solving with proficiency in decision-making. 
 I am always interested in learning, growing, and contributing to awesome projects!
 <br />
 <br />
 When not in front of a computer, you will probably find me playing guitar, relishing music 🎵🎧. */}

Hi, I am Abhinav Agrawal.<br></br> I have completed my graduation from National Institute of Technology, Raipur (NITRR 2016-2020).

I am currently working as Senior Software Engineer at Capgemini Technology Services India Ltd.

I have worked around a diverse range of technologies ranging from the full-stack development of some web based applications on MERN stack to developing some Big Data Solutions using Big data technologies such as Hive, Pyspark & Talend, alongside being pretty active in participating in events that encourage me to learn. I'm always willing to participate in something that helps me learn and grow.

I also have strong foundations of data structures, algorithms and coding fundamentals which help me understand and problems.
I primarily use Java for practising Data Structures and Algorithms and Javascript for Fullstack Development.
<br /><br />
So far I have had a journey full of learning, and I'm looking forward to learn and grow!

          </Typography>
          <br />
          <br />
          <Button
                    size="large"
                    color="primary"
                    variant="outlined"
                    style={{ marginLeft: "auto" }} href="https://drive.google.com/file/d/1EKGngG3t1J_hhHXAWogEYrSGWfw1mZMM/view?usp=sharing"
                  >
                    View My Resume
                  </Button>
          
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AboutComponent);
