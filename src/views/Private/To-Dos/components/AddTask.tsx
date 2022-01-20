import { Form, Input, Button } from 'antd'
import axios from 'axios'
import { useContext } from 'react'
import { v4 } from 'uuid'
import { URL_API } from '../../../../common/env/env'

import { TaskContext } from '../../../../context/TaskContextProvider'
import { useData } from '../../../../hooks/useData'
import { AUTH_KEY } from '../../../../services/auth/authSlice'
import { currentAction } from '../../../../services/task/TaskAction'

type formData = {
  title: string
  description: string
}
export const AddTask = () => {
  const { dispatch } = useContext(TaskContext)
  const { user } = useData({ reducer: AUTH_KEY })

  const handleAddTask = (value: formData) => {
    console.log(value)

    const payload = {
      id: v4(),
      createAt: new Date().toLocaleDateString(),
      title: value.title,
      description: value.description,
      user: user,
    }
    axios.post(URL_API, JSON.stringify(payload)).then(() => {
      dispatch({
        type: currentAction.ADD_TASK,
        task: payload,
      })
    })
  }

  return (
    <div>
      <h3>Crear una nueva tarea</h3>
      <Form onFinish={handleAddTask}>
        <Form.Item
          name="title"
          rules={[
            { required: true, message: 'campo requerido' },
            { min: 4, message: 'Minimo 4 caracteres' },
          ]}
          hasFeedback
        >
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[
            { required: true, message: 'campo requerido' },
            { min: 4, message: 'Minimo 4 caracteres' },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            crear task
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
