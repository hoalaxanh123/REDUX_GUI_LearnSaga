import * as taskContants from './../constants/task'

const initialState = { listTask: [] }

const TaskReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case taskContants.FETCH_TASK:
      return { ...state, listTask: [] }
    case taskContants.FETCH_TASK_SUCCESS:
      return { ...state, listTask: actions.payload }
    case taskContants.FETCH_TASK_FAIL:
      console.log('Error get api :', actions.payload)
      return { ...state, listTask: [] }

    default:
      return state
  }
}
export default TaskReducer
