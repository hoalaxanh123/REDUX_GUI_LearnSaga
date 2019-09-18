import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/styles'
import styles from './style'
import { Grid } from '@material-ui/core'
import { STATUS } from './../../constants/'
import { TaskItem } from '../TaskItem'

export class TaskList extends Component {
  render() {
    let { listTask } = this.props
    let lstStatus = STATUS.sort((a, b) => a.status_code > b.status_code)
    let showList = () => {
      let result = lstStatus.map((status, index) => {
        return (
          <Grid item xs={12} md={4} key={index}>
            <Grid
              container
              direction="column"
              key={index}
              justify="space-around"
              spacing={3}
            >
              {showTaskByStatusCode(status.status_code)}
            </Grid>
          </Grid>
        )
      })
      return result
    }
    let showTaskByStatusCode = statusCode => {
      let lst = listTask.filter(x => x.status === statusCode)
      return lst.map((task, index) => {
        return <TaskItem key={index} task={task}></TaskItem>
      })
    }
    return (
      <Fragment>
        <Grid container spacing={3} direction="row">
          {showList()}
        </Grid>
      </Fragment>
    )
  }
}
export default withStyles(styles)(TaskList)
