import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/styles'
import styles from './style'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
class TaskItem extends Component {
  render() {
    let { task } = this.props
    return (
      <Grid item xs={12} md={12}>
        <Card>
          <CardActionArea>
            <CardMedia image="tiger.jpg" title="Contemplative Reptile" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {task.name}-{task.status}
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
            <Fab color="secondary" aria-label="edit" size="small">
              <DeleteIcon />
            </Fab>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

export default withStyles(styles)(TaskItem)
