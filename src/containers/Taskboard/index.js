import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './style'
import { TaskList } from '../../components/TaskList'
import TaskForm from '../../components/TaskForm'
import { STATUS } from './../../constants/'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskAction from './../../actions/task'

export class Taskborad extends Component {
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
            <b>
              {status.status_text}-{status.status_code}
            </b>
          </h2>
        </Grid>
      )
    })
    return result
  }
  componentDidMount() {
    // this.props.taskActionCreator.fetchGetList()
  }

  render() {
    let lstStatus = STATUS.sort((a, b) => a.status_code > b.status_code)
    let { listTask } = this.props
    listTask = [
      {
        id: 1,
        name: 's',
        des: 'des',
        status: 1
      }
    ]
    console.log('listTask :', listTask)
    return (
      <Fragment>
        <TaskForm
          isOpening={this.state.isOpening}
          productEditing={this.state.productEditing}
        />
        <Grid container>{this.showTitleList(lstStatus)}</Grid>
        <TaskList listTask={listTask} />
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
