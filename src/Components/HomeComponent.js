import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = (theme) => ({
    header: {
        
        fontFamily: "Sans",
       
    },
    paragraph: {
    color: "#ffffff"
    }
})

 class HomeComponent extends Component {
    render() {
        const {classes} = this.props;
        return (
            
                <Grid justify="center" container style={{height:"100%", backgroundColor: "transparent", textAlign: "center", alignItems: "center"}}>
                    <Grid  item xs={8}>
                    <Typography className={classes.header} color="primary" variant="h2" component="h2">Abhinav Agrawal</Typography>
                <Typography className={classes.paragraph} variant="subtitle" component="h4" style={{fontSize: "3.5vh", fontWeight: "normal"}}>Hi!👋🏻 I am a full-stack developer who likes working with Javascript 
                libraries & frameworks. I am romantic about learning, and web
                 development keeps me forever a student.</Typography>
                    </Grid>
                </Grid>
                
        
             
            
        )
    }
}

export default withStyles(styles)(HomeComponent);
