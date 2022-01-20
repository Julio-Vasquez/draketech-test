import { useContext } from 'react'
import { Table, Space, Tooltip, Button } from 'antd'
import { DeleteOutlined, EditTwoTone } from '@ant-design/icons'

import { TaskContext } from '../../../../../context/TaskContextProvider'
import { currentAction } from '../../../../../services/task/TaskAction'
import { basicTask } from '../../../../../services/task/types'
import { taskType } from '../../../../../context/type'

export const ListTask = () => {
  const { task, dispatch } = useContext(TaskContext)

  const handleDeleteTask = (task: basicTask) => {
    dispatch({
      type: currentAction.REMOVE_TASK,
      task,
    })
  }
  const handleUpdateTask = () => {}
  console.log(task.length)

  const columns = [
    {
      title: 'Titilo',
      dataIndex: 'title',
      key: 'title',
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: 'Descripcion',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
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
              onClick={() => handleUpdateTask()}
              type="primary"
              style={{ marginLeft: '5px' }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ]

  return (
    <div className="col-12">
      {task.length > 0 ? (
        <Table columns={columns} dataSource={task} key={task.length} />
      ) : (
        'NO TASK'
      )}
    </div>
  )
}
