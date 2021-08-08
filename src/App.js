import React from "react";
import logo from "./logo.svg";
// import './App.css';
import Bganimation from "./Components/assets/my_bg.mov";
import BgPic from "./Components/assets/portfolio_bg.png";
import ReactPlayer from "react-player";
import MediaQuery, { useMediaQuery } from "react-responsive";

//React-Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//PAGES
import Home from "./Components/HomeComponent";
import About from "./Components/AboutComponent";
import Project from "./Components/ProjectComponent";
import Contact from "./Components/ContactComponent";
import Footer from "./Components/FooterComponent";
import Navbar from "./Components/Navbar";

//MUI stuff
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#ffffff",
    },
    typography: {
      useNextVariants: true,
      "font-size": "20px",
    },
  },
});

function App(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <MediaQuery minWidth={900}>
      {/* <video
        autoPlay
        loop
        style={{
          position: "absolute",
          width: "100%",
          zIndex: "-1",
          filter: "brightness(0.3)",
          objectFit: "cover",
          height: "100%",
        }}
      > */}
        {/* <source src={BgPic} type="video/mp4"></source> */}
        <img style={{ position: "absolute",
          width: "100%",
          zIndex: "-1",
          filter: "brightness(0.3)",
          objectFit: "cover",
          height: "100%",}} src = {BgPic} />
      {/* </video> */}
      </MediaQuery>
      <MediaQuery maxWidth={900}>
      <video
        autoPlay
        loop
        style={{
          position: "absolute",
          width: "100%",
          zIndex: "-1",
          filter: "brightness(0.3)",
          objectFit: "cover",
          height: "200%",
        }}
      >
        <source src={Bganimation} type="video/mp4"></source>
      </video>
      </MediaQuery>
      
      <Grid container>
        <Grid item sm={12}>
          <Router>
            <Navbar />
            <Grid container>
              <Grid
                item
                style={{
                  minHeight: "82vh",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/projects" component={Project} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </Grid>
            </Grid>

            <Footer />
          </Router>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
