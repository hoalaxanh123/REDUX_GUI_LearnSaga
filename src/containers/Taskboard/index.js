import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './style'
import { TaskList } from '../../components/TaskList'
import TaskForm from '../../components/TaskForm'
import { STATUS } from './../../constants/'
import { Grid } from '@material-ui/core'

const listTask = () => {
  let result = []
  for (let index = 1; index < 5; index++) {
    let obj = {
      id: index,
      title: 'Task ' + index,
      des:
        'The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it. ' +
        index,
      status: Math.floor(Math.random() * 3)
    }
    result.push(obj)
  }
  return result
}

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

  render() {
    let lstStatus = STATUS.sort((a, b) => a.status_code > b.status_code)
    return (
      <Fragment>
        <TaskForm
          isOpening={this.state.isOpening}
          productEditing={this.state.productEditing}
        />

        <Grid container>{this.showTitleList(lstStatus)}</Grid>
        <TaskList listTask={listTask()} />
      </Fragment>
    )
  }
}
export default withStyles(styles)(Taskborad)
