import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpening: false
    }
  }

  handleClickOpen() {
    this.setState({
      isOpening: true
    })
  }

  handleClose() {
    this.setState({
      isOpening: false
    })
  }
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.handleClickOpen()}
        >
          <AddIcon /> Add new task
        </Button>
        <Dialog
          open={this.state.isOpening}
          onClose={() => this.handleClose()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleClose()} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
export default TaskForm
