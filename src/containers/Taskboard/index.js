import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './style'
import TaskList from '../../components/TaskList'
import TaskForm from '../../components/TaskForm'
import { STATUS } from './../../constants/'
import { Grid, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskAction from './../../actions/task'

class Taskborad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpening: false,
      productEditing: {}
    }
  }

  showTitleList = lst => {
    let result = lst.map((status, index) => {
      return (
        <Grid key={status.status_code} item xs={12} md={4}>
          <h2>
            <b>{status.status_text}</b>
          </h2>
        </Grid>
      )
    })
    return result
  }
  componentDidMount() {
    this.props.taskActionCreator.fetchGetList()
  }

  render() {
    let lstStatus = STATUS.sort((a, b) => a.status_code > b.status_code)
    let { listTask, classes } = this.props
    return (
      <Fragment>
        <Button
          variant="contained"
          color="default"
          onClick={() => this.props.taskActionCreator.fetchGetList()}
          className={classes.button}
        >
          Reload
        </Button>
        <Button
          variant="contained"
          color="default"
          onClick={() => this.props.taskActionCreator.fetchGetList()}
        >
          Reset
        </Button>
        <TaskForm
          isOpening={this.state.isOpening}
          productEditing={this.state.productEditing}
        />
        <Grid container>{this.showTitleList(lstStatus)}</Grid>
        <TaskList listTask={listTask} key={listTask} />
      </Fragment>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreator: bindActionCreators(taskAction, dispatch)
  }
}
const mapStateToProps = state => {
  return {
    listTask: state.task.listTask
  }
}
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Taskborad)
)
