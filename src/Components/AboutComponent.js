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

{/* Hi, I am Abhinav Agrawal.<br></br> I have completed my graduation from National Institute of Technology, Raipur (NITRR 2016-2020).

I am currently working as Senior Software Engineer at Capgemini Technology Services India Ltd.

I have worked around a diverse range of technologies ranging from the full-stack development of some web based applications on MERN stack to developing some Big Data Solutions using Big data technologies such as Hive, Pyspark & Talend, alongside being pretty active in participating in events that encourage me to learn. I'm always willing to participate in something that helps me learn and grow.

I also have strong foundations of data structures, algorithms and coding fundamentals which help me understand and problems.
I primarily use Java for practising Data Structures and Algorithms and Javascript for Fullstack Development.
<br /><br />
So far I have had a journey full of learning, and I'm looking forward to learn and grow! */}
Hello! I'm Abhinav, self-taught full stack developer. <br/>
I have 3 Yrs experience of working in the area of web application development with a major focus on Backend Development. I have developed end-to-end web applications on scale. I started my career as an intern at a budding startup. I developed and deployed Mailmodo’s official website. I also contributed to the development of their email editor platform.<br></br>
<br></br>
Since the inception of my journey with web development, where I crafted my web application and skillfully maneuvered its code to achieve the precise outcomes, an unwavering fascination for employing programming to tackle genuine engineering challenges has taken hold of me. This fervor has consistently driven me to excel in the expansive realm of full stack development. As a testament to this pursuit, I've conceptualized and realized various applications within my personal projects. Noteworthy examples include a 'Web Chatting Application,' 'Video Calling Application reminiscent of Google Meet,' and a Micro Blogging Platform.<br></br><br></br>

I am also passionate about contributing to open-source projects. I have won the CrossWoc'21 open-source challenge organized by IEEE DTU. I am enthusiastic about staying current with cutting-edge technologies and industry best practices. Continuously pursuing novel challenges is my forte. So far the journey has been great and I am looking forward to continuing the same.

          </Typography>
          <br />
          <br />
          <Button
                    size="large"
                    color="primary"
                    variant="outlined"
                    style={{ marginLeft: "auto" }} href="https://drive.google.com/file/d/1CIVTN6nLq3GVugMeAm2KwChbeQAYs8_1/view"
                  >
                    View My Resume
                  </Button>
          
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AboutComponent);
