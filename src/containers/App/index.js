import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { withStyles, Container } from '@material-ui/core'
import styles from './style'
import theme from './../../commons/themes/themes'
import Taskboard from '../Taskboard'
import { Provider } from 'react-redux'
import configureStore from './../../redux/configStore'
import { Spinner } from './../../components/Spinner'
const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Container>
            <Taskboard />
            <Spinner />
          </Container>
        </ThemeProvider>
      </Provider>
    )
  }
}
export default withStyles(styles)(App)
