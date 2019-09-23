import React, { Component } from 'react'
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  Grid,
  Fab
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/styles'
import styles from './style'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskAction from './../../actions/task'
// import { STATUS } from './../../constants'

class TaskItem extends Component {
  onDelete = id => {
    this.props.taskActionCreator.deleteTask_Request(id)
  }
  render() {
    let { task } = this.props
    return (
      <Grid item xs={12} md={12}>
        <Card>
          <CardActionArea>
            <CardMedia image="tiger.jpg" title="Contemplative Reptile" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {task.name}
              </Typography>
              <hr />
              <Typography variant="body2" color="textSecondary" component="p">
                {task.des}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Fab color="primary" aria-label="edit" size="small">
              <EditIcon />
            </Fab>
            <Fab
              color="secondary"
              aria-label="edit"
              size="small"
              onClick={() => this.onDelete(task.id)}
            >
              <DeleteIcon />
            </Fab>
          </CardActions>
        </Card>
      </Grid>
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
  )(TaskItem)
)
