import { Form, Input, Button, Select, Checkbox, Row, Col } from 'antd'
import axios from 'axios'
import { useContext } from 'react'
import { v4 } from 'uuid'

import { URL_API } from '../../../../../common/env/env'
import { TaskContext } from '../../../../../context/TaskContextProvider'
import { useData } from '../../../../../hooks/useData'
import { AUTH_KEY } from '../../../../../services/auth/authSlice'
import { currentAction } from '../../../../../services/task/TaskAction'

import styles from './AddTask.module.scss'

export const AddTask = () => {
  const { Option } = Select
  const { dispatch } = useContext(TaskContext)
  const { user } = useData({ reducer: AUTH_KEY })

  const handleAddTask = (value: { title: string; description: string }) => {
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
    <div className={`${styles.add_task} col-12`}>
      <h3 className="text-center">Crear una nueva tarea</h3>
      <Form onFinish={handleAddTask}>
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Form.Item
              name="title"
              label="Titulo"
              rules={[
                { required: true, message: 'campo requerido' },
                { min: 4, message: 'Minimo 4 caracteres' },
              ]}
              hasFeedback
            >
              <Input placeholder="Title" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Prioridad"
              name="priority"
              rules={[{ required: true, message: 'seleccione una opcion' }]}
              hasFeedback
            >
              <Select placeholder="Seleccione Prioridad">
                <Option value="Alta">Alta</Option>
                <Option value="Media">Media</Option>
                <Option value="Baja">Baja</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={18}>
            <Form.Item
              name="description"
              label="Descripcion"
              rules={[
                { required: true, message: 'campo requerido' },
                { min: 4, message: 'Minimo 4 caracteres' },
              ]}
              hasFeedback
            >
              <Input placeholder="Describa la tarea" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item name="modify">
              <Checkbox>Esta tarea es modificable?</Checkbox>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            crear task
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
