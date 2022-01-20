import { Form, Input, Button, Col } from 'antd'
import { useDispatch } from 'react-redux'

import { MetaDescription } from './../../../components/MetaDescription'
import { login } from '../../../services/auth/authSlice'
import { FormData } from './types'

import styles from './Login.module.scss'

const Login = () => {
  const dispath = useDispatch()

  const handleClick = (values: FormData) => {
    dispath(login({ ...values }))
  }

  return (
    <div
      className={`${styles.login} m-0 justify-content-center align-items-center vh-100 row`}
    >
      <MetaDescription
        title="Login"
        description="Login Page"
        keywords={['login', 'auth']}
      />

      <Form className="col-4 text-center" onFinish={handleClick}>
        <h2 className="col-auto text-center">Iniciar Sesión</h2>
        <Form.Item
          label="mail"
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
          label="pwd"
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

        <Form.Item className="col-auto">
          <Button
            htmlType="submit"
            className={`${styles.login_btn} text-center col-6`}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
