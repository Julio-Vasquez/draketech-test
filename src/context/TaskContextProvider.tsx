import { createContext, useReducer } from 'react'

import { contextData, contextChildren, taskType } from './type'
import { taskReducer } from '../services/task/TaskReducer'

export const TaskContext = createContext<contextData>({
  task: [],
  dispatch: () => null,
})

const TaskContextProvider = ({ children }: contextChildren) => {
  const initialState: taskType[] = []
  const [task, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TaskContext.Provider
      value={{
        task: task,
        dispatch: dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
export default TaskContextProvider
