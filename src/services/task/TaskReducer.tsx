import { currentAction } from './TaskAction'
import { basicTask } from './types'

export const taskReducer = (
  state: any,
  action: { type: string; task: basicTask | any }
) => {
  switch (action.type) {
    case currentAction.ADD_TASK: {
      return [...state, action.task]
    }

    case currentAction.REMOVE_TASK: {
      const newTaskList = state.filter(
        (task: basicTask) => task.id !== action.task.id
      )
      return [newTaskList]
    }

    case currentAction.UPDATE_TASK: {
      const taskListUpdate = state.filter(
        (task: basicTask) => task.id !== action.task.id
      )
      return [...taskListUpdate, action.task]
    }

    case currentAction.GET_TASK: {
      return action.task
    }

    default: {
      return state
    }
  }
}
