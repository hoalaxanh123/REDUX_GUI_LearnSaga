import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { withStyles, Container } from "@material-ui/core";
import styles from "./style";
import theme from "./../../commons/themes/themes";
import Taskboard from "../Taskboard";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Taskboard/>
        </Container>
      </ThemeProvider>
    );
  }
}
export default withStyles(styles)(App);
