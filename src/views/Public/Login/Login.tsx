import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'

import { MetaDescription } from './../../../components/MetaDescription'
import { login } from '../../../services/authSlice'

import { FormData } from './types'

const Login = () => {
  const dispath = useDispatch()

  const handleClick = (values: FormData) => {
    dispath(login({ ...values }))
  }

  return (
    <div>
      <MetaDescription
        title="Login"
        description="Login Page"
        keywords={['login', 'auth']}
      />
      <h2>LOGIN</h2>
      <Form
        onFinish={handleClick}
        wrapperCol={{
          sm: { span: 20, offset: 2 },
          md: { span: 14, offset: 5 },
          lg: { span: 12, offset: 6 },
          xl: { span: 10, offset: 7 },
          xxl: { span: 8, offset: 8 },
        }}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Por favor ingrese un email' },
            { type: 'email', message: 'No es un email valido' },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Por favor ingrese un email' },
            { min: 4, message: 'Debe ingresar minimo 4 caracteres' },
            { max: 45, message: 'Maximo puede ingresar 45 caracteres' },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
