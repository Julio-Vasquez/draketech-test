import axios from 'axios'
import { useContext } from 'react'
import { Table, Space, Tooltip, Button } from 'antd'
import { DeleteOutlined, EditTwoTone } from '@ant-design/icons'

import { TaskContext } from '../../../../../context/TaskContextProvider'
import { currentAction } from '../../../../../services/task/TaskAction'
import { basicTask } from '../../../../../services/task/types'
import { taskType } from '../../../../../context/type'
import { URL_API } from '../../../../../common/env/env'

import styles from './ListTask.module.scss'

export const ListTask = () => {
  const { task, dispatch } = useContext(TaskContext)

  const handleDeleteTask = (task: basicTask) => {
    axios.delete(`${URL_API}/task/${task.id}`).then(res => {
      dispatch({
        type: currentAction.REMOVE_TASK,
        task,
      })
    })
  }

  const handleUpdateTask = (task: basicTask) => {
    axios.put(`${URL_API}/task/${task.id}`, task).then(res => {
      dispatch({ type: currentAction.UPDATE_TASK, task })
    })
  }

  const columns = [
    {
      title: 'Titulo',
      dataIndex: 'title',
      key: 'title',
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Acción',
      key: 'action',
      render: (_: any, record: taskType) => (
        <Space size="middle">
          <Tooltip title="Eliminar tarea">
            <Button
              icon={<DeleteOutlined />}
              shape="circle"
              onClick={() => handleDeleteTask(record)}
              danger
              style={{ marginLeft: '5px' }}
            />
          </Tooltip>
          <Tooltip title="Modificar tarea">
            <Button
              icon={<EditTwoTone />}
              shape="circle"
              onClick={() => handleUpdateTask(record)}
              type="primary"
              style={{ marginLeft: '5px' }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ]

  return (
    <div className={`${styles.list_task} col-12`}>
      <h3 className="text-center">Listado de Tareas</h3>
      {task.length > 0 ? (
        <Table columns={columns} dataSource={task} key={task.length} />
      ) : (
        'NO TASK'
      )}
    </div>
  )
}
