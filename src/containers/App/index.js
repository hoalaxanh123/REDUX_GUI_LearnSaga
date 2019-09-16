import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { withStyles, ThemeProvider } from "@material-ui/styles";
import styles from "./style";
import theme from "./../../commons/themes/themes";

class App extends Component {
  render() {
    let { classes } = this.props;
    console.log("classes :", classes);
    console.log('theme :', theme);
    return (
      <ThemeProvider theme={theme}>
        <Container fixed className={classes.firt}>
          <Button variant="contained" color="primary">
            <Icon>add_circle</Icon>&nbsp;Thêm công việc mới
          </Button>
        </Container>
      </ThemeProvider>
    );
  }
}
export default withStyles(styles)(App);
