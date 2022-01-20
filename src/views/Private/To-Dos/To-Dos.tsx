import axios from 'axios'
import { useContext, useEffect } from 'react'
import { URL_API } from '../../../common/env/env'
import { TaskContext } from '../../../context/TaskContextProvider'
import { currentAction } from '../../../services/task/TaskAction'
import { AddTask } from './components/AddTask'
import { ListTask } from './components/ListTask/ListTask'

const ToDos = () => {
  const { dispatch } = useContext(TaskContext)

  useEffect(() => {
    axios
      .get(`${URL_API}/task`)
      .then(res => {
        console.log(res.data)

        dispatch({ type: currentAction.GET_TASK, task: res.data })
      })
      .catch(e => console.log(e))
  }, [dispatch])

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <ListTask />
        </div>
        <div className="col-6">
          <AddTask />
        </div>
      </div>
    </div>
  )
}

export default ToDos
