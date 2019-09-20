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

const DefaultList = [
  {
    id: '1',
    name: 'name 1',
    des: 'des 1',
    status: 1
  },
  {
    id: '2',
    name: 'name 2',
    des: 'des 2',
    status: 2
  },
  {
    id: '3',
    name: 'name 3',
    des: 'des 3',
    status: 1
  },
  {
    id: '4',
    name: 'name 4',
    des: 'des 4',
    status: 0
  },
  {
    id: '5',
    name: 'name 5',
    des: 'des 5',
    status: 1
  },
  {
    id: '6',
    name: 'name 6',
    des: 'des 6',
    status: 0
  },
  {
    id: '7',
    name: 'name 7',
    des: 'des 7',
    status: 0
  },
  {
    id: '8',
    name: 'name 8',
    des: 'des 8',
    status: 2
  },
  {
    id: '9',
    name: 'name 9',
    des: 'des 9',
    status: 0
  },
  {
    id: '10',
    name: 'name 10',
    des: 'des 10',
    status: 2
  }
]
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
