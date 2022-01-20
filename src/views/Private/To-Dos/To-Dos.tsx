import axios from 'axios'
import { useContext, useEffect } from 'react'

import { URL_API } from '../../../common/env/env'
import { MetaDescription } from '../../../components/MetaDescription'
import { TaskContext } from '../../../context/TaskContextProvider'
import { currentAction } from '../../../services/task/TaskAction'
import { AddTask } from './components/AddTask'
import { ListTask } from './components/ListTask'

import styles from './ToDos.module.scss'

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
    <div className={`${styles.to_dos} col-12 mr-0`}>
      <MetaDescription
        title="Listado de tareas"
        keywords={['ToDos', 'Task', 'CRUD']}
        description="Formulario para visualizar y gestionar las tareas"
      />
      <div className="row h-100 ">
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
