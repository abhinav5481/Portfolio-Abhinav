import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import axios from "axios";
import OrbitSpinner from "@bit/bondz.react-epic-spinners.orbit-spinner";

const styles = (theme) => ({
    header: {
        fontFamily: "Sans",

    }
    ,
    textField: {
        color: "primary",
        borderBottom: "1px solid #33c9dc",
        marginTop: "20px",
        placeholderColor: "red",
        '& .MuiInputLabel-animated': {
            color: "#33c9dc"
        },
        '& .MuiInputBase-input': {
            color: "#ffffff"
        }
        
    },
    errorText: {
        marginTop: "20px",

    },
    
    button: {
        marginTop: "20px"
    }
    
})

class ContactComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            contact: "",
            message: "",
            error: "",
            submitMessage: "",
            loading: false
                }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const userData = {
            name: this.state.name,
            email: this.state.email,
            contact: this.state.contact,
            message: this.state.message
        };
        if(userData.name == "" || userData.email == "" || userData.contact == "" || userData.message == ""){
            this.setState({
                error: "Please enter complete details!",
                submitMessage: "",
                loading : false
        });
        }
        else{
           
            axios.post("https://us-central1-about-abhinav.cloudfunctions.net/api/form",userData)
        .then((res) => {
            console.log(res.data);
            this.setState({
                name: "",
                email: "",
                contact: "",
                message: "",
                error: "",
                submitMessage: `Thanks ${res.data.name} for connecting with me!`,
                loading: false
                
            })
            
        })
        .catch((err) => {
            console.log(err);
        });
        }
        
    }
  render() {
      const {classes} = this.props;
    return (
      <Grid
        justify="center"
        container
        style={{
          height: "100%",
          backgroundColor: "transparent",
          textAlign: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Grid item xs={8}>
          <Typography
            className={classes.header}
            color="primary"
            variant="h3"
            component="h3"
          >
           Get In Touch!
          </Typography>
          
          <form noValidate onSubmit={this.handleSubmit}>
              <TextField
              id="name"
              name="name"
              type="text"
              label="Name"
              placeholder="Enter your name.."
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange}
              fullWidth />

<TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              placeholder="abc@xyz.com"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth />

<TextField
              id="contact"
              name="contact"
              type="text"
              label="Phone number"
              placeholder="+91"
              className={classes.textField}
              value={this.state.contact}
              onChange={this.handleChange}
              fullWidth />

<TextField
              id="message"
              name="message"
              type="text"
              label="Message"
              multiline
              rows="5"
              placeholder="Type your message here!!"
              className={classes.textField}
              value={this.state.message}
              onChange={this.handleChange}
              fullWidth />
{this.state.error ? 
    <Typography
            className={classes.errorText}
            color="secondary"
            variant="caption"
            component="p"
          >
           {this.state.error}
           
          </Typography> : ""
}
{this.state.submitMessage ? 
    <Typography
            className={classes.errorText}
            color="primary"
            variant="p"
            component="p"
          >
           {this.state.submitMessage}
           
          </Typography>
          : ""}



<Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.button}
              disabled={this.state.loading == true ? true : false}
             
            >
              Submit{
                  this.state.loading ? <OrbitSpinner
          color="#33c9dc"
          size="20"
          style={{ position: "absolute" }}
        /> : " "}
            </Button>{" "}

          </form>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ContactComponent);
